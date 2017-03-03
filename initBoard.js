var five = require("johnny-five");
var board = new five.Board();

// init board

function initBoard() {

  board.on("ready", function() {
    // var led = new five.Led(13);
    
    relay = new five.Relay({
      pin: 11,
      type: "NC",
      inOn: 'false'
    });

    servo = new five.Servo({
     pin: 10
    });



    /* OPTIONAL
    this.repl.inject({
      relay: relay,
      servo: servo
    });
    */

  });

}

module.exports = initBoard;