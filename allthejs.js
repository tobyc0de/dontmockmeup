function makeItDark() {
    document.body.style.background = "linear-gradient(darkred, darkblue)";
}

function makeItLight() {
    document.body.style.background = "linear-gradient(#ffa9e7, #c5f6ff)";
}



function addCheese() {
    document.getElementById("texttopping")
        .innerHTML +=
        "🧀";
}

function addPeppers() {
    document.getElementById("texttopping")
        .innerHTML +=
        "🌶️";
}

function addBroc() {
    document.getElementById("texttopping")
        .innerHTML +=
        "🥦";
}

function addGarlic() {
    document.getElementById("texttopping")
        .innerHTML +=
        "🧄";
}

function addPineapple() {
    document.getElementById("texttopping")
        .innerHTML +=
        "💩";
}

function confirmBanana() {
    confirm("Just ... no.");
}

function resetToppings() {
    document.getElementById("texttopping")
        .innerHTML =
        "";
}

function userPrompt() {
    let secretContent;
    let userReply = prompt("Do you really wanna see it?");
    if (userReply == "yes") {
        secretContent = "Tadaaaa!<br><img src='./media/bunny.png'>"
    } else if (userReply == "no") {
        secretContent = "Alright then, I'll keep my secrets.<br/><img src='./media/hidden.png'>"
    }
    else {
        secretContent = "Please answer yes or no<br><img src='./media/hidden.png'>"
    }
    document.getElementById("secretcontent").innerHTML = secretContent;
    return userReply;
}

for (let counter = 0; counter < 5; counter = counter + 1) {
    console.log("bla" + counter);
}





function getrating() {
    let rating = prompt("rate me 1-10");

    while (rating > 0) {
        document.getElementById("thumbcontent").insertAdjacentHTML("afterend", "<img class='thumbs' src='./media/thumbs.gif' />");
        rating--
    }
}