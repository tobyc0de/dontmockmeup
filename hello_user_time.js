let message;
let username = prompt("What is your name?");
// concatenation
console.log("Hello, " + username);

let time = prompt("What hour is it? (0-23)");

if(time <= 11) {
    message = "Good morning";
} else if(time <= 17) {
   message = "Good afternoon!";
} else if(time <25) {
    message = "Good evening!";
} else {
    message = "you are a mad man or woman!"};

message ="Hello " + username + ". " + message;

document.write(message);