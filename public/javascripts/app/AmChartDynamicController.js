var AmChartDynamicController = function($scope, ChartService) {
    $scope.chartModel = ChartService.get();

    $scope.selected = {};
    $scope.visits = 0;
    $scope.updateVisits = function() {
        for(var index in $scope.chartModel) {
            if ($scope.chartModel[index].country === 'Australia') {
                $scope.chartModel[index].visits = parseInt($scope.visits);
            }
        }
    };

    $scope.hits = 0;
    $scope.updateHits = function() {
        for(var index in $scope.chartModel) {
            if ($scope.chartModel[index].country === 'Australia') {
                $scope.chartModel[index].hits = parseInt($scope.hits);
            }
        }
    };

    $scope.$on('sliceClicked', function(evt, slice) {
        $scope.selected = slice;
    });
}