describe('Array cache test suite', function() {

    var cache = null;

    beforeEach(function() {
        cache = new ArrayCache('id');
    });

    it('should convert params to json', function() {
        var params = {
            b: 'b',
            a: 'a',
            d: 'd'
        };

        var sorted = {
            a: 'a',
            b: 'b',
            d: 'd'
        };

        expect(cache._paramsToJSON(params)).toEqual(JSON.stringify(sorted));
    });

    it('should add a row to the cache', function() {
        var row = {
            id: 993
        };

        cache.addRow(row);

        expect(cache.length()).toEqual(1);
    });

    it('should add rows to the cache', function() {
        var rows = [
            {
                id: 222
            },
            {
                id: 555
            }
        ];

        cache.addRows(rows);

        expect(cache.length()).toEqual(2);
    });

    it('should get data by id', function() {
        var rows = [
            {
                id: 222
            },
            {
                id: 555
            }
        ];

        cache.addRows(rows);
        var row = cache.getDataById(222);
        expect(row.id).toEqual(222);
    });

    it('should remove a row from the cache', function() {
        var row = {
            id: 444
        };

        cache.addRow(row);
        cache.removeRow(0);

        expect(cache.length()).toEqual(0);
    });

    it('should remove a row by id from the cache', function() {
        var row = {
            id: 444
        };

        cache.addRow(row);
        cache.removeRowById(444);

        expect(cache.length()).toEqual(0);
    });

    it('should clear the cache', function() {
        var row = {
            id: 444
        };

        cache.addRow(row);
        cache.clear();

        expect(cache.length()).toEqual(0);
    });

    it('should clear an empty cache', function() {
        cache.clear();

        expect(cache.length()).toEqual(0);
    });
});