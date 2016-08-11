
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
    })

    .service('InboxService', ['$q', function($q) {
        var service = this;

        service.getList = function(url) {
            var deferred = $q.defer();

            var profiles = [{"id":"1","sender":"Bill Gates", "title":"Waiting for documentation", "attachment":true, "star":true,"date":"May 5" },
                {"id":"2","sender":"Posiedon Web", "title":"Lorem ipsum dolor sit amet", "attachment":true, "star":true,"date":"May 5" },
                {"id":"3","sender":"Barack Obama", "title":"Lorem ipsum dolor sit amet", "attachment":false, "star":true,"date":"May 4" },
                {"id":"4","sender":"Douglas Adams", "title":"Lorem ipsum dolor sit amet", "attachment":false, "star":true,"date":"May 4" },
                {"id":"5","sender":"Mark Zuckerberg", "title":"Rilate niro lakem, consectetuer adipiscing", "attachment":true, "star":false ,"date":"May 3"},
                {"id":"6","sender":"Nero", "title":"Rilate niro lakem, consectetuer adipiscing", "attachment":true, "star":false ,"date":"May 3"},
                {"id":"7","sender":"Marissa Mayer", "title":"Lemons for sale", "attachment":false, "star":false ,"date":"May 2"},
                {"id":"8","sender":"John Doe", "title":"Waiting for documentation", "attachment":false, "star":false ,"date":"May 2"}];

            setTimeout(function() {
                deferred.resolve(profiles);
            }, 200);

            return deferred.promise;
        };

    }])
    .service('ProfileService', ['$q', function($q) {
        var service = this;

        service.getSelected = function(url) {
            var deferred = $q.defer();

            var profiles = [{"id":"jeremy_potter","full":"Jeremy Potter","bio":"Former CEO of SundaySky","status":"Why don't you tell us more?", image:"assets/aniss.png","likes":5, "friends":10, "photos":99},
                {"id":"david_tennant","full":"David Tennant","bio":"President of IronSource","status":"How about we don't?", image:"assets/corbett.png","likes":5, "friends":10, "photos":99},
                {"id":"anna_johansson","full":"Anna Johansson","bio":"CEO of Wix","status":"Point taken. What do you guys want to do?", image:"assets/johansson.png","likes":5, "friends":10, "photos":99},
                {"id":"howard_jobs","full":"Howard Jobs","bio":"CEO of Klarna","status":"No one talks about... the Other...", image:"assets/paton.png","likes":5, "friends":10, "photos":99}];

            setTimeout(function() {
                deferred.resolve(profiles);
            }, 200);

            return deferred.promise;
        };

        service.getList = function(url) {
            var deferred = $q.defer();

            var profiles = [{"id":"bill_gates","full":"Bill Gates" },
                {"id":"barack_obama","full":"Barack Obama"},
                {"id":"mark_zuckerberg","full":"Mark Zuckerberg"},
                {"id":"marissa_mayer","full":"Marissa Mayer"}];

            setTimeout(function() {
                deferred.resolve(profiles);
            }, 200);

            return deferred.promise;
        };

        service.getProfile = function(url) {
            var deferred = $q.defer();

            var profile ;
            switch (url){
                case 'bill_gates':
                    profile = {"id":"bill_gates","full":"Bill Gates","bio":"Former CEO of Microsoft","fbprof":"billgates","isprivate":true, image:"http://graph.facebook.com/billgates/picture"};
                    break;
                case 'barack_obama':
                    profile ={"id":"barack_obama","full":"Barack Obama","bio":"President of US","fbprof":"barackobama","isprivate":false, image:"http://graph.facebook.com/barackobama/picture"};
                    break;
                case 'mark_zuckerberg':
                    profile ={"id":"mark_zuckerberg","full":"Mark Zuckerberg","bio":"CEO of Facebook","fbprof":"112845672063384","isprivate":false, image:"http://graph.facebook.com/112845672063384/picture"};
                    break;
                case 'marissa_mayer':
                    profile = {"id":"marissa_mayer","full":"Marissa Mayer","bio":"CEO of Yahoo!","fbprof":"106065309425342","isprivate":true, image:"http://graph.facebook.com/106065309425342/picture"};
                    break;
            }


            setTimeout(function() {
                deferred.resolve(profile);
            }, 200);

            return deferred.promise;
        };
    }]);
