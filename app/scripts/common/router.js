define( ['app'],function (app) {
  
  'use strict';
   
        app.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])

        .config(['$stateProvider', '$urlRouterProvider','$httpProvider', 
                     function ($stateProvider, $urlRouterProvider,$httpProvider) {
      
        //用户登陆拦截器
        //$httpProvider.interceptors.push('UserInterceptor');
      
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login',{
                url : '/login',
                views : {
                    '': {
                          templateUrl : 'views/login/login.html',
                          controller  : 'LoginController'
                        }
                }
            })
            .state('index',{
               url : '/index',
               views :{
                   '' : {
                       templateUrl : 'views/layout/nav.html'
                   },
                   'header@index' : {
                       templateUrl : 'views/layout/header.html'
                   },
                   'sidebar@index' : {
                       templateUrl : 'views/layout/sidebar.html'
                   },
                   'main@index' : {
                       templateUrl : 'views/layout/sidebar_main.html'
                   }
               }
               
           })
           .state('index.user',{
               url : '/user',
               views : {
                    'main@index' : {
                       templateUrl : 'views/system/user.html'
                    }
               }
               
           })
           .state('index.user.edit',{
               url : '/edit',
               views : {
                    'main@index' : {
                       templateUrl : 'views/system/userEdit.html'
                    }
               }
           })
           .state('index.role',{
                url : '/role',
                views : {
                    'main@index' : {
                       templateUrl : 'views/system/role.html'
                    }
                }
           })
           .state('index.permission',{
                url : '/permission',
                views : {
                    'main@index' : {
                       templateUrl : 'views/system/permission.html'
                    }
                }
           })
    }]);



});

