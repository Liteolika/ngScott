(function () {

    var movieData = function ($http) {

        var baseUrl = "/api/movies/";

        var getById = function (id) {
            return $http.get(baseUrl + id)
            .then(function (response) {
                return response.data;
            })
        }

        var getAll = function () {

            return $http.get(baseUrl)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            getAll: getAll,
            getById: getById
        };

    };

    movieData.$inject = ['$http'];
    var app = angular.module("moviesApp");
    app.factory("movieData", movieData);

}());