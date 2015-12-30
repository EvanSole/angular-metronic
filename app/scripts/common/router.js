define( ['app'],function (app) {
  
  'use strict';
   
        app.run(function($rootScope, $state, $stateParams){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$state.isLogin = false;
        })

        .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
      
        //用户登陆拦截器
        //$httpProvider.interceptors.push('UserInterceptor');
      
        $urlRouterProvider.otherwise('/index');

        $stateProvider
            .state('login',{
                url : '/login',
                templateUrl : 'views/login/login.html',
                controller  : 'LoginController'
            })
            .state('index',{
               url : '/index',
               templateUrl : 'views/layout/nav.html',
               controllerProvider : function($rootScope){
                if($rootScope.$state.isLogin == false){
                    $rootScope.$state.go('login');
                }
                 return function(){};
              } 
           })
           .state('list',{
               url : '/list',
               templateUrl : 'views/list.html'
           })
           .state('list.main',{
                url : '/main',
                templateUrl : 'views/list-main.html'
           })
           .state('detail',{
               url : '/detail/{articleId}',
               templateUrl : 'views/list-main.html'
           });
    });
});