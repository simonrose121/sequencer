System.register(['@angular/core', './utilities.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, utilities_service_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(utilitiesService) {
                    this.utilitiesService = utilitiesService;
                    this.id = 1; // TODO: Change me back
                }
                DataService.prototype.setId = function (id) {
                    this.id = id;
                };
                DataService.prototype.storeMark = function (story, mark) {
                    console.log('---------------');
                    console.log('user: ' + this.id);
                    console.log('question: ' + story.action);
                    console.log('type: ' + story.type);
                    console.log('score: ' + mark);
                    console.log('time taken: ' + this.utilitiesService.secondsElapsed(new Date()));
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [utilities_service_1.UtilitiesService])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map