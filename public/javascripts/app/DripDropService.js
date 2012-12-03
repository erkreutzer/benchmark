angular.module('DripDropModule', [])
    .factory('DripDropService', function($rootScope) {
        return {
            fetchData: function(start, offset) {
                return {
                    col1: 'col1-' + start,
                    col2: 'col2-' + start,
                    col3: 'col3-' + start
                };
            },

            getColumnsForRowType: function(rowType) {
                return [
                    {
                        name: "First Column",
                        field: "col1"
                    },
                    {
                        name: "Second Column",
                        field: "col2"
                    },
                    {
                        name: "Third Column",
                        field: "col3"
                    }
                ]
            }
        }
    });