var BaseModelService = function(proxy, cache) {
    this._proxy = proxy;
    this._cache = cache;
    this._paramsCalled = [];
};

BaseModelService.prototype.read = function(params, callback) {
    var self = this;

    self._validateParams(params);

    if (self._inCache(params)) {
        callback(null, self._getCached(params));
    } else {
        this._proxy.read(params, function(err, data) {
            self._processRecords(err, data, function(err, processedData) {
                if (_.isArray(processedData)) {
                    self._cache.addRows(processedData, params);
                } else {
                    self._cache.addRow(processedData, params);
                }

                callback(err, processedData);
            });
        });
    }
};

BaseModelService.prototype.update = function(data, params, callback) {
    throw new Error('BaseModelService unimplemented method updateData');
};

BaseModelService.prototype.containsParams = function(params) {
    var param = _.find(this._paramsCalled, function(p) {
        var paramFound = true;

        for(var key in params) {
            if (!p.hasOwnProperty(key) || p[key] !== params[key]) {
                paramFound = false;
            }
        }

        return paramFound;
    });

    return _.isNull(param) === false;
};

BaseModelService.prototype._validateParams = function(params) {
    throw new Error('BaseModelService unimplemented method _validateParams');
};

BaseModelService.prototype._inCache = function(params) {
    throw new Error('BaseModelService unimplemented method _inCache');
};

BaseModelService.prototype._getCached = function(params) {
    throw new Error('BaseModelService unimplemented method _getCached');
};

BaseModelService.prototype._processRecords = function(err, records, callback) {
    throw new Error('BaseModelService unimplemented method _processRecords');
};

BaseModelService.prototype.clear = function() {
    this._cache.clear();
};
