var tessel = require('tessel');

var led1 = tessel.led[0].output(0);
var led2 = tessel.led[1].output(0);
var led2 = tessel.led[2].output(0);
var led2 = tessel.led[3].output(0);

setInterval(function() {
	console.log("i'm blinkin! ");

	led1.toggle();
	led2.toggle();
}, 100);

