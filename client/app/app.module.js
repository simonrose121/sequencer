System.register(['@angular/core', '@angular/platform-browser', 'ng2-dragula/ng2-dragula', './app.component', './question.component', './story.service', './data.service', './utilities.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, ng2_dragula_1, app_component_1, question_component_1, story_service_1, data_service_1, utilities_service_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ng2_dragula_1_1) {
                ng2_dragula_1 = ng2_dragula_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (question_component_1_1) {
                question_component_1 = question_component_1_1;
            },
            function (story_service_1_1) {
                story_service_1 = story_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            ng2_dragula_1.DragulaModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            question_component_1.QuestionComponent
                        ],
                        providers: [
                            story_service_1.StoryService,
                            data_service_1.DataService,
                            utilities_service_1.UtilitiesService
                        ],
                        bootstrap: [
                            app_component_1.AppComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map