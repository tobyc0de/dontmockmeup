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
    let humanContent;
    let userReply = prompt("Wanna see it? (yes/no)");
    if (userReply == "yes") {
        humanContent = "<img src='./bunny.png'>"
    } else if (userReply == "no") {
        humanContent = "<img src='./hidden.png'>Alright then, I'll keep my secrets."
    }
    else {
        humanContent = "<img src='./hidden.png'>Please answer yes or no"
    }
    document.getElementById("humancontent").innerHTML = humanContent;
    return userReply;
}

let userReply;
