System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Card;
    return {
        setters: [],
        execute: function () {
            Card = (function () {
                function Card(position, imageUrl) {
                    this.position = position;
                    this.imageUrl = imageUrl;
                }
                return Card;
            }());
            exports_1("Card", Card);
        }
    };
});

//# sourceMappingURL=Card.js.map