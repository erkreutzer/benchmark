var EmberChartController = Ember.Object.create({
    model: [
        Ember.Object.create({ country: "USA", visits: 4252 }),
        Ember.Object.create({ country: "China", visits: 1882, hits: 342, views: 7676 }),
        Ember.Object.create({ country: "Japan", visits: 1809, hits: 23, views: 344}),
        Ember.Object.create({ country: "Germany", visits: 1322, hits: 4509, views: 3452 }),
        Ember.Object.create({ country: "UK", visits: 1122, hits: 4323, views: 56345 }),
        Ember.Object.create({ country: "France", visits: 1114, hits: 3453, views: 3466 }),
        Ember.Object.create({ country: "India", visits: 984, hits: 9823, views: 345 }),
        Ember.Object.create({ country: "Spain", visits: 711, hits: 23, views: 566 }),
        Ember.Object.create({ country: "Netherlands", visits: 665, hits: 452, views: 4322 }),
        Ember.Object.create({ country: "Russia", visits: 580, hits: 234, views: 64 }),
        Ember.Object.create({ country: "South Korea", visits: 443, hits: 3423, views: 45656 }),
        Ember.Object.create({ country: "Canada", visits: 441, hits: 2342, views: 3453 }),
        Ember.Object.create({ country: "Brazil", visits: 395, hits: 64, views: 4567 }),
        Ember.Object.create({ country: "Italy", visits: 386, hits: 345, views: 222 }),
        //aus,
        Ember.Object.create({ country: "Taiwan", visits: 338, hits: 112, views: 4567 }),
        Ember.Object.create({ country: "Poland", visits: 328, hits: 345, views: 655 })
    ],

    onSliceClicked: function(event) {
        console.log(event);
    }
});