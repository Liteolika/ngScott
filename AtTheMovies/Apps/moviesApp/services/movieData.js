(function () {

    var movieData = function ($http, $q) {

        var baseUrl = "/api/movies/";

        var movies = [];

        var getById = function (id) {
            return $http.get(baseUrl + id)
            .then(function (response) {
                return response.data;
            })
        }

        var save = function (movie) {
            return $http.put(baseUrl, movie);
        }

        var getAll = function () {

            //var deferred = $q.defer();

            //if (movies.length) {
            //    deferred.resolve(movies);
            //    //return $q.when(movies);
            //}

            return $http.get(baseUrl)
                        .then(function (response) {
                            //movies = response.data;
                            return response.data;
                            //deferred.resolve(response.data);
                        });

            //return deferred.promise;
        };

        return {
            getAll: getAll,
            getById: getById,
            save: save
        };

    };

    movieData.$inject = ['$http', '$q'];
    var app = angular.module("moviesApp");
    app.factory("movieData", movieData);

}());