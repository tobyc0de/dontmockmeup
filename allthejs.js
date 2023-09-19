let lightmode = "light";
console.log(lightmode);

function makeItDark() {
  document.body.style.background =
    "linear-gradient(0.4turn, darkred, darkblue)";
  lightmode = "dark";
  console.log(lightmode);
  document.getElementById("darkbutton").style.display = "none";
  document.getElementById("lightbutton").style.display = "flex";
}

function makeItLight() {
  document.body.style.background =
    "linear-gradient(0.4turn, rgb(196, 0, 141), #70d6ff)";
  lightmode = "light";
  console.log(lightmode);
  document.getElementById("lightbutton").style.display = "none";
  document.getElementById("darkbutton").style.display = "flex";
}

function lookInTheMirror() {
  // shoes
  let shoeColor = prompt("What color are your shoes/socks today?");
  console.log("Shoe or sock color: " + shoeColor);
  document.getElementById("feet").style.background = shoeColor;

  // trousers
  let trousersColor = prompt(
    "What color are your trousers/skirt/dress or underwear today?"
  );
  console.log("Trousers color: " + trousersColor);

  document.getElementById("legs").style.background = trousersColor;

  // shirt
  let shirtColor = prompt("What color is your shirt/top/dress today?");
  console.log("shirt/top/dress color: " + shirtColor);

  document.getElementById("torso").style.background = shirtColor;

  // hair
  let hairColor = prompt(
    "What color is your hair (or head if you are bald) today?"
  );
  console.log("Hair/head color: " + hairColor);

  document.getElementById("head").style.background = hairColor;
  document.getElementById("verdict").innerHTML = "Verdict: Great outfit!";
}

function addCheese() {
  document.getElementById("texttopping").innerHTML += "🧀";
}

function addPeppers() {
  document.getElementById("texttopping").innerHTML += "🌶️";
}

function addBroc() {
  document.getElementById("texttopping").innerHTML += "🥦";
}

function addGarlic() {
  document.getElementById("texttopping").innerHTML += "🧄";
}

function addPineapple() {
  document.getElementById("texttopping").innerHTML += "💩";
}

function confirmBanana() {
  confirm("Just ... no.");
}

function resetToppings() {
  document.getElementById("texttopping").innerHTML = "";
}

function magicShow() {
  let secretContent;
  let userReply = prompt("Do you really wanna see it?");
  if (userReply == "yes") {
    secretContent = "Tadaaaa!<br><img src='./media/bunny.png'>";
  } else if (userReply == "no") {
    secretContent =
      "Alright then, I'll keep my secrets.<br/><img src='./media/hidden.png'>";
  } else {
    secretContent = "Please answer yes or no<br><img src='./media/hidden.png'>";
  }
  document.getElementById("secretcontent").innerHTML = secretContent;
  return userReply;
}

for (let counter = 0; counter < 5; counter = counter + 1) {
  console.log("bla" + counter);
}

function getRatingWhile() {
  let ratingWhile = prompt("rate me 1-10 WHILE I wait");

  while (ratingWhile >= 1 && ratingWhile <= 10) {
    document
      .getElementById("thumbcontent")
      .insertAdjacentHTML(
        "afterend",
        "<img class='thumbs' src='./media/thumbs.gif' />" + ratingWhile
      );
    ratingWhile--;
  }
}

function getRatingFor() {
  let ratingFor = prompt("rate me 1-10 FOR fun");
  if (!(ratingFor > 0 && ratingFor <= 10)) {
    getRatingFor();
  } else
    for (let index = 0; index < ratingFor; index++) {
      document.getElementById("thumbcontent").innerHTML +=
        "<img class='thumbs' src='./media/thumbs.gif' />" + (index + 1);
    }
}
