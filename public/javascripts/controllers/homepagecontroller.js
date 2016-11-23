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

  var $window = $(window); 
  $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });  

});