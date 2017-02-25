var five = require("johnny-five");
var board = new five.Board();

// init board

function boardInit() {

  board.on("ready", function() {
    relay = new five.Relay(11);
    // var led = new five.Led(13);

    servo = new five.Servo({
     pin: 10, 
     // range: [ 0, 180 ],
     // startAt: 120
    });


    /* OPTIONAL
    this.repl.inject({
      relay: relay,
      servo: servo
    });
    */

  });

}

module.exports = boardInit;