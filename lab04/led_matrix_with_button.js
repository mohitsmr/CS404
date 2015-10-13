/*
 Program- LED Matrix Demonstration
 Author- Mohit Sharma

*/

#!/usr/bin/env node

var b=require ('bonescript');
var port='/dev/i2c-2'
var  matrix=0X70;
var time=1000;

var fg='P9_23';
b.pinMode(fg,b.INPUT);



var smile =
	[0x00, 0x3c, 0x00, 0x42, 0x28, 0x89, 0x04, 0x85, 
	 0x04, 0x85, 0x28, 0x89, 0x00, 0x42, 0x00, 0x3c];
	 
var frown =
	[0x3c, 0x00, 0x42, 0x00, 0x85, 0x20, 0x89, 0x00, 
	 0x89, 0x00, 0x85, 0x20, 0x42, 0x00, 0x3c, 0x00];
var neutral =
	[0x3c, 0x3c, 0x42, 0x42, 0xa9, 0xa9, 0x89, 0x89,
	 0x89, 0x89, 0xa9, 0xa9, 0x42, 0x42, 0x3c, 0x3c];
var blank = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

b.i2cOpen(port, matrix);

b.i2cWriteByte(port,  0x21); // Start oscillator (p10)
b.i2cWriteByte(port,  0x81); // Disp on, blink off (p11)
b.i2cWriteByte(port,  0xe7); // Full brightness (page 15)

setInterval(check, 20)

function check()
{
	b.digitalRead(fg, check1);
}

function check1(x)
{
	if(x.value==1)
	doFrown();
	else
	doSmile();
}


function doFrown() {
	b.i2cWriteBytes(port, 0x00, frown);
}

function doSmile() {
	b.i2cWriteBytes(port, 0x00, smile);
}



