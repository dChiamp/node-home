var five = require("johnny-five");
var board = new five.Board();


var doorState = {
  'open': 'on',
  'close': 'off'
};





var relayController = {

  changeRelayState: function(req, res) {

  board.on("ready", function() {
    // SHITTY HACK TO RAISE RELAY TO GLOBAL VAR SO ENDPT CAN USE IT
    relay = new five.Relay({pin: 11});
    
  });

    var relayState = req.params.relayState;
    var relayCommand = doorState[relayState];

    console.log('relayCommand: ', relayCommand);

    if ( relayCommand === 'on' ) { relay.on(); }
    // if ( relayCommand == 'off') {  relay.off(); }


    // relay.off();

    res.json(relayCommand);



  }


}

module.exports = relayController;