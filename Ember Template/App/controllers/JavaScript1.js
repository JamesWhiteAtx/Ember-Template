var personx = Ember.Object.extend({
    helloWorld: function () {
        alert("Hi, my name is " + this.get('name'));
    }
});

var tomx = personx.create({
    name: 'Tom Dale'
});

var x = tomx;