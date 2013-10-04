'use strict';

angular.module('webToolsApp').controller('MainCtrl', function ($scope) {

    var task1 = {
        text : "Esto es una tarea de prueba",
        date : Date.now(),
        done : false
    }

    var task2 = {
        text : "esto es otra tarea",
        date : Date.now(),
        done : false
    }

    $scope.tasks = [task1,task2];

    $scope.addTodo = function() {
        var task = {
            text : $scope.newTaskText,
            date : Date.now(),
            done : false
        }

        $scope.tasks.push(task);

        $scope.newTaskText = "";

    }

    $scope.delete = function(task){
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index,1);
    }

});
