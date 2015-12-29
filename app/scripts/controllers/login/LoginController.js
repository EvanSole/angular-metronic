
define(['scripts/controllers/controllers','scripts/services/services'], function(controller) {
    "use strict";
    controller.controller('LoginController',function ($scope, $rootScope, $timeout,$http) {
        console.log(" user login ... "); 
        $scope.showError = false;
	    $scope.loginCheck = function(){
	        var username = $scope.admin.username;
	        var pwd = $scope.admin.pwd;
	        var loginSuccess = false;
		    http.get('/acm-admin/data/user.json')
		    .success(function(response){
		       for(var i=0; i<response.length; i++){
		          if(response[i].username == username && response[i].pwd == pwd){
		               $rootScope.$state.isLogin = true;
		               loginSuccess = true;
		               $rootScope.$state.go('index');
		           }
		       }
		       if(!loginSuccess){
		           $scope.showError = true;
		       }
		    });
	    }                 
    })
})