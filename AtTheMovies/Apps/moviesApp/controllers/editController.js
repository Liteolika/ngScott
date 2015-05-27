(function () {

    var EditController = function (movieData, $routeParams) {

        var model = this;

        model.movie = {};

        var onMovie = function (movie) {
            model.movie = movie;
        }

        model.save = function () {
            movieData.save(model.movie)
            .then(function () {
                $location.path("/details/" + model.movie.id);
            });
        }

        movieData.getById($routeParams.id).then(onMovie);

    };

    var app = angular.module("moviesApp");
    EditController.$inject = ['movieData', '$routeParams'];
    app.controller("EditController", EditController);



}());