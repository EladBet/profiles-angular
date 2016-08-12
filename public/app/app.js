
/**************************
 Initialize the App
 **************************/


angular.module("app", ['ngRoute', 'profiles','inbox'])
    .controller("AdminAppCtrl", ['$location', '$scope', function ($location, $scope) {
        var vm = this;


        $scope.$watch(function () {
            return $location.path();
        }, function (newVal, oldVal) {
            vm.url = $location.path();
        });
    }])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<profiles></profiles>'
            })
            .when('/profiles', {
                template: '<profiles></profiles>',
            })
            .when('/inbox', {
                template: '<inbox></inbox>'
            }).otherwise({
                redirectTo: '/'
            });
    });

