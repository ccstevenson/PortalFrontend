'use strict';

/**
 * @ngdoc function
 * @name portalFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portalFrontendApp
 */
angular.module('portalFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
