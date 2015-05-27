(function () {

    var movieData = function ($http) {

        var baseUrl = "/api/movies/";

        var getAll = function () {

            return $http.get(baseUrl)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            getAll: getAll
        };

    };

    movieData.$inject = ['$http'];
    var app = angular.module("moviesApp");
    app.factory("movieData", movieData);

}());