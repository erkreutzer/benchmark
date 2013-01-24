var ScrollingProxy = function() {

};

ScrollingProxy.prototype = new BaseProxy();

ScrollingProxy.prototype.getData = function(params, callback) {
    var first = params.last + 1;
    var last = first + params.limit;

    var data = [];
    for(first; first < last; ++first) {
        data.push({id: first, hits: first^2, visits: first*2});
    }

    callback(null, data);
};