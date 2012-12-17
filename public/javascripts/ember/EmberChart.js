var EmberChart = Ember.View.extend({
    attributeBindings: ['elementId'],
    template: Ember.Handlebars.compile('<div class="chart" style="width:600px; height:400px; background-color:#FFFFFF"></div>'),
    didInsertElement: function() {

        var chart = new AmCharts.AmPieChart();

        // then we set a data provider to the chart
        chart.dataProvider = this.model;

        chart.titleField = "country";
        chart.valueField = "visits";

        var self = this;
        chart.addListener('clickSlice', function(event) {
            var controller = self.get('controller');

            controller.fire('sliceClicked', event, event.dataItem.dataContext);
        });


        chart.write($('#' + this.elementId).children('.chart')[0]);
    }
});