// var five = require("johnny-five");
// var board = new five.Board();

var servoState = {
  'on': 0,
  'off': 180
}

var servoController = {
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