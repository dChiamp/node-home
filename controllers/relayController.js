var five = require("johnny-five");
var board = new five.Board();


var doorState = {
  'open': 'on',
  'close': 'off'
};


var relayController = {

  changeRelayState: function(req, res) {
    var relayState = req.params.relayState;
    var relayCommand = doorState[relayState];

    console.log('relayCommand: ', relayCommand);
    // state is reversed!
    if ( relayCommand === 'on' ) { relay.off(); }
    if ( relayCommand == 'off') {  relay.on(); }

    res.json(relayCommand);



  }


}

module.exports = relayController;