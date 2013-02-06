var MultiSourceProxy = function() {
    this._proxies = {};
};

MultiSourceProxy.prototype = new BaseProxy();

MultiSourceProxy.prototype.addProxy = function(name, proxy) {
    if (_.isUndefined(this._proxies[name])) {
        this._proxies[name] = proxy;
    }

    return this;
};

MultiSourceProxy.prototype.read = function(params, callback) {
    params = params || {};
    if (_.isUndefined(params.proxy)) {
        throw new Error('A proxy parameter is required for multi source reads');
    }

    var proxy = this._proxies[params.proxy];

    if (!proxy) {
        throw new Error('Invalid proxy for ' + params.proxy);
    }

    proxy.read(params, callback);
};