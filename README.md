### Admin panel for Meteor Cylon.js
Meteor [CylonJS](http://cylonjs.com/) wrapper for [Arduino](http://arduino.cc/) board.

#### This is just for fun but all ideas and PRs are welcomed :)

### Usage

See: [Arduino with Cylon.js](http://cylonjs.com/documentation/platforms/arduino/#how-to-connect)

Then add the packages:

    meteor add juliancwirko:arduino-cylon
    meteor add juliancwirko:caprica

#### Blog post

[Meteor meets Arduino and Cylon](http://julian.io/meteor-meets-arduino-and-cylon/)

and config your Cylon:

#### Example

**Server side:**

    Meteor.startup(function () {

        Cylon.robot({
            name: 'Number Six',
            description: 'Description is optional...',

            connections: {
              arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
            },

            devices: {
              redLed: { driver: 'led', pin: 13 },
              yellowLed: { driver: 'led', pin: 12 }
            },

            redLed: function () {
                this.devices.redLed.toggle();
                return 'Cylon ' + this.name + ' toggles red led';
            },

            yellowLed: function () {
                this.devices.yellowLed.toggle();
                return 'Cylon ' + this.name + ' toggles yellow led';
            },

            toggleAll: function () {
                this.devices.redLed.toggle();
                this.devices.yellowLed.toggle();
                return 'Cylon ' + this.name + ' toggles red and yellow led';
            },

            commands: function () {
                return {
                    'Toggle red Led': this.redLed,
                    'Toggle yellow Led': this.yellowLed,
                    'Toggle all': this.toggleAll
                };
            }
        }).start();

    });

Next step is to place ````{{> capricaHomeland}}```` template somewhere in your Meteor app layout.
You can se it in demo app here: [https://github.com/juliancwirko/caprica-demo](https://github.com/juliancwirko/caprica-demo)

**Client side (HTML):**

    <head>
        <title>caprica</title>
    </head>

    <body>
        {{> capricaHomeland class="my-custom-class" defaultTheme=true}}
    </body>


More configuration options and devices documentation on cylonjs website:

[http://cylonjs.com/](http://cylonjs.com/)

There will be blog post about it soon...

You can also read more about ````juliancwirko:arduino-cylon```` package here:

[https://github.com/juliancwirko/meteor-arduino-cylon](https://github.com/juliancwirko/meteor-arduino-cylon)

### Current UI demo
[http://caprica-demo.meteor.com/](http://caprica-demo.meteor.com/)

### Video demo
![Caprica video demo](http://redsunmedia.pl/arduino/caprica1.gif)

### Problems to solve

- better understanding of npm packages and sudo privilages with Meteor - I have to run meteor with sudo after adding packages :/
- better exceptions handling - if there is no Arduino connected we should comment devices and connections blocks
- you need to refresh page after changes in Cylonjs config

### TODO (if time permits):

- http api (maybe with Iron Router) ( ..yes I know that there is cylon-api-http ;) )
- better UI
- more research on cylonjs events etc.
- more demos and examples
