var myApp = angular.module('myApp', []);
myApp.controller('TodoCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.todos = [];

    $http.get("api/data")
        .then(function (response) {
            $scope.todos = response.data;
        });

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };


    $scope.addTodo = function () {
        $scope.todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = '';
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };

}]);