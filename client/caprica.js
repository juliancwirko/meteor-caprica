'use strict';

Template.capricaHomeland.created = function () {
    this.occupiedCapricaData = Meteor.subscribe('occupiedCapricaData');
};

Template.capricaHomeland.helpers({
    cylons: function () {
        return CapricaHomeland.find({});
    },
    occupiedCapricaDataReady: function () {
        return Template.instance().occupiedCapricaData.ready();
    }
});

Template.capricaHomeland.destroyed = function () {
    this.occupiedCapricaData.stop();
};

Template.capricaHomelandCylonCommand.events({
    'click .js-cylon-command': function (e, tmpl) {
        e.preventDefault();
        var command = this;
        var toasterName = Template.parentData(1).name;
        Meteor.call('toastersCommand', command, toasterName, function (err, result) {
            if (!err && result) {
                console.log('Toaster response: ' + result);
                sAlert.info(result);
            }
        });
    }
});