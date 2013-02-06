var DripModelService = function(idProperty, proxy) {
    if (_.isUndefined(proxy)) {
        proxy = new MultiSourceProxy();
        proxy.addProxy('drip', new DripProxy())
            .addProxy('olap', new OlapProxy());
    }

    BaseModelService.call(this, proxy, new ParamKeyArrayCache(idProperty));
};

DripModelService.prototype = new BaseModelService();

DripModelService.prototype._inCache = function(params) {
    return (!_.isEmpty(this._cache.getData(params)));
};

DripModelService.prototype._validateParams = function(params) {
    return true;
};

DripModelService.prototype._readFromDripProxy = function(params, callback) {
    params.proxy = 'drip';
    var self = this;
    this._proxy.read(params, function(err, data) {
        self._processRecords(err, data, function(err, processedData) {
            if (_.isArray(processedData)) {
                self._cache.addRows(processedData, params);
            } else {
                self._cache.addRow(processedData, params);
            }

            self._readFromOlapProxy(params);

            callback(err, processedData);
        });
    });
};

DripModelService.prototype._readFromOlapProxy = function(params, callback) {
    params.proxy = 'olap';
    var self = this;
    this._proxy.read(params, function(err, data) {
        _.each(data, function(datum) {
            var cachedData = self._cache.getDataById(datum.id);
            _.extend(cachedData, datum);
        });
    });
};

DripModelService.prototype.read = function(params, callback) {
    if (this._inCache(params)) {
        callback(null, self._getCached(params));
    } else {
        this._readFromDripProxy(params, callback);
    }
};

DripModelService.prototype._processRecords = function(err, data, callback) {
    callback(null, data);
};