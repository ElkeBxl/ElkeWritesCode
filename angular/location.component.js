(function() {
    "use strict";
    var module = angular.module("curriculum"); 
    module.component("location", {
        templateUrl: "/angular/location.component.html",
        bindings: {
            name: "@",
            end: "@"
        },
        transclude: true, 
        controllerAs: "model",
        controller: function() {
            var model = this;
            
            model.$onInit = function() {
                model.name = model.name || "Unknown";  
            };
        }        
    });
}());