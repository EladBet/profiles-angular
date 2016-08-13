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
    .controller("InboxController", [ '$scope', '$filter', '$http', '$uibModal', function ($scope, $filter, $http, $uibModal) {
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

        vm.openMessage = function(id){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'messageContent.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    id: function(){
                        return id;
                    }
                }
            });

        }
    }])

//modal controller
    .controller('ModalInstanceCtrl', function ($scope, $http, $uibModalInstance, id) {
        $scope.id = id;
        $scope.message = {};


        $http.get("/messages/"+id).then(function(res) {
            if (res.data) {
                $scope.message = res.data;
            }
        }, function (reason){
            alert('error');
        });

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    })
    //end modal controller
;