requirejs.config({
  baseUrl: './',
  waitSeconds: 60,
  paths: {
    'jquery': 'bower_components/jquery/jquery.min',
    'angular': 'bower_components/angular/angular.min',
    //'angular-route': 'bower_components/angular-route/angular-route.min',
    'angular-resource': 'bower_components/angular-resource/angular-resource.min',
    'angular-cookies': 'bower_components/angular-cookies/angular-cookies.min',
    'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize.min',
    'angular-async-loader':'bower_components/angular-async-loader/dist/angular-async-loader.min',
    'ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
    'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
    'ui-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap.min',
    'ui-bootstrap-tpls': 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
    
    'kendo': 'bower_components/kendo/js/kendo.core.min',
    'require':'bower_components/requirejs/require',
    'app':'scripts/app',
    'router':'scripts/common/router',
    'basePath':'scripts/basePath',

    'bootstrap-hover-dropdown':'scripts/assets/bootstrap-hover-dropdown.min',
    'blockui':'scripts/assets/jquery.blockui.min',
    'sidebar-menu':'scripts/assets/sidebar.menu',
    'global-app':'scripts/assets/global.app.min',
    'layout':'scripts/assets/layout.min',
    'quick-sidebar':'scripts/assets/quick-sidebar.min',
    'login-validate':'scripts/assets/login.validate'
    

    
  },
  shim: {
  	/*** shim 用来处理一些没有遵守requirejs规范的js库,可在里面对它们进行一些依赖声明、初始化操作等*/
    'angular' : { exports : 'angular',deps: ['jquery']},
    'angular-resource': {deps: ['angular']},
    'ui-router': {deps: ['angular'], exports: 'angular-route'},
    'angular-cookies': {deps: ['angular']},
    'bootstrap': {deps: ['jquery']},
    'ui-bootstrap': {deps: ['angular']},
    'kendo' :{deps: ['jquery']},
    'bootstrap-hover-dropdown' :{deps: ['jquery']},
    'layout' :{deps: ['jquery','global-app']},
    'quick-sidebar' :{deps: ['jquery','global-app']},
    'sidebar-menu' :{deps: ['jquery','global-app']},
    'login-validate' :{deps: ['jquery']}
  },
  deps:['bootstrap'],
  urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});


//启动angularjs
require([
    'jquery',
    'angular',
    'bootstrap',
    'ui-router',
    'ui-bootstrap',
    'app',
    'router',
    'basePath',
    'bootstrap-hover-dropdown',
    'blockui',
    'quick-sidebar',
    'global-app',
    'layout',
    'sidebar-menu'
], function (require,angular) {
    'use strict';
    $(document).ready(function () {
        App.init();   //初始化
        Layout.init();
        angular.bootstrap(document, ['app']);
        
    });
});
