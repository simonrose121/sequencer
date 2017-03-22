System.register(["@angular/core", "@angular/http", "rxjs/add/operator/catch", "rxjs/add/operator/map", "./utilities.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, utilities_service_1, StoryService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }
        ],
        execute: function () {
            StoryService = (function () {
                function StoryService(utilitiesService, http) {
                    this.utilitiesService = utilitiesService;
                    this.http = http;
                    this.storiesUrl = 'app/stories.json';
                }
                // public methods
                StoryService.prototype.getStories = function () {
                    return this.http.get(this.storiesUrl).map(this.extractData);
                };
                StoryService.prototype.extractData = function (res) {
                    return res.json().stories;
                };
                StoryService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                return StoryService;
            }());
            StoryService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [utilities_service_1.UtilitiesService,
                    http_1.Http])
            ], StoryService);
            exports_1("StoryService", StoryService);
        }
    };
});

//# sourceMappingURL=story.service.js.map
