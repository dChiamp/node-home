var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override')


var servoController = require('../controllers/servoController');
var relayController = require('../controllers/relayController');

router.route('/api/servo/:servoPosition')
  .get(servoController.moveServo)

router.route('/api/relay/:relayState')
  .get(relayController.changeRelayState)



module.exports = router;