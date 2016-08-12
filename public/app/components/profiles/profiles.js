angular.module("profiles", ['ngAnimate', 'ui.bootstrap' ])
    .directive("profiles", [function() {
        return {
            restrict: 'AE',
            templateUrl : "app/components/profiles/profiles.html",
            controller: 'ProfilesController',
            controllerAs: 'vm',
            bindToController: true
        };
    }])

    //controller
    .controller("ProfilesController", [ '$scope', '$filter', '$http', function ($scope, $filter, $http) {
        var vm = this;

        vm.profiles = [];
        vm.selectedProfiles = [];
        vm.selected = {};
        vm.activeProfile = {};
        vm.profilesApi = "";

        //vm.images = ['http://graph.facebook.com/billgates/picture','http://graph.facebook.com/barackobama/picture','http://graph.facebook.com/112845672063384/picture','http://graph.facebook.com/106065309425342/picture']

        init();
        ///

        function init(){

            $http.get('/profiles').then(function(res) {
                if (res.data) {
                    vm.selectedProfiles = res.data;
                }
            }, function (reason){
                alert('error');
            });

            $http.get('/users').then(function(res) {
                if (res.data) {
                    vm.profiles = res.data;
                }
            }, function (reason){
                alert('error');
            });

        }

        vm.insert = function () {
            if (!_.findWhere(vm.selectedProfiles, {'id':vm.activeProfile.id})) {

               // vm.activeProfile.image = vm.facebookApi + vm.activeProfile.fbprof + "/picture";
                vm.activeProfile.likes = Math.floor((Math.random() * 100) );
                vm.activeProfile.photos = Math.floor((Math.random() * 100) );
                vm.activeProfile.friends = Math.floor((Math.random() * 100) );
                vm.selectedProfiles.push(angular.copy(vm.activeProfile));
                vm.activeProfile = {};
                vm.selected = {};
            }
            else
                alert('Error - profile not valid');
        };

        vm.loadProfile = function() {
            vm.activeProfile = vm.selected;
        };

    }]);




    //end of controller

