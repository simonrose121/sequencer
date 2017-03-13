System.register(['@angular/core', './data.service', './utilities.service'], function(exports_1, context_1) {
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
    var core_1, data_service_1, utilities_service_1;
    var StoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }],
        execute: function() {
            StoryService = (function () {
                function StoryService(dataService, utilitiesService) {
                    this.dataService = dataService;
                    this.utilitiesService = utilitiesService;
                    this.stories = [
                        {
                            action: 'Kicking ball in to river',
                            type: 'Mechanical 2',
                            cards: [
                                {
                                    pos: 1,
                                    img: '0/1'
                                },
                                {
                                    pos: 2,
                                    img: '0/2'
                                },
                                {
                                    pos: 3,
                                    img: '0/3'
                                },
                                {
                                    pos: 4,
                                    img: '0/4'
                                }
                            ]
                        },
                        {
                            action: 'Stealing toy train',
                            type: 'Behavioural 2',
                            cards: [
                                {
                                    pos: 1,
                                    img: '1/1'
                                },
                                {
                                    pos: 2,
                                    img: '1/2'
                                },
                                {
                                    pos: 3,
                                    img: '1/3'
                                },
                                {
                                    pos: 4,
                                    img: '1/4'
                                }
                            ]
                        },
                        {
                            action: 'Taking ice cream',
                            type: 'Behavioural 2',
                            cards: [
                                {
                                    pos: 1,
                                    img: '2/1'
                                },
                                {
                                    pos: 2,
                                    img: '2/2'
                                },
                                {
                                    pos: 3,
                                    img: '2/3'
                                },
                                {
                                    pos: 4,
                                    img: '2/4'
                                }
                            ]
                        },
                        {
                            action: 'Going to bed',
                            type: 'Behavioural 1',
                            cards: [
                                {
                                    pos: 1,
                                    img: '3/1'
                                },
                                {
                                    pos: 2,
                                    img: '3/2'
                                },
                                {
                                    pos: 3,
                                    img: '3/3'
                                },
                                {
                                    pos: 4,
                                    img: '3/4'
                                }
                            ]
                        },
                        {
                            action: 'Planting flowers',
                            type: 'Mechanical 2',
                            cards: [
                                {
                                    pos: 1,
                                    img: '4/1'
                                },
                                {
                                    pos: 2,
                                    img: '4/2'
                                },
                                {
                                    pos: 3,
                                    img: '4/3'
                                },
                                {
                                    pos: 4,
                                    img: '4/4'
                                }
                            ]
                        },
                        {
                            action: 'Winning a race',
                            type: 'Behavioural 1',
                            cards: [
                                {
                                    pos: 1,
                                    img: '5/1'
                                },
                                {
                                    pos: 2,
                                    img: '5/2'
                                },
                                {
                                    pos: 3,
                                    img: '5/3'
                                },
                                {
                                    pos: 4,
                                    img: '5/4'
                                }
                            ]
                        },
                        {
                            action: 'Builing a snowman',
                            type: 'Behavioural 2',
                            cards: [
                                {
                                    pos: 1,
                                    img: '6/1'
                                },
                                {
                                    pos: 2,
                                    img: '6/2'
                                },
                                {
                                    pos: 3,
                                    img: '6/3'
                                },
                                {
                                    pos: 4,
                                    img: '6/4'
                                }
                            ]
                        },
                        {
                            action: 'Log falling off waterfall',
                            type: 'Mechanical 1',
                            cards: [
                                {
                                    pos: 1,
                                    img: '7/1'
                                },
                                {
                                    pos: 2,
                                    img: '7/2'
                                },
                                {
                                    pos: 3,
                                    img: '7/3'
                                },
                                {
                                    pos: 4,
                                    img: '7/4'
                                }
                            ]
                        },
                        {
                            action: 'Taking bear when not looking',
                            type: 'Intentional',
                            cards: [
                                {
                                    pos: 1,
                                    img: '8/1'
                                },
                                {
                                    pos: 2,
                                    img: '8/2'
                                },
                                {
                                    pos: 3,
                                    img: '8/3'
                                },
                                {
                                    pos: 4,
                                    img: '8/4'
                                }
                            ]
                        },
                    ];
                }
                // public methods
                StoryService.prototype.get = function () {
                    return this.utilitiesService.shuffle(this.stories);
                };
                StoryService.prototype.mark = function (story, cards) {
                    /* logic for this:
                      Correct sequence - 2 points
                      Correct beginning and end - 1 point
                      Incorrect sequence - 0 points
                    */
                    var mark;
                    if ((cards[0].pos === 1) &&
                        (cards[1].pos === 2) &&
                        (cards[2].pos === 3) &&
                        (cards[3].pos === 4)) {
                        mark = 2;
                    }
                    else if ((cards[0].pos === 1) && (cards[3].pos === 4)) {
                        mark = 1;
                    }
                    else {
                        mark = 0;
                    }
                    this.dataService.storeMark(story, mark);
                };
                StoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [data_service_1.DataService, utilities_service_1.UtilitiesService])
                ], StoryService);
                return StoryService;
            }());
            exports_1("StoryService", StoryService);
        }
    }
});
//# sourceMappingURL=story.service.js.map