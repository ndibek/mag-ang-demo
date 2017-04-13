var myApp = angular.module('myApp', []);
myApp.controller('TodoCtrl', ['$scope', function ($scope) {

    $scope.todos = [
        { text: 'Learn AngularJS', done: false },
        { text: 'Build an app', done: false }
    ];

    $scope.addTodo = function () {
        $scope.todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = '';
    };

}]);