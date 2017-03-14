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
  var controller = new ScrollMagic.Controller();
  
  new ScrollMagic.Scene({
    triggerElement: "#home",
    triggerHook: "onEnter",
  })
  .duration('300%')
  .setTween("#home", {
      backgroundPosition: "50% 100%",
      ease: Linear.easeNone
  })
  // .addIndicators() // for debugging purposes
  .addTo(controller);
  new ScrollMagic.Scene({
        triggerElement: "#name",
        triggerHook: "onLeave",
    })
    .setPin("#name")
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#middleImg",
    triggerHook: "onEnter",
  })
  .duration('200%')
  .setTween("#middleImg", {
      backgroundPosition: "10% 100%",
      ease: Linear.easeNone
  })
  // .addIndicators() // for debugging purposes
  .addTo(controller);

  var fromLeftTimeline = new TimelineMax();
  var fromLeftFrom = TweenMax.from(".mission", 1, {
      x: -500
  });
  var fromLeftTo = TweenMax.to(".mission", 1, {
      x: 0
  });
  fromLeftTimeline
      .add(fromLeftFrom)
      .add(fromLeftTo);

  new ScrollMagic.Scene({
        triggerElement: "#after",
        offset: 200,
    })
    .setTween(fromLeftTimeline)
    .duration(400)
    //.reverse(false)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  var fromRightTimeline = new TimelineMax();
  var fromRightFrom = TweenMax.from(".contact", 1, {
      x: 1600
  });
  var fromRightTo = TweenMax.to(".contact", 1, {
      x: 0
  });
  fromRightTimeline
      .add(fromRightFrom)
      .add(fromRightTo);

  new ScrollMagic.Scene({
        triggerElement: "#after",
        offset: 200,
    })
    .setTween(fromRightTimeline)
    .duration(400)
    //.reverse(false)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  // var $window = $(window); 
  // $('section[data-type="background"]').each(function(){
  //       var $bgobj = $(this); // assigning the object
    
  //       $(window).scroll(function() {
  //           var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
  //           // Put together our final background position
  //           var coords = '50% '+ yPos + 'px';

  //           // Move the background
  //           $bgobj.css({ backgroundPosition: coords });
  //       }); 
  //   });  
});