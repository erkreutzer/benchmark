describe('ParamKeyArrayCache test suite', function() {
    var cache;

    beforeEach(function() {
        cache = new ParamKeyArrayCache('id');
    });

    it('should add a row', function() {
        var params = {
            a: 'a'
        };

        cache.addRow({id: 444}, params);
        expect(cache.length()).toEqual(1);
    });

    it('should get the data', function() {
        var params = {
            a: 'a'
        };

        cache.addRow({id: 444}, params);
        expect(cache.getData(params).length).toEqual(1);
    });

    it('should not find any data for the params', function() {
        var params = {
            a: 'a'
        };

        cache.addRow({id: 444}, {a: 'b'});
        expect(cache.getData(params).length).toEqual(0);
    });
});