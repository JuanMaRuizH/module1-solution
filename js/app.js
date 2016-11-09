(function() {
  'use strict';
  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.dishes = $scope.dishes;
      $scope.numberOfDishes;
      $scope.message = "";
      $scope.messageType = "";

      $scope.checkIfTooMuch = function() {
        if(!$scope.dishes) {
          $scope.message = "Please enter data first";
          $scope.messageType = 'alert-success'
        } else if (checkDishesLength($scope.dishes) < 4) {
          $scope.message = "Enjoy!";
          $scope.messageType = 'alert-success'
        } else {
          $scope.message = "Too much!";
          $scope.messageType = 'alert-danger'
        }
      };

      function checkDishesLength(dishes) {
        var dishesArr = dishes.split(",");
        angular.forEach(dishesArr, function(value, key) {
          console.log("value: " + value);
          if(!!value) {
            console.log("!!value: " + !!value);
            dishesArr.splice(key, 1);
          }
          return dishesArr.length;
        });
      }
    }
})();