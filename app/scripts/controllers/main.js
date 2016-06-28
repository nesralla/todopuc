'use strict';


angular.module('pucTodoListApp')
  .controller('MainCtrl', function ($scope,$http) {

    angular.element('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15,
      format: 'dd-mm-yyyy'
    });

    //Lista de todas as tarefas
    $scope.listaTarefas = [];

    //Tarefa Unica
    $scope.tarefa = {
      nome: '',
      dataInicial: '',
      dataFinal: '',
      marcador: ''
    };

    $scope.addTodo = function () {
      $scope.listaTarefas.push($scope.tarefa);
      console.log($scope.tarefa);
      Materialize.toast('Tarefa: '+$scope.tarefa.nome+' adcionada com sucesso!!', 3000, 'rounded');
      $scope.getTodos();
      $scope.tarefa = {
        nome: '',
        dataInicial: '',
        dataFinal: '',
        marcador: ''
      };

    };

    $scope.getTodos = function () {
      // body...
      $http({       
        method: 'GET',      
        url: 'http://todopuc.azurewebsites.net/api/tasks/'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    };
    $scope.saveTodo = function () {
      // body...
      $http({
        method: 'POST',
        url: 'http://todopuc.azurewebsites.net/api/tasks',
        data: $scope.tarefa
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    };
    $scope.deleteTodo = function (id) {
      // body...
      $http({
        method: 'POST',
        url: 'http://todopuc.azurewebsites.net/api/tasks/'+id
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    };

    $scope.removeTodo = function (index) {
      $scope.listaTarefas.splice(index, 1);
    };

    $scope.convertDate = function (data) {
      return data.toLocaleDateString().replace(/\//g,'-');
    };
});
