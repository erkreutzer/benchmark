var ArrayCache = function(idProperty) {
    BaseCache.call(this, idProperty);
    this._data  = [];
    this._paramsLookup = {};
};

ArrayCache.prototype = new BaseCache();

ArrayCache.prototype.addRow = function(row, params) {
    if (this._idProperty && !row.hasOwnProperty(this._idProperty)) {
        throw new Error('Invalid row to be added - ' + row);
    }
    this._data.push(row);
};

ArrayCache.prototype.addRows = function(rows, params) {
    var self = this;
    _.each(rows, function(row) {
        self.addRow(row, params);
    });
};

ArrayCache.prototype.removeRow = function(index) {
    this._data.splice(index, 1);
};

ArrayCache.prototype.removeRowById = function(id) {
    var idx = null;
    for(var i = 0; i < this._data.length; ++i) {
        var datum = this._data[i];
        if (datum[this._idProperty] === id) {
            idx = i;
            break;
        }
    }

    if (idx !== null) {
        this._data.splice(idx, 1);
    }
};

ArrayCache.prototype.getData = function() {
    return this._data;
};

ArrayCache.prototype.getDataById = function(id) {
    var self = this;
    return _.find(this._data, function(datum) {
        return datum[self._idProperty] === id;
    });
};

ArrayCache.prototype.length = function() {
    return this._data.length;
};

ArrayCache.prototype.clear = function() {
    this._data.splice(0, this._data.length);
};