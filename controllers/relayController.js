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

    if ( relayCommand === 'on' ) { relay.on(); }
    if ( relayCommand == 'off') {  relay.off(); }




    res.json(relayCommand);



  }


}

module.exports = relayController;