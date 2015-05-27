(function () {

    var ListController = function ($log, movieData) {

        var model = this;

        var onError = function (response) {
            model.errorMessage = response.data.message;
        };

        var onMovies = function (movies) {
            model.movies = movies;
        };

        model.increaseRating = function (movie) {
            if (movie.rating >= 5) {
                movie.rating = 5;
            } else {
                movie.rating += 1;
            }
        };

        model.decreaseRating = function (movie) {
            if (movie.rating <= 1) {
                movie.rating = 1;
            } else {
                movie.rating -= 1;
            }
        };

        model.rateMovie = function (movie) {
            return {
                good: movie.rating >= 4,
                bad: movie.rating <= 2
            }
        }

        movieData.getAll().then(onMovies).catch(onError);

    };

    ListController.$inject = ['$log', 'movieData'];
    var module = angular.module("moviesApp");
    module.controller("ListController", ListController);

    //module.controller("ListController", ['movieData', ListController]);

}());