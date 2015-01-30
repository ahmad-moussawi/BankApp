var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
       
        $urlRouterProvider.otherwise('/state1');

        $stateProvider.state('state1', {
            url: '/state1',
            templateUrl: '/web/partials/models/state1.html',
            controller: 'ModelsCtrl'
        });

    }]);
app.controller('ModelsCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('ModelsCtrl'); // comment this out how are you

        $scope.model = {
            display: 'Article',
            name: 'articles',
            feature_publishing: true,
            columns: []
        };

        $scope.createModel = function () {

            if ($scope.model.columns.length < 1) {
                toast('Please add at least one column', 1000);
                return;
            }

            if ($scope.model.option_dropifexist) {
                if (!confirm(concat(
                        'Are you sure you want to drop this table?',
                        '',
                        'This action will delete all the data in this table',
                        '\n'))) {
                    return false;
                }
            }

            $http.post('/api/models/', $scope.model)
                    .success(function (data) {
                        if (data.status === false) {
                            openModal(data.message, 'Error !');
                        }
                        console.log(data);
                    });
        };

        $scope.types = [
            'textbox:varchar',
            'textarea:text',
            'boolean:tinyint',
            'integer:int',
            'float:float',
            'image:text',
            'color:varchar',
            'barcode:varchar',
        ];

        $scope.newCol = {
            type: 'textbox:varchar'
        };

        $scope.addColumn = function () {
            $scope.model.columns.push({
                name: $scope.newCol.name,
                display: $scope.newCol.display,
                type: $scope.newCol.type
            });

            $scope.newCol = {
                type: 'textbox:varchar'
            };

            $('#displayInput').focus();
        };


    }])
        .directive('wavesEffect', function () {
            return {
                restrict: 'C',
                link: function (scope, elm, attrs) {
                    Waves.displayEffect();
                }
            };
        }).directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
;