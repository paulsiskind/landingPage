$(document).ready(function(){
  $("nav a").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash); 
  });
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

// var controller = new ScrollMagic.Controller();
  
//   new ScrollMagic.Scene({
//     triggerElement: "#home",
//     triggerHook: "onEnter",
//   })
//   .duration('200%')
//   .setTween("#home", {
//       backgroundPosition: "50% 100%",
//       ease: Linear.easeNone
//   })
//   .addIndicators() // for debugging purposes
//   .addTo(controller);

//   new ScrollMagic.Scene({
//     triggerElement: "#middleImg",
//     triggerHook: "onEnter",
//   })
//   .duration('200%')
//   .setTween("#middleImg", {
//       backgroundPosition: "50% 100%",
//       ease: Linear.easeNone
//   })
//   .addIndicators() // for debugging purposes
//   .addTo(controller);
});