
define(['scripts/controllers/controllers','scripts/services/services'], function(controller) {
    "use strict";
    controller.controller('LoginController',function ($scope, $rootScope, $timeout, $http) {
        
        $scope.user = {};

        $('.login-form input').keypress(function(e) {
            if (e.which == 13) {
               $('.login-form').submit(); 
            }
        });

	      $scope.submit = function(){
	    	   console.log(" user login ... "); 
	         var username = $scope.user.username;
	         var password = $scope.user.password;
           if(username!="" && password!=""){
              $rootScope.user = $scope.user;
              $rootScope.$state.isLogin = true;
              $rootScope.$state.go('index');

           }
	     };
    })
})