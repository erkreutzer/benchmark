var TestModelService = function(proxy, cache) {
    BaseModelService.call(this, proxy, cache);
};

TestModelService.prototype = new BaseModelService();

TestModelService.prototype._validateParams = function(params) {

};

TestModelService.prototype._inCache = function(params) {
    return (!_.isEmpty(this._cache.getData(params)));
};

TestModelService.prototype._getCached = function(params) {
    return this._cache.getData(params);
};

TestModelService.prototype._processRecords = function(err, records, callback) {
    this._cache.addRows(records);
    if (_.isFunction(callback)) {
        callback(err, records);
    }
};

TestModelService.prototype.updateData = function(data, params, callback) {
    if (!_.isArray(data)) {
        data = [data];
    }

    var self = this;
    _.each(data, function(datum) {
        if (datum.hasOwnProperty(self._idProperty)) {
        }
    });
};