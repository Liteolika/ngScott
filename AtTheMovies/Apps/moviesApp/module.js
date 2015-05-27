(function () {

    var app = angular.module("moviesApp", [
        'ngRoute'
    ]);

    app.config(function ($httpProvider) {
        // No services injected use $httpProvider instead of $http
        $httpProvider.defaults.headers.common["X-myconfig"] = "Ohhhyes";
    });

    app.config(function ($routeProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html"
                //,controller: "ListController as list"
            })
            .when("/about", {
                templateUrl: "/apps/moviesApp/templates/about.html"
            }).
        when("/details/:id", {
            templateUrl: "/apps/moviesApp/templates/details.html"
        }).
        when("/edit/:id?", {
            templateUrl: "/apps/moviesApp/templates/edit.html"
        })
            .otherwise({
                redirectTo: "/list"
            })
    });

    app.run(function ($rootScope, $log) {
        $log.info("Up and running!");
        $rootScope.version = angular.version;

        //$rootScope.$on("$routeChangeError", function (event, current, previous) {
        //    $rootScope.routeError = {
        //        event: event,
        //        current: current,
        //        previous: previous
        //    };
        //});

    });

    // Bootstrapping before angular starts.
    //angular.element(document).ready(function () {
    //    angular.bootstrap(document, ['movieApp']);
    //});

}());

