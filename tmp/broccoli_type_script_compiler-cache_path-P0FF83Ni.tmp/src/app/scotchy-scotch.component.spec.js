"use strict";
var testing_1 = require('@angular/core/testing');
var scotchy_scotch_component_1 = require('../app/scotchy-scotch.component');
testing_1.beforeEachProviders(function () { return [scotchy_scotch_component_1.ScotchyScotchAppComponent]; });
testing_1.describe('App: ScotchyScotch', function () {
    testing_1.it('should create the app', testing_1.inject([scotchy_scotch_component_1.ScotchyScotchAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'scotchy-scotch works!\'', testing_1.inject([scotchy_scotch_component_1.ScotchyScotchAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('scotchy-scotch works!');
    }));
});
//# sourceMappingURL=scotchy-scotch.component.spec.js.map