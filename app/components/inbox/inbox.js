angular.module("inbox", ['ngAnimate', 'ui.bootstrap'])
    .directive("inbox", [function() {
        return {
            restrict: 'AE',
            //templateUrl : "app/components/inbox/inbox.html",
            template:"<div>I'm Your Inbox</div>",
            controller: 'InboxController',
            controllerAs: 'vm',
            bindToController: true
        };
    }])

    //controller
    .controller("InboxController", [ '$scope', '$filter', 'ProfileService', function ($scope, $filter, ProfileService) {
        var vm = this;

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
    }]);