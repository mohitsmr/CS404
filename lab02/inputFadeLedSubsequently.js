# Author : Tushar Jain and Mohit Sharma

var b = require('bonescript');

var aValue1 = 0.01;
var aValue2 = 1.01;
var aDirection1 = 1;
var aDirection2 = 1;
var aPin1 = "P9_14";
var aPin2 = "P9_16";
 
b.pinMode(aPin1, b.ANALOG_OUTPUT);
b.pinMode(aPin2, b.ANALOG_OUTPUT);

setInterval(fade1, 10);
setInterval(fade2, 10);

function fade1() 
{	b.analogWrite(aPin1, aValue1);
	aValue1 = aValue1 + (aDirection1*0.01);
	if(aValue1 > 1.0) 
	{	aValue1 = 1.0; 
		aDirection1 = -1;
	}
	else if(aValue1 <= 0.01) 
	{	aValue1 = 0.01; 
		aDirection1 = 1;
	}
}

function fade2() 
{	b.analogWrite(aPin2, aValue2);
	aValue2 = aValue2 + (aDirection2*0.01);
	if(aValue2 <= 0.01) 
	{	aValue2 = 0.01; 
		aDirection2 = 1;
	}
	else if(aValue2 > 1.0) 
	{	aValue2 = 1.0; 
		aDirection2 = -1;
	}
}

