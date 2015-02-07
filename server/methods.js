'use strict';

Meteor.methods({
    scanForToasters: function () {
        if (_.isObject(Cylon)) {
            var toasters = Cylon.robots;
            var toastersMap = Object.keys(toasters).map(function(toaster) {
                return {
                    name: toasters[toaster].name,
                    description: toasters[toaster].description,
                    commands: Object.keys(toasters[toaster].commands)
                };
            });
            if (CapricaHomeland) {
                CapricaHomeland.remove({});
                toastersMap.forEach(function (toaster) {
                    CapricaHomeland.insert(toaster);
                });
            }
        }
    },
    toastersCommand: function (command, toasterName) {
        if (_.isObject(Cylon)) {
            return Cylon.robots[toasterName].commands[command].call(Cylon.robots[toasterName]);
        }
    }
});