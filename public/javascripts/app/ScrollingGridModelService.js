var ScrollingGridModelService = function(proxy, cache) {
    BaseModelService.call(this, proxy, cache);
};

ScrollingGridModelService.prototype = new BaseModelService();

ScrollingGridModelService.prototype._validateParams = function(params) {

};

ScrollingGridModelService.prototype._inCache = function(params) {
    return (!_.isEmpty(this._cache.getData(params)));
};

ScrollingGridModelService.prototype._getCached = function(params) {
    return this._cache.getData(params);
};

ScrollingGridModelService.prototype._processRecords = function(err, records, callback) {
    this._cache.addRows(records);
    if (_.isFunction(callback)) {
        callback(err, records);
    }
};

ScrollingGridModelService.prototype.updateData = function(data, params, callback) {

};

ScrollingGridModelService.prototype.getColumns = function() {
    return [
        {
            name: 'Id',
            field: 'id'
        },
        {
            name: 'Hits',
            field: 'hits'
        },
        {
            name: 'Visits',
            field: 'visits'
        }
    ]
};

ScrollingGridModelService.prototype.getItem = function(i) {
    var buffer = i+10;

    if (this._cache.getData().length < buffer) {
        this.getData({last: this._cache.getData().length-1, limit: 20});
    }

    return this._cache.getData()[i];
};

ScrollingGridModelService.prototype.getLength = function() {
    return 1000;
};