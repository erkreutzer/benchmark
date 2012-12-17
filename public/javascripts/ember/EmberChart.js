var EmberChart = Ember.View.extend({
    attributeBindings: ['elementId'],
    template: Ember.Handlebars.compile('<div class="chart" style="width:600px; height:400px; background-color:#FFFFFF"></div>'),
    getModel: function() {
        return this.model;
    }.property('model@each'),
    didInsertElement: function() {

        var chart = new AmCharts.AmPieChart();

        // then we set a data provider to the chart
        chart.dataProvider = this.model;

        chart.titleField = "country";
        chart.valueField = "visits";

        var self = this;
        var controller = self.get('controller');
        chart.addListener('clickSlice', function(event) {

            controller.fire('sliceClicked', event, event.dataItem.dataContext);
        });

        controller.on('modelUpdated', function() {
            chart.validateData();
        });

        chart.write($('#' + this.elementId).children('.chart')[0]);
    }
});