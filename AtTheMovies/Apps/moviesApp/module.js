(function () {

    var app = angular.module("moviesApp", [

    ]);

    app.config(function ($httpProvider) {
        // No services injected use $httpProvider instead of $http
        $httpProvider.defaults.headers.common["X-myconfig"] = "Ohhhyes";
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

