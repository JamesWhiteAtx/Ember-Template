App.IndexController = Ember.ObjectController.extend({
    actions: {
        handleAction: function () {
            alert('Handled in Index Controller');
        },
        test: function () {
            alert('test in index controller')
        }
    }
});