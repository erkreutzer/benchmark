var TestProxy = function() {

};

TestProxy.prototype = new BaseProxy();

TestProxy.prototype.getData = function(params, callback) {
    var data = [{ country: "USA", visits: 4252, hits: 45, views: 999 },
        { country: "China", visits: 1882, hits: 342, views: 7676 },
        { country: "Japan", visits: 1809, hits: 23, views: 344},
        { country: "Germany", visits: 1322, hits: 4509, views: 3452 },
        { country: "UK", visits: 1122, hits: 4323, views: 56345 },
        { country: "France", visits: 1114, hits: 3453, views: 3466 },
        { country: "India", visits: 984, hits: 9823, views: 345 },
        { country: "Spain", visits: 711, hits: 23, views: 566 },
        { country: "Netherlands", visits: 665, hits: 452, views: 4322 },
        { country: "Russia", visits: 580, hits: 234, views: 64 },
        { country: "South Korea", visits: 443, hits: 3423, views: 45656 },
        { country: "Canada", visits: 441, hits: 2342, views: 3453 },
        { country: "Brazil", visits: 395, hits: 64, views: 4567 },
        { country: "Italy", visits: 386, hits: 345, views: 222 },
        { country: "Taiwan", visits: 338, hits: 112, views: 4567 },
        { country: "Poland", visits: 328, hits: 345, views: 655 }
    ];

    callback(null, data);
};

TestProxy.prototype.updateData = function(data, params, callback) {

};
