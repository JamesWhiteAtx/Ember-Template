/// <reference path="../../scripts/typings/ember/ember.d.ts" />

module App {

    export var UserController1 = Ember.ObjectController.extend({
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this.get("firstName") + " " + this.get("lastName");
        }.property('model.isCompleted')
    });


    export class UserController2 extends Ember.ObjectController {
        private firstName: string;
        private lastName: string;

        constructor() {
            super();
            this.firstName = "John";
            this.lastName = "Doe";
        }

        get fullName(): string {
            return this.firstName + " " + this.lastName;
        }
    }
}

var u1 = App.UserController1;
var u2 = App.UserController2
var x = Ember.Object.extend({merle: "haggard"});