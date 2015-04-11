'use strict';

Meteor.startup(function () {
    Meteor.call('scanForToasters');

    sAlert.config({
        condition: 'blue',
        effect: 'jelly',
        position: 'right-bottom',
        timeout: 3000
    });
});