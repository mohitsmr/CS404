# Author : Tushar Jain and Mohit Sharma

var b = require('bonescript');

var inputPin = "P9_36";

loop();
function loop()
{	var value = b.analogRead(inputPin);
    console.log(value.toFixed(3));
    setTimeout(loop, 1000);
}

