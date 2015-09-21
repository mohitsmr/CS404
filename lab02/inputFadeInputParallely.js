# Author : Tushar Jain and Mohit Sharma

var b = require('bonescript');

var inputPin = "P9_36";
var outputPin = "P9_14";
var outputPin2 = "P9_16";

b.pinMode(outputPin, b.ANALOG_OUTPUT);
b.pinMode(outputPin2, b.ANALOG_OUTPUT);

loop();
function loop() 
{	var value = b.analogRead(inputPin);
    b.analogWrite(outputPin, value);
    console.log(value.toFixed(3));
    b.analogWrite(outputPin2, value);
    console.log(value.toFixed(3));
    setTimeout(loop, 1000);
}

