var BaseModelService = function(proxy, cache) {
    this._proxy = proxy;
    this._cache = cache;
    this._paramsCalled = [];
};

BaseModelService.prototype.getData = function(params, callback) {
    var self = this;

    self._validateParams(params);

    if (self._inCache(params)) {
        callback(null, self._getCached(params));
    } else {
        this._proxy.getData(params, function(err, data) {
            self._processRecords(err, data, callback);
        });
    }
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
