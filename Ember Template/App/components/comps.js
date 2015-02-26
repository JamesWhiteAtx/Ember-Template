App.Level1Component = Ember.Component.extend({
    classNames: ['comp-test'],
    actions: {
        //handleAction: function () {
        //    alert('Handled in Level 1');
        //}
    }
});

App.Level2Component = Ember.Component.extend({
    classNames: ['comp-test'],
    actions: {
        //handleAction: function () {
        //    alert('Handled in Level 2');
        //}
    }
});

App.Level3Component = Ember.Component.extend({
    tagName: 'button',
    action: 'handleAction',
    click: function () {
        this.sendAction();
    }
});

App.ButtonGroupCmpComponent = Ember.Component.extend({
    actions: {
    //    handleAction: function () {
    //        alert('Handled in .ButtonGroupCmp');
    //    }
    }
});

App.ButtonCmpComponent = Ember.Component.extend({
    tagName: 'button',
    action: 'handleAction',
    click: function () {
        this.sendAction();
    }
});
