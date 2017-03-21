System.register(["@angular/core", "@angular/http", "rxjs/add/operator/catch", "rxjs/add/operator/map", "./utilities.service", "./models/Log"], function (exports_1, context_1) {
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
    var core_1, http_1, utilities_service_1, Log_1, DataService;
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
            },
            function (Log_1_1) {
                Log_1 = Log_1_1;
            }
        ],
        execute: function () {
            DataService = (function () {
                function DataService(utilitiesService, http) {
                    this.utilitiesService = utilitiesService;
                    this.http = http;
                    this.id = 1; // TODO: Change me back
                }
                DataService.prototype.setId = function (id) {
                    this.id = id;
                };
                // storeMark(story : Story, mark : number) {
                //     console.log('---------------');
                //     console.log('user: ' + this.id);
                //     console.log('question: ' + story.action);
                //     console.log('type: ' + story.type);
                //     console.log('score: ' + mark);
                //     console.log('time taken: ' + this.utilitiesService.secondsElapsed(new Date()));
                // }
                DataService.prototype.createLog = function (story, mark) {
                    var log = new Log_1.Log(this.id, 1, story.type, mark, this.utilitiesService.secondsElapsed(new Date()));
                    this.postScore(log).subscribe(function (data) {
                        console.log(data);
                    });
                };
                DataService.prototype.postScore = function (log) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('/log/create', log, options).map(this.extractData);
                };
                DataService.prototype.extractData = function (res) {
                    return res.json().stories;
                };
                return DataService;
            }());
            DataService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [utilities_service_1.UtilitiesService,
                    http_1.Http])
            ], DataService);
            exports_1("DataService", DataService);
        }
    };
});

//# sourceMappingURL=data.service.js.map
