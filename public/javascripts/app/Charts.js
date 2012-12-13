angular.module('ChartModule', [])
    .directive('pieChart', function() {
        return {
            restrict: 'A',
            scope: {
                chartId: '@',
                chartModel: '=chartModel'
            },
            controller: function($scope, $element) {
                var chart;
                $element.ready(function() {

                    chart = new AmCharts.AmPieChart();

                    // then we set a data provider to the chart
                    chart.dataProvider = $scope.chartModel;

                    $scope.$watch('chartModel', function() {
                        //chart.dataProvider = $scope.chartModel;
                        chart.validateData();
                    }, true);

                    chart.titleField = "country";
                    chart.valueField = "visits";

                    chart.addListener('clickSlice', function(event) {
                        $scope.$apply(function() {
                            $scope.$emit('sliceClicked', event.dataItem.dataContext);
                        });
                    });


                    chart.write($scope.chartId);
                });



            },
            replace: true,
            template: '<div id="{{chartId}}" style="width:600px; height:400px; background-color:#FFFFFF"></div>'
        }
    })
    .directive('lineChart', function() {
        return {
            restrict: 'A',
            scope: {
                chartId: '@',
                model: '=chartModel'
            },
            controller: function($scope, $element) {
                $element.ready(function() {
                    var chart = new AmCharts.AmSerialChart();
                    var graph = new AmCharts.AmGraph();

                    // then we set a data provider to the chart
                    chart.dataProvider = $scope.model;
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

                    $scope.$watch('model', function() {
                        //chart.dataProvider = $scope.chartModel;
                        chart.validateData();
                    }, true);

                    chart.write($scope.chartId);
                });

            },
            replace: true,
            template: '<div id="{{chartId}}" style="width:1000px; height:400px; background-color:#FFFFFF"></div>'
        }
    });