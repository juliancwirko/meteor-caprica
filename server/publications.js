'use strict';

Meteor.publish('occupiedCapricaData', function () {
    return CapricaHomeland.find({});
});