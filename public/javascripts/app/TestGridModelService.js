var TestGridModelService = function(proxy, cache) {
    TestModelService.call(this, proxy, cache);
};

TestGridModelService.prototype = new TestModelService();

TestGridModelService.prototype.getColumns = function() {
    return [
        {
            name: 'Country',
            field: 'country'
        },
        {
            name: 'Visits',
            field: 'visits'
        },
        {
            name: 'Hits',
            field: 'hits'
        },
        {
            name: 'Views',
            field: 'views'
        }
    ]
};

TestGridModelService.prototype.getItem = function(i) {
    return this._cache.getData()[i];
};

TestGridModelService.prototype.getLength = function() {
    return this._cache.getData().length;
};