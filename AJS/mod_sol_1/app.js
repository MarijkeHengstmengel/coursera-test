(function () {
 'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {

    $scope.countLunch = function () {
      var message = count($scope.name);

      console.log(message);
      if (message == "Please enter data first")
      {
          $scope.color = "red";
          $scope.border = "5px solid red"
      }
      else
      {
         $scope.color = "green";
         $scope.border = "3px solid green"
      }
      $scope.message = message;
    }
  }

  //! I do NOT consider  empty items, i.e., , , as an item towards to the count

  function count(content){
    var message="";
    //if no input or only spaces as input ...
    if ((content === undefined) || (content.trim().length == 0))
    {
      message = "Please enter data first"

    }
    else
    {
      var arrayOfStrings =  content.split(",");
      var len = arrayOfStrings.length, i;
      for(i = 0; i < len; i++ )
        // copy non-empty values to the end of the array
        arrayOfStrings[i].trim() && arrayOfStrings.push(arrayOfStrings[i]);
      // cut the array and leave only the pushed,non-empty values
      arrayOfStrings.splice(0 , len);

      //if there were only ',,,,,', arrayOfStrings has length 0
      if (arrayOfStrings.length == 0)
      {
        message = "Please enter data first"
      }
      else
      {
        if (arrayOfStrings.length > 3)
        {
          message = "Too much"
        }
        else
        {
          message ="Enjoy!"
        }
      }
    }
    return message;
  }
})();
