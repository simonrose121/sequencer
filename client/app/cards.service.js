System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StoryService;
    return {
        setters:[],
        execute: function() {
            StoryService = (function () {
                function StoryService() {
                    this.stories = [
                        {
                            id: 1,
                            cards: [
                                {
                                    pos: 1
                                },
                                {
                                    pos: 2
                                },
                                {
                                    pos: 3
                                },
                                {
                                    pos: 4
                                }
                            ]
                        },
                        {
                            id: 2
                        },
                        {
                            id: 3
                        },
                        {
                            id: 4
                        }
                    ];
                }
                // public methods
                StoryService.prototype.get = function () {
                    return this.stories;
                };
                return StoryService;
            }());
            exports_1("StoryService", StoryService);
        }
    }
});
//# sourceMappingURL=cards.service.js.map