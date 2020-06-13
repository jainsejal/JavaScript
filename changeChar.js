var name = prompt("What's your name?");
var caps = name.slice(0,1).toUpperCase();
var rest = name.slice(1,name.length);
alert ("Hello! " + caps + rest.toLowerCase());
