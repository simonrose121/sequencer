System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Story;
    return {
        setters:[],
        execute: function() {
            Story = (function () {
                function Story(action, type, cards) {
                    this.action = action;
                    this.type = type;
                    this.cards = cards;
                }
                return Story;
            }());
            exports_1("Story", Story);
        }
    }
});
//# sourceMappingURL=story.js.map