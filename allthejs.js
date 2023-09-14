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

function userPrompt() {
    let secretContent;
    let userReply = prompt("Wanna see it? (yes/no)");
    if (userReply == "yes") {
        secretContent = "Tadaaaa!<br><img src='./bunny.png'>"
    } else if (userReply == "no") {
        secretContent = "Alright then, I'll keep my secrets.<br/><img src='./hidden.png'>"
    }
    else {
        secretContent = "Please answer yes or no<br><img src='./hidden.png'>"
    }
    document.getElementById("secretcontent").innerHTML = secretContent;
    return userReply;
}


