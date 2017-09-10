(function() {
    "use strict";
    var module = angular.module("curriculum"); 
    module.component("skill", {
        templateUrl: "/angular/skill.component.html",
        bindings: {
            level: "@",
            name: "@"
        },
        transclude: true, 
        controllerAs: "model",
        controller: function() {
            var model = this;
            
            model.$onInit = function() {
                model.levelMin = 0;
                model.levelMax = 100;  
            };
        }        
    });
}());