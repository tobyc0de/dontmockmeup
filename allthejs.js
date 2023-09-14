function addCheese() {
    document.getElementById("pizzaarea")
        .innerHTML +=
        "<h2>🧀🧀🧀🧀🧀🧀🧀</h2>";
}

function addPineapple() {
    document.getElementById("pizzaarea")
        .innerHTML +=
        "<h2>💩💩💩💩💩💩</h2>";
}

function confirmBanana() {
    confirm("Just ... no.");
}

function myFunction() {
    var result;
    var r = confirm("Whatcha wann do?!");
    if (r == true) {
        result = "You have selected OK! Great job :)";
    } else {
        result = "You have selected Cancel! Well done :)";
    }
    document.getElementById("conf").innerHTML = result;
}  