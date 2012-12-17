var EmberPieChart = Ember.View.extend({
    attributeBindings: ['elementId'],
    template: Ember.Handlebars.compile('<div class="chart" style="width:600px; height:400px; background-color:#FFFFFF"></div>'),
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

var EmberLineChart = Ember.View.extend({
    attributeBindings: ['elementId'],
    template: Ember.Handlebars.compile('<div class="chart" style="width:600px; height:400px; background-color:#FFFFFF"></div>'),
    didInsertElement: function() {

        var chart = new AmCharts.AmSerialChart();
        var graph = new AmCharts.AmGraph();

        // then we set a data provider to the chart
        chart.dataProvider = this.model;
        chart.categoryField = "country";

        var categoryAxis = chart.categoryAxis;
        categoryAxis.fillAlpha = 1;
        categoryAxis.fillColor = "#FAFAFA";
        categoryAxis.gridAlpha = 0;
        categoryAxis.axisAlpha = 0;
        categoryAxis.gridPosition = "start";
        categoryAxis.position = "top";

        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.title = "Hits";
        valueAxis.dashLength = 5;
        valueAxis.axisAlpha = 0;
        valueAxis.integersOnly = true;
        valueAxis.gridCount = 10;
        valueAxis.reversed = true; // this line makes the value axis reversed
        chart.addValueAxis(valueAxis);


        var graph = new AmCharts.AmGraph();
        graph.title = "Hits";
        graph.valueField = "hits";
        graph.balloonText = "place taken by Italy in [[category]]: [[value]]";
        graph.lineAlpha = 1;
        graph.bullet = "round";
        chart.addGraph(graph);

        var controller = this.get('controller');

        controller.on('modelUpdated', function() {
            chart.validateData();
        });


        chart.write($('#' + this.elementId).children('.chart')[0]);

    }
});