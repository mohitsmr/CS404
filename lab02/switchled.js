# Author : Tushar Jain and Mohit Sharma

var b = require('bonescript');

b.pinMode('P9_42', b.INPUT);
b.pinMode('P9_14', b.OUTPUT);
setInterval(check,1000);

function check()
{	b.digitalRead('P9_42', checkButton);
	console.log("press the button");
}

function checkButton(x) 
{	if(x.value === 1)
	{	b.digitalWrite('P9_14', b.HIGH);
		console.log("button pressed");
	}
	else
	{	b.digitalWrite('P9_14', b.LOW);
		console.log("no button");
	}
}

