var GridApp = angular.module('GridApp', ['DripDropModule', 'SlickGridModule']);
GridApp.controller('GridController', function($scope, $injector, DripDropService) {
    $scope.dripDropModel = $injector.instantiate(DripDropModel);

    var count = 0;
    $scope.data = '';
    $scope.$on('gridViewportChanged', function(evt, gridData) {
        $scope.data = 'gridViewportChanged triggered - ' + count;
        $scope.$digest();
        count++;
    });
});

GridApp.controller('CampaignController', function($scope, $injector) {
    $scope.campaignModel = $injector.instantiate(CampaignGridModel);

    var count = 0;
    $scope.data = '';
    $scope.$on('gridViewportChanged', function(evt, gridData) {
        $scope.data = 'gridViewportChanged triggered - ' + count;
        $scope.$digest();
        count++;
    });
});