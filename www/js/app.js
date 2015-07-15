// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('shelf', ['ionic','shelf.controllers','shelf.services','famous.angular','btford.socket-io'])

.run(function($ionicPlatform,$rootScope,$http,$window,notificationWorkerService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
      $http.get('https://randomuser.me/api/').success(function(data){
        $rootScope.currentUser=data.results[0].user;

      }).error(function(data){


      });

        notificationWorkerService.setWorker(new $window.Worker('js/worker.js'));

    }).config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('dashboard',{
       url:'/home',
       templateUrl:'templates/dashboard.html',
       controller:'DashboardCtrl'

      })
     .state('shelfDetails',{
     url:'/shelf-details',
     templateUrl:'templates/shelf-details.html',
      controller:'ShelfDetailsCtrl'

      });

      $urlRouterProvider.otherwise('/home');



    }).filter('dateFilter', function(){
        var oldDate = Date.now();
        return function(date){

            return "Just now";

        }

    });