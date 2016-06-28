'use strict';

/**
 * @ngdoc function
 * @name pucTodoListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pucTodoListApp
 */
angular.module('pucTodoListApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
