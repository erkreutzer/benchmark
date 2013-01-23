var OlapModelService = function(proxy, cache) {
    BaseModelService.call(this, proxy, cache);
};

OlapModelService.prototype = new BaseModelService();

OlapModelService.prototype._validateParams = function(params) {

};

OlapModelService.prototype._inCache = function(params) {

};

OlapModelService.prototype._getCached = function(params) {

};

OlapModelService.prototype._processRecords = function(err, records, callback) {
    this._cache.addRows(records);
    callback(err, records);
};