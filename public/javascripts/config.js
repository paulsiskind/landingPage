app.config(function( $routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: "HomePageController" 
  })
  .otherwise( {redirectTo: '/'
  })
  $locationProvider.html5Mode(true)
})