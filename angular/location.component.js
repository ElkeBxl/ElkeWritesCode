(function() {
    "use strict";
    var module = angular.module("curriculum"); 

    function controller()
    {
        var model = this;

        model.$onInit = function() {
            model.name = model.name || "Unknown";
        };
    }

    module.component("location", {
        templateUrl: "/angular/location.component.html",
        bindings: {
            name: "@"
        },
        transclude: true, 
        controllerAs: "model",
        controller: [controller]
    });
}());