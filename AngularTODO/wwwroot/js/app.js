var myApp = angular.module('myApp', []);
myApp.controller('TodoCtrl', ['$scope', function ($scope) {

    $scope.todos = [
        { text: 'Learn AngularJS', done: false },
        { text: 'Build an app', done: false }
    ];

}]);