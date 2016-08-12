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
    .controller("InboxController", [ '$scope', '$filter', '$http', function ($scope, $filter, $http) {
        var vm = this;
        vm.inboxApi = "";
        vm.messages = [];

        init();
        ///

        function init(){
            $http.get("/messages").then(function(res) {
                if (res.data) {
                    vm.messages = res.data;
                }
            }, function (reason){
                alert('error');
            });

        }
    }]);