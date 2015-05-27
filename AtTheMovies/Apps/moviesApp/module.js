(function () {

    var app = angular.module("moviesApp", [
        'ngRoute'
    ]);

    app.config(function ($httpProvider) {
        // No services injected use $httpProvider instead of $http
        $httpProvider.defaults.headers.common["X-myconfig"] = "Ohhhyes";
    });

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html"
                //,controller: "ListController as list"
        })
            .when("/about", {
                templateUrl: "/apps/moviesApp/templates/about.html"
        })
            .otherwise({
            redirectTo: "/list"
        })
    });

    app.run(function ($rootScope, $log) {
        $log.info("Up and running!");
        $rootScope.version = angular.version;
    });

    // Bootstrapping before angular starts.
    //angular.element(document).ready(function () {
    //    angular.bootstrap(document, ['movieApp']);
    //});

}());

