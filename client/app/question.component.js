System.register(["@angular/core", "ng2-dragula/ng2-dragula", "./story.service", "./utilities.service"], function (exports_1, context_1) {
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
    var core_1, ng2_dragula_1, story_service_1, utilities_service_1, QuestionComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_dragula_1_1) {
                ng2_dragula_1 = ng2_dragula_1_1;
            },
            function (story_service_1_1) {
                story_service_1 = story_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }
        ],
        execute: function () {
            QuestionComponent = (function () {
                function QuestionComponent(storyService, utilitiesService, dragulaService) {
                    var _this = this;
                    this.storyService = storyService;
                    this.utilitiesService = utilitiesService;
                    this.dragulaService = dragulaService;
                    this.a1 = [];
                    this.a2 = [];
                    this.a3 = [];
                    this.error = false;
                    this.finished = false;
                    this.storiesLoaded = false;
                    this.activeStoryIndex = 0;
                    this.activeHover = null;
                    this.activeRemoveHover = null;
                    this.activeCard = null;
                    dragulaService.setOptions('first-bag', {
                        accepts: function (el, target, source, sibling) {
                            return _this.canMove(el, target, source, sibling);
                        }
                    });
                }
                QuestionComponent.prototype.ngOnInit = function () {
                    this.getStories();
                };
                QuestionComponent.prototype.getStories = function () {
                    var _this = this;
                    this.storyService.getStories()
                        .subscribe(function (stories) {
                        _this.stories = stories;
                        console.log(_this.stories);
                        _this.storiesLoaded = true;
                    });
                };
                QuestionComponent.prototype.nextStory = function () {
                    if (typeof this.stories[this.activeStoryIndex] !== "undefined") {
                        // get the first story
                        this.story = this.stories[this.activeStoryIndex];
                        // save the first card
                        this.firstCard = this.story.cards[0];
                        // remove the first card from the array`
                        this.story.cards.shift();
                        // randomly sort the rest of the cards
                        this.story.cards = this.utilitiesService.shuffle(this.story.cards);
                        this.utilitiesService.startTimer();
                    }
                    else {
                        // display well done message
                        this.finished = true;
                    }
                };
                QuestionComponent.prototype.submit = function () {
                    var _this = this;
                    if (this.a1.length === 0 || this.a2.length === 0 || this.a3.length === 0) {
                        // change div colour in a transition
                        this.error = true;
                    }
                    else {
                        // create an answer array
                        var answer = [this.a1[0], this.a2[0], this.a3[0]];
                        if (answer.length === 3) {
                            answer.unshift(this.firstCard);
                            this.storyService.mark(this.story, answer);
                            this.a1 = [];
                            this.a2 = [];
                            this.a3 = [];
                            this.activeStoryIndex++;
                            this.nextStory();
                        }
                    }
                    // change error flag back once animation is complete
                    setTimeout(function () {
                        _this.error = false;
                    }, 1000);
                };
                // Dragular functions
                QuestionComponent.prototype.canMove = function (el, target, source, sibling) {
                    switch (target.id) {
                        case "a1":
                            return this.a1.length === 0;
                        case "a2":
                            return this.a2.length === 0;
                        case "a3":
                            return this.a3.length === 0;
                        default:
                            return true;
                    }
                };
                // Click and click functionality
                QuestionComponent.prototype.setActiveCard = function (card) {
                    this.activeCard = card;
                };
                QuestionComponent.prototype.clickToAddOrRemove = function (pos) {
                    if (this.activeCard) {
                        switch (pos) {
                            case "a1":
                                if (this.a1.length === 0) {
                                    this.a1 = [];
                                    this.a1.push(this.activeCard);
                                    this.removeCardFromOptions(this.activeCard);
                                }
                                break;
                            case "a2":
                                if (this.a2.length === 0) {
                                    this.a2 = [];
                                    this.a2.push(this.activeCard);
                                    this.removeCardFromOptions(this.activeCard);
                                }
                                break;
                            case "a3":
                                if (this.a3.length === 0) {
                                    this.a3 = [];
                                    this.a3.push(this.activeCard);
                                    this.removeCardFromOptions(this.activeCard);
                                }
                                break;
                        }
                        this.setActiveCard(null);
                    }
                    else {
                        this.removeCard(pos);
                    }
                };
                QuestionComponent.prototype.removeCard = function (pos) {
                    switch (pos) {
                        case "a1":
                            if (this.a1.length > 0) {
                                this.story.cards.push(this.a1[0]);
                                this.a1 = [];
                            }
                            break;
                        case "a2":
                            if (this.a2.length > 0) {
                                this.story.cards.push(this.a2[0]);
                                this.a2 = [];
                            }
                            break;
                        case "a3":
                            if (this.a3.length > 0) {
                                this.story.cards.push(this.a3[0]);
                                this.a3 = [];
                            }
                            break;
                    }
                };
                QuestionComponent.prototype.removeCardFromOptions = function (card) {
                    var index = this.story.cards.indexOf(card, 0);
                    if (index > -1) {
                        this.story.cards.splice(index, 1);
                    }
                };
                QuestionComponent.prototype.hover = function (pos) {
                    // handle if activeCard is selected
                    if (this.activeCard) {
                        // highlight cell
                        switch (pos) {
                            case "a1":
                                this.activeHover = 'a1';
                                break;
                            case "a2":
                                this.activeHover = 'a2';
                                break;
                            case "a3":
                                this.activeHover = 'a3';
                                break;
                        }
                    }
                    else {
                        switch (pos) {
                            case "a1":
                                this.activeRemoveHover = 'a1';
                                break;
                            case "a2":
                                this.activeRemoveHover = 'a2';
                                break;
                            case "a3":
                                this.activeRemoveHover = 'a3';
                                break;
                        }
                    }
                };
                QuestionComponent.prototype.unhover = function () {
                    this.activeHover = null;
                    this.activeRemoveHover = null;
                };
                return QuestionComponent;
            }());
            QuestionComponent = __decorate([
                core_1.Component({
                    selector: 'question',
                    templateUrl: 'app/question.component.html',
                    styleUrls: [
                        'app/question.component.css',
                        'dragula.min.css'
                    ],
                    viewProviders: [ng2_dragula_1.DragulaService]
                }),
                __metadata("design:paramtypes", [story_service_1.StoryService,
                    utilities_service_1.UtilitiesService,
                    ng2_dragula_1.DragulaService])
            ], QuestionComponent);
            exports_1("QuestionComponent", QuestionComponent);
        }
    };
});
