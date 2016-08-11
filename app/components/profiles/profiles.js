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
    .controller("ProfilesController", [ '$scope', '$filter', 'ProfileService', function ($scope, $filter, ProfileService) {
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
            ProfileService.getList(vm.profilesApi+"profiles").then(function(res) {
                if (res) {
                    vm.profiles = res;
                }
            }, function (reason){
                alert('error');
            });

        }

        vm.insert = function () {
            if (!_.findWhere(vm.selectedProfiles, {'id':vm.activeProfile.id})) {

               // vm.activeProfile.image = vm.facebookApi + vm.activeProfile.fbprof + "/picture";
                vm.selectedProfiles.push(angular.copy(vm.activeProfile));
                vm.activeProfile = {};
            }
            else
                alert('Error - profile not valid');
        };

        vm.loadProfile = function() {
            if (vm.selected) {
                ProfileService.getProfile(vm.selected.id).then(function (res) {
                    if (res) {
                        vm.activeProfile = res;
                    }
                }, function (reason) {
                    alert('error');
                });
            }
        };

    }]);




    //end of controller

