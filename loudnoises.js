var tessel = require('tessel');
var port = tessel.port.GPIO;
var pin = port.pwm[0]; // G4
var accel = require('accel-mma84').use(tessel.port['A']);

port.pwmFrequency(10000);
pin.pwmDutyCycle(0.5); 

var frequency;

var accelparty = function () {
  accel.on('data', function(xyz){

    frequency = 1000 * ( xyz[1] + xyz[2] + xyz[0]);
    port.pwmFrequency(frequency);


  });

};

accel.on('error', function(err) {
	console.log('err:', err);
});

accel.on('ready', accelparty);