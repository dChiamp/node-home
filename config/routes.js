var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override')


var servoController = require('../controllers/servoController');
var relayController = require('../controllers/relayController');

var testController = require('../controllers/testController');

router.route('/api/servo/:servoPosition')
  .get(servoController.moveServo)

router.route('/api/relay/:relayState')
  .get(relayController.changeRelayState)

router.route('/api/test/')
  .get(testController.testEndpoint);



module.exports = router;