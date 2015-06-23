angular.module('random.kittens').controller('kittensController', function ($scope) {
  $scope.image = ""
  $scope.giveMeKittens = function() {
    var height = 600 + Math.floor((Math.random() * 98) + 1) + 1;
    var width = 400 + Math.floor((Math.random() * 98) + 1) + 1;
    $scope.image = 'http://placekitten.com/' + width + '/' + height;
  }

  $scope.giveMeKittens();
  
});