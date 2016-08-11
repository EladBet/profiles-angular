
/**************************
 Initialize the App
 **************************/


angular.module("app", ['profiles','inbox'])
    .controller("AdminAppCtrl", [function () {
        var vm = this;

    }])
    .service('ProfileService', ['$q', function($q) {
        var service = this;

        service.setList = function(list) {
            store.set('list', list);
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
                    profile ={"id":"marissa_mayer","full":"Marissa Mayer","bio":"CEO of Yahoo!","fbprof":"106065309425342","isprivate":true, image:"http://graph.facebook.com/106065309425342/picture"};
                    break;
            }


            setTimeout(function() {
                deferred.resolve(profile);
            }, 200);

            return deferred.promise;
        };
    }]);
