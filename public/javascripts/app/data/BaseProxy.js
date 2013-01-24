var BaseProxy = function() {

};

BaseProxy.prototype.getData = function(params, callback) {
    throw new Error('Unimplemented method getData');
};

BaseProxy.prototype.updateData = function(data, params, callback) {
    throw new Error('Unimplemented method updateData');
};