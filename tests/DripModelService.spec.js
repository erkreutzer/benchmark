var TestDripProxy = function() {

};

TestDripProxy.prototype = new BaseProxy();

TestDripProxy.prototype.read = function(params, callback) {
    var retArray = [];
    for(var i = params.startIndex; i < (params.startIndex + 20); ++i) {
        retArray.push({id: i, value: 'item - ' + i});
    }

    callback(null, retArray);
};

var TestOlapProxy = function() {

};

TestOlapProxy.prototype = new BaseProxy();

TestOlapProxy.prototype.read = function(params, callback) {
    var retArray = [];
    for(var i = params.startIndex; i < (params.startIndex + 20); ++i) {
        retArray.push({id: i, olap: 'olap - ' + i});
    }

    callback(null, retArray);
};


describe('OlapModelService test suite', function() {
    var proxy = null;
    var service = null;

    beforeEach(function() {
        var proxy = new MultiSourceProxy();
        proxy.addProxy('drip', new TestDripProxy())
            .addProxy('olap', new TestOlapProxy());

        service = new DripModelService('id', proxy);
    });

    it('should retrieve data from the primary proxy', function() {
        service.read({startIndex: 0}, function(err, data) {
            expect(data.length).toEqual(20);
            _.each(data, function(datum) {
                expect(datum.value).toEqual('item - ' + datum.id);
            });
        });
    });

    it('should retrieve data from the secondary proxy', function() {
        var returnedData;
        service.read({startIndex: 0}, function(err, data) {
            returnedData = data;
        });

        _.each(returnedData, function(datum) {
            expect(datum.olap).toEqual('olap - ' + datum.id);
        });
    });
});