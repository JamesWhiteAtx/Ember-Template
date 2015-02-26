var Cls = Ember.Object.extend<any>({});
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

class Hag {
    private merle: string;
    getMerle = (): string => {
        return this.merle;
    }
};
var h = new Hag();
//h.merle = "hagfish";
var j = h.getMerle();

interface ObjClass extends Ember.Object {
    create<T extends {}>(arguments?: {}): T;
    reopen<T extends {}>(arguments?: {}): T;
    reopenClass<T extends {}>(arguments?: {}): T;
}

class AdvObject extends Ember.Object {
    static extendClass(arguments?: CoreObjectArguments): ObjClass {
        return this.extend<ObjClass>(h);
    }
}

var HagClass = AdvObject.extendClass(h);
HagClass.reopen({
    isCountry: true
});
HagClass.reopenClass({
    createMan: function () {
        return HagClass.create({ isMan: true })
    }
});

var hagInst1 = HagClass.create<Hag>();
//hagInst1.merle = "hagInst1";
j = hagInst1.getMerle();

var hagInst2 = HagClass.create<Hag>();
//hagInst2.merle = "hagInst2";
j = hagInst2.getMerle();


interface Oo {
    create<T extends {}>(arguments?: {}): T;
    greet<T>(arg: T): T;
}

interface Beef extends Oo {
}

interface Bullion extends Beef {
    name: string;
    helloWorld();
}

var Shia = Ember.Object.extend<Bullion>({
    helloWorld: function () {
        alert("Hi, my name is " + this.get('name'));
    }
});

var ahole = Shia.create<Bullion>({});
//ahole.helloWorld();

var person = <any>Ember.Object.extend({
    helloWorld: function () {
        alert("Hi, my name is " + this.get('name'));
    }
});

var tom = person.create({
    name: 'Tom Dale'
});