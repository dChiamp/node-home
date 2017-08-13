// "804_0_var0", == asuza / citrus
// "804_1_var0", == atlantic

// var five = require("johnny-five");
// var board = new five.Board();
var request = require('request');

var railController = {
  getDepartureInfo: function(req, res) {
    var stationId = req.params.route //80410
    var getUrl = `http://api.metro.net/agencies/lametro-rail/routes/804/stops/${stationId}/predictions`

    railController.getInfo(getUrl, res)
    // res.json(info);
    
  },
  // START HERE
  getInfo: function (getURL, res, cb) {
    request({
      method: 'GET',
      url: getURL
    },
    function (error, response, info) {
      if (error) {
        return console.error('request failed:', error);
      } else {
        var data = JSON.parse(info);
        console.log('getInfo data: ', data);

        res.send(data);
      }

    })
  }

}

module.exports = railController;