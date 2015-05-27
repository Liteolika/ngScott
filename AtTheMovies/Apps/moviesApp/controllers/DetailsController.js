(function () {

    var DetailsController = function (movieData, $routeParams) {

        var model = this;

        var onMovie = function (movie) {
            model.movie = movie;
        }

        movieData.getById($routeParams.id).then(onMovie);

    };

    var app = angular.module("moviesApp");
    
    DetailsController.$inject = ['movieData', '$routeParams'];

    app.controller("DetailsController", DetailsController);


}());