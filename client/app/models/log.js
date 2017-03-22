System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Log;
    return {
        setters: [],
        execute: function () {
            Log = (function () {
                function Log(userId, questionId, type, score, timeTaken) {
                    this.userId = userId;
                    this.questionId = questionId;
                    this.type = type;
                    this.score = score;
                    this.timeTaken = timeTaken;
                }
                return Log;
            }());
            exports_1("Log", Log);
        }
    };
});

//# sourceMappingURL=Log.js.map
