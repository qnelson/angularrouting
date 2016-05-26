var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/ron', {
            templateUrl: '/views/ron.html',
            controller: "RonController"
        })
        .when('/burt', {
            templateUrl: '/views/burt.html',
            controller: "BurtController"
        })
        .when('/tom', {
            templateUrl: '/views/tom.html',
            controller: "TomController"
        })
        .otherwise({
            redirectTo: 'ron'
        })
}]);
