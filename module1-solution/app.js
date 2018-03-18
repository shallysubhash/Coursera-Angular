(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject['$scope'];
function LunchCheckController($scope) {
  $scope.Check=function() {
  $scope.TotalItems=0;
  var str=$scope.name;
  var noOfItems= CheckMenu(str);
  $scope.TotalItems=noOfItems;

  return noOfItems;
};
}
function CheckMenu(input) {
  if (input == "")
  {
      return "Please enter data first";
  }
  var items = input.split(",");
  noOfItems=0;
  var noOfItems = items.length;
  if (noOfItems==0)
  {
    return "Please enter data first";
  }
 if (noOfItems <=3 && noOfItems >= 1)
{
  return "Enjoy!";
}
 if ( noOfItems >= 3)
{
  return "Too much!";
}
}
})();
