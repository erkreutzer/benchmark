var MockProxy = function() {
    this.getDataCalled = false;
};

MockProxy.prototype = new BaseProxy();

MockProxy.prototype.getData = function(params, callback) {

    var data = [
        {
            id: 1,
            name: 'first'
        },
        {
            id: 2,
            name: 'second'
        },
        {
            id: 3,
            name: 'third'
        }
    ];

    this.getDataCalled = true;

    callback(null, data);
};

describe('OlapModelService test suite', function() {
    var cache = null;
    var proxy = null;
    var service = null;

    beforeEach(function() {
        cache = new ArrayCache('id');
        proxy = new MockProxy();

        service = new OlapModelService(proxy, cache);
    });

    it('should find the param in the params called', function() {
        var params = {
            id: 11
        };

        service._paramsCalled.push(params);

        expect(service.containsParams(params)).toEqual(true);
    });

    it('should get data from the proxy', function() {
        var done = false;
        runs(function() {
            service.getData(null, function(err, data) {
                expect(err).toBe(null);
                expect(data.length).toEqual(3);
                expect(proxy.getDataCalled).toEqual(true);

                done = true;
            });
        });

        waitsFor(function() {
            return done;
        });
    });

    it('should get data from the cache', function() {
        var done = false;

        runs(function() {
            service.getData(null, function(err, data) {
                expect(err).toBe(null);
                expect(data.length).toEqual(3);
                expect(proxy.getDataCalled).toEqual(true);

                done = true;
            });
        });

        waitsFor(function() {
            return done;
        });

        proxy.getDataCalled = false;
        done = false;

        runs(function() {
            service.getData(null, function(err, data) {
                expect(err).toBe(null);
                expect(data.length).toEqual(3);
                //expect(proxy.getDataCalled).toEqual(false);

                done = true;
            });
        });

        waitsFor(function() {
            return done;
        });
    })

});