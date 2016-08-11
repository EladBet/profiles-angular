angular.module("inbox", ['ngAnimate', 'ui.bootstrap'])
    .directive("inbox", [function() {
        return {
            restrict: 'AE',
            templateUrl : "app/components/inbox/inbox.html",
            //template:"<div>I'm Your Inbox</div>",
            controller: 'InboxController',
            controllerAs: 'vm',
            bindToController: true
        };
    }])

    //controller
    .controller("InboxController", [ '$scope', '$filter', 'InboxService', function ($scope, $filter, InboxService) {
        var vm = this;
        vm.inboxApi = "";
        vm.messages = [];

        init();
        ///

        function init(){
            InboxService.getList(vm.inboxApi+"profiles").then(function(res) {
                if (res) {
                    vm.messages = res;
                }
            }, function (reason){
                alert('error');
            });

        }
    }]);