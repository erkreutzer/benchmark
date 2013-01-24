var GridChartApp = angular.module('GridChartApp', ['ChartModule', 'SlickGridModule']);

GridChartApp.controller('GridChartController', function($scope) {
    var cache = new ParamKeyArrayCache('country');
    var proxy = new TestProxy();

    var service = new TestModelService(proxy, cache);
    $scope.selected = '';
    $scope.gridService = new TestGridModelService(proxy, cache);

    $scope.scrollingService = new ScrollingGridModelService(new ScrollingProxy(), new ParamKeyArrayCache('id'));

    $scope.scrollingService.getData({last:0, limit:50}, function(err, data) {
        $scope.scrollingData = data;
    });

    service.getData([], function(err, data) {
        $scope.data = data;
    });
});