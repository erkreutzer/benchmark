angular.module('SlickGridModule', [])
    .directive('slickGrid', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                gridId: '@',
                columns: '=',
                model: '='
            },
            template: '<div id="{{gridId}}" style="width:600px;height:500px;"></div>',
            link: function(scope, element, attrs) {

                var options = {
                    enableCellNavigation: true,
                    enableColumnReorder: false
                };

                var grid = new Slick.Grid(element, scope.model, scope.model.getColumns(), options);
                grid.onViewportChanged.subscribe(function(evt) {
                    scope.$emit('gridViewportChanged', evt);
                    evt.stopPropagation();
                });
            }
        }
    });