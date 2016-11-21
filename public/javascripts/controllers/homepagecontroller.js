app.controller('HomePageController', function ($scope, $http, $routeParams) {
   
  $scope.thepowdrbackground = false;
  $scope.theRiverbackground = false;
  $scope.urbanSherpabackground = false;
  $scope.gSchoolbackground = false;
  $scope.redditClonebackground = false;
  $scope.downRiverbackground = false;

  $scope.theRiver = function(){
    console.log($scope.theRiverbackground)
    $scope.theRiverbackground = !$scope.theRiverbackground;
  }

  $scope.thepowdr = function(){
    $scope.thepowdrbackground = !$scope.thepowdrbackground;
  }

  $scope.urbanSherpa = function(){
    console.log('urbanSherpabackground')
    $scope.urbanSherpabackground = !$scope.urbanSherpabackground;
  }

  $scope.gSchool = function(){
    $scope.gSchoolbackground = !$scope.gSchoolbackground
  }

  $scope.redditClone = function(){
    $scope.redditClonebackground = !$scope.redditClonebackground
  }

   $scope.downRiver = function(){
    $scope.downRiverbackground= !$scope.downRiverbackground
  }


});