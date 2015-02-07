'use strict';

Meteor.startup(function () {
    Meteor.call('scanForToasters');
});