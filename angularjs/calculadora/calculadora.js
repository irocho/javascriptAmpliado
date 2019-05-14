var app = angular.module('myApp', []);
app.controller('calculadoraCtrl', function($scope) {
    $scope.x1 = 10;
    $scope.x2 = 10;
    $scope.total = function() {
        return $scope.x1 + $scope.x2;
    };
});

