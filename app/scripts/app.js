define([
    'angular',
    'scripts/services/defineServices',
    'scripts/controllers/defineControllers',
    'scripts/directives/defineDirectives',
    'scripts/filters/defineFilters'
], function(angular) {
    "use strict"
     return angular.module('app',['ui.router','ui.bootstrap','app.controllers','app.services']);
});

