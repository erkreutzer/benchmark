angular.module('ChartApp', ['ChartModule', 'ngResource'])
    .factory('ChartService', function($resource) {
        return $resource('/chart/data', {}, {
            get: {method: 'GET', isArray: true}
        });
    });