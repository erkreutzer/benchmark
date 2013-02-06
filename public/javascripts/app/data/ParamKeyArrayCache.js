var ParamKeyArrayCache = function(idProperty) {
    BaseCache.call(this, idProperty);

    this._data = [];
    this._keyReference = {};
};

ParamKeyArrayCache.prototype = new ArrayCache();

ParamKeyArrayCache.prototype.addRow = function(row, params) {

    if (this._idProperty && !row.hasOwnProperty(this._idProperty)) {
        throw new Error('Invalid id for row: ' + this._idProperty);
    }

    if (!_.isUndefined(this.getDataById(row[this._idProperty]))) {
        return;
    }

    var key = this._paramsToJSON(params);
    if (!this._keyReference.hasOwnProperty(key)) {
        this._keyReference[key] = [];
    }

    this._data.push(row);
    this._keyReference[key].push(this._data.length - 1);
};

ParamKeyArrayCache.prototype.getData = function(params) {
    var key = this._paramsToJSON(params);

    var self = this;
    var data = [];
    if (this._keyReference.hasOwnProperty(key)) {
        var positions = this._keyReference[key];
        _.each(positions, function(index) {
            data.push(self._data[index]);
        });
    }

    return data;
};