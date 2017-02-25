var servoOn = { 'state' : 'on' }
var servoOff = { 'state' : 'on' }

var relayOn = { 'state': 'on' }
var relayOff = { 'state': 'off' }


var testController = { 

  testEndpoint: function(req, res) {
    // var command = req.params.command

    console.log('req.body: ', req)


    res.send(relayOn);

  }

}


module.exports = testController;