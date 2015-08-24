// Create an Angluar module

angular.module('myApp', [])
.controller('MyController',
  function ($scope) {
    $scope.name = '',
    $scope.clock = {
      now: new Date()
    };
    var updateClock = function () {
      $scope.clock.now = new Date();
    };
    setInterval(function () {
      $scope.$apply(updateClock);
    }, 1000);
    updateClock();
  }
);
