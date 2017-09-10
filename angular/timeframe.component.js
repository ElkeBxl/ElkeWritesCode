(function() {
    "use strict";
    var module = angular.module("curriculum"); 
    module.component("timeframe", {
        templateUrl: "/angular/timeframe.component.html",
        bindings: {
            start: "@",
            end: "@"
        },
        transclude: true, 
        controllerAs: "model",
        controller: function() {
            var model = this;
            
            model.$onInit = function() {
                model.end = model.end || "Current";  
            };
        }        
    });
}());