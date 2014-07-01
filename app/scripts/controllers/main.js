'use strict';

/**
 * @ngdoc function
 * @name portalFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portalFrontendApp
 */
angular.module('portalFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
