var five = require("johnny-five");
var board = new five.Board();

var servoState = {
  'on': 180,
  'off': 20
}

 // board.on("ready", function() {


 //      /* SHITTY HACK TO RAISE SERVO TO GLOBAL VAR SO ENDPT CAN USE IT */
 //      servo = new five.Servo({
 //        id: "MyServo",     // User defined id
 //        pin: 10,           // Which pin is it attached to?
 //        // type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
 //        // range: [0,180],    // Default: 0-180
 //        // fps: 100,          // Used to calculate rate of movement between positions
 //        // invert: false,     // Invert all specified positions
 //        // startAt: 90,       // Immediately move to a degree
 //        // center: true,      // overrides startAt if true and moves the servo to the center of the range
 //      });

 //      // Add servo to REPL (optional)
 //      // this.repl.inject({
 //      //   servo: servo
 //      // });

 //    });





var servoController = {
  // NEED TO GIVE ENDPOINT ACCESS TO SERVO 
  // initBoard :  board.on("ready", function() {
  //     // Servo alternate constructor with options
  //     var servo = new five.Servo({
  //       id: "MyServo",     // User defined id
  //       pin: 10,           // Which pin is it attached to?
  //     });

  //     // Add servo to REPL (optional)
  //     this.repl.inject({
  //       servo: servo
  //     });
  // }),

  moveServo: function(req, res) {
    var servoPosition = req.params.servoPosition
    var lightState = servoState[servoPosition]

    // console.log("request", req)
    console.log("lightState", lightState);



    servo.to(lightState);



    res.json(lightState);
    
  }

}

module.exports = servoController;