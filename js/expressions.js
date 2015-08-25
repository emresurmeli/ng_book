angular.module('myApp', [])
  .controller('MyController',
    function($scope, $interpolate) {
      $scope.to = 'emre@fullstack.io';
      $scope.emailBody = 'Hello {{ to }},\n\nMy name is Emre too!';
      // Set up a watch
      $scope.$watch('emailBody', function(body) {
        if (body) {
          var template = $interpolate(body);
          $scope.previewText =
            template({to: $scope.to});
        }
      });
});
