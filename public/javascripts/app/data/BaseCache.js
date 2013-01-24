var BaseCache = function(idProperty) {
    this._idProperty = idProperty;
};

BaseCache.prototype.updateRow = function(row, params) {

};

BaseCache.prototype.addRow = function(row, params) {
    throw new Error('BaseCache unimplemented method addRow');
};

BaseCache.prototype.addRows = function(rows, params) {
    throw new Error('BaseCache unimplemented method addRows');
};

BaseCache.prototype.removeRow = function(index) {
    throw new Error('BaseCache unimplemented method removeRow');
};

BaseCache.prototype.getData = function(params) {
    throw new Error('BaseCache unimplemented method getData');
};

BaseCache.prototype.getDataById = function(id) {
    throw new Error('BaseCache unimplemented method getDataById');
};

BaseCache.prototype.length = function() {
    throw new Error('BaseCache unimplemented method length');
};

BaseCache.prototype.clear = function() {
    throw new Error('BaseCache unimplemented method clear');
};

BaseCache.prototype._paramsToJSON = function(params) {
    var property = [];
    for(var name in params) {
        property.push(name);
    }

    var sorted = _.sortBy(property, function(value) {
        return value;
    });

    var sortedObject = {};

    _.each(sorted, function(key) {
        sortedObject[key] = params[key];
    });

    return JSON.stringify(sortedObject);
};