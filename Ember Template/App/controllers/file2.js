var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Cls = Ember.Object.extend({});
Cls.reopen({
    isPerson: true
});
var inst = Cls.create();
var aa = inst.get('isPerson');
inst.set('isPerson', false);
var bb = inst.get('isPerson');
inst.isPerson = 222;
var cc = inst.isPerson;
var dd = inst.get('isPerson');
var Hag = (function () {
    function Hag() {
        var _this = this;
        this.getMerle = function () {
            return _this.merle;
        };
    }
    return Hag;
})();
;
var h = new Hag();
//h.merle = "hagfish";
var j = h.getMerle();
var AdvObject = (function (_super) {
    __extends(AdvObject, _super);
    function AdvObject() {
        _super.apply(this, arguments);
    }
    AdvObject.extendClass = function (arguments) {
        return this.extend(h);
    };
    return AdvObject;
})(Ember.Object);
var HagClass = AdvObject.extendClass(h);
HagClass.reopen({
    isCountry: true
});
HagClass.reopenClass({
    createMan: function () {
        return HagClass.create({ isMan: true });
    }
});
var hagInst1 = HagClass.create();
//hagInst1.merle = "hagInst1";
j = hagInst1.getMerle();
var hagInst2 = HagClass.create();
//hagInst2.merle = "hagInst2";
j = hagInst2.getMerle();
var Shia = Ember.Object.extend({
    helloWorld: function () {
        alert("Hi, my name is " + this.get('name'));
    }
});
var ahole = Shia.create({});
//ahole.helloWorld();
var person = Ember.Object.extend({
    helloWorld: function () {
        alert("Hi, my name is " + this.get('name'));
    }
});
var tom = person.create({
    name: 'Tom Dale'
});
//# sourceMappingURL=file2.js.map