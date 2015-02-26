/// <reference path="../../scripts/typings/ember/ember.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    App.UserController1 = Ember.ObjectController.extend({
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this.get("firstName") + " " + this.get("lastName");
        }.property('model.isCompleted')
    });
    var UserController2 = (function (_super) {
        __extends(UserController2, _super);
        function UserController2() {
            _super.call(this);
            this.firstName = "John";
            this.lastName = "Doe";
        }
        Object.defineProperty(UserController2.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        return UserController2;
    })(Ember.ObjectController);
    App.UserController2 = UserController2;
})(App || (App = {}));
var u1 = App.UserController1;
var u2 = App.UserController2;
var x = Ember.Object.extend({ merle: "haggard" });
//# sourceMappingURL=file1.js.map