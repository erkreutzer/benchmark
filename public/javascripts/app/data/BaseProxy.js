var BaseProxy = function() {

};

BaseProxy.prototype.read = function(params, callback) {
    throw new Error('Unimplemented method getData');
};

BaseProxy.prototype.update = function(data, params, callback) {
    throw new Error('Unimplemented method updateData');
};