(function () {

    var app = angular.module("moviesApp");

    var loAlert = function () {

        return {
            restrict: "EA", // where it should appear/be allowed (E) element/ (A) attribute / (C) class / (M) comment
            //template: "<div>This is my template</div>"
            templateUrl: "/apps/moviesApp/directives/loalert.html",
            transclude: true, // content specified in document is available here,
            scope: {
                type: "@", // @ = bind against attribute value (string)
                reason: "=", // = = model binding (expressions)
                close: "&" // & = function
            } // isolated scope
            //,link: function (scope, element, attributes) {
            //    var type = attributes.type || "warning";
            //    var innerDiv = element.children();
            //    innerDiv.addClass("alert alert-" + type);

            //    //element.addClass("alert alert-danger");
            //}
        };

    };

    app.directive("loAlert", loAlert);

}());