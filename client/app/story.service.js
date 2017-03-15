System.register(["@angular/core", "./data.service", "./utilities.service"], function (exports_1, context_1) {
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
    var core_1, data_service_1, utilities_service_1, StoryService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }
        ],
        execute: function () {
            StoryService = (function () {
                function StoryService(dataService, utilitiesService) {
                    this.dataService = dataService;
                    this.utilitiesService = utilitiesService;
                    // TODO: Remove these and pull from server instead
                    this.stories = [
                        {
                            action: 'Kicking ball in to river',
                            type: 'Mechanical 2',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '0/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '0/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '0/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '0/4'
                                }
                            ]
                        },
                        {
                            action: 'Stealing toy train',
                            type: 'Behavioural 2',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '1/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '1/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '1/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '1/4'
                                }
                            ]
                        },
                        {
                            action: 'Taking ice cream',
                            type: 'Behavioural 2',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '2/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '2/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '2/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '2/4'
                                }
                            ]
                        },
                        {
                            action: 'Going to bed',
                            type: 'Behavioural 1',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '3/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '3/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '3/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '3/4'
                                }
                            ]
                        },
                        {
                            action: 'Planting flowers',
                            type: 'Mechanical 2',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '4/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '4/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '4/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '4/4'
                                }
                            ]
                        },
                        {
                            action: 'Winning a race',
                            type: 'Behavioural 1',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '5/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '5/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '5/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '5/4'
                                }
                            ]
                        },
                        {
                            action: 'Builing a snowman',
                            type: 'Behavioural 2',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '6/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '6/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '6/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '6/4'
                                }
                            ]
                        },
                        {
                            action: 'Log falling off waterfall',
                            type: 'Mechanical 1',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '7/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '7/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '7/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '7/4'
                                }
                            ]
                        },
                        {
                            action: 'Taking bear when not looking',
                            type: 'Intentional',
                            cards: [
                                {
                                    position: 1,
                                    imageUrl: '8/1'
                                },
                                {
                                    position: 2,
                                    imageUrl: '8/2'
                                },
                                {
                                    position: 3,
                                    imageUrl: '8/3'
                                },
                                {
                                    position: 4,
                                    imageUrl: '8/4'
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
                    if ((cards[0].position === 1) &&
                        (cards[1].position === 2) &&
                        (cards[2].position === 3) &&
                        (cards[3].position === 4)) {
                        mark = 2;
                    }
                    else if ((cards[0].position === 1) && (cards[3].position === 4)) {
                        mark = 1;
                    }
                    else {
                        mark = 0;
                    }
                    this.dataService.storeMark(story, mark);
                };
                return StoryService;
            }());
            StoryService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [data_service_1.DataService,
                    utilities_service_1.UtilitiesService])
            ], StoryService);
            exports_1("StoryService", StoryService);
        }
    };
});
