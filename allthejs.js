// QUIZ INIT
document.getElementById("startquizbutton").addEventListener("click", startQuiz);
let questionsArr = [
  "Was I born in Berlin? (y/n)",
  "Do I have any siblings? (y/n)",
  "Was I ever self-employed? (y/n)",
  "Did I ever live near a castle? (y/n)",
  "Did I ever live in Australia? (y/n)",
];
let correctAnswersArr = ["n", "y", "y", "y", "n"];
let possibleAnswersArr = ["y, n"];
let numberOfCorrectAnswers = 0;
let numberOfGuesses = 0;
let q6Ended = "nope";
let sevenQuestionscorrect = "no";

// DARKMODE
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

// MIRROR GAME

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

// PIZZA CONFIGURATOR
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

// MAGIC SHOW

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

// COOKIE BAR

document
  .getElementById("cookiebutton")
  .addEventListener("click", hideCookieBar);

function hideCookieBar() {
  document.getElementById("cookiemonster").style.visibility = "hidden";
}

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

// QUIZ QUESTIONS

function startQuiz() {
  for (let index = 0; index < questionsArr.length; index++) {
    let reply = prompt(questionsArr[index]).toLowerCase();
    console.log("reply: " + [index] + ": " + reply);

    if (reply === correctAnswersArr[index]) {
      alert("✔️ CORRECT! ✔️");
      numberOfCorrectAnswers++;
      console.log("Question" + [index] + ": ✔️");
      console.log("number of correct ones: " + numberOfCorrectAnswers);
    } else {
      alert("❌ WRONG! ❌");
      console.log("Question" + [index] + ": ❌");
    }
  }
  while (numberOfGuesses <= 3 && q6Ended === "nope") {
    let q6CorrectAnswer = 3;
    let questionSix = prompt("Guess my favorite number between 1 and 10");
    let q6Aanswer = parseInt(questionSix);
    console.log("question6:" + questionSix);
    console.log("q6Aanswer:" + q6Aanswer);

    console.log(q6Aanswer);
    if (q6Aanswer < q6CorrectAnswer && numberOfGuesses <= 3) {
      alert("Go higher");
      numberOfGuesses++;
      console.log("number of guesses" + numberOfGuesses);
    } else if (q6Aanswer > q6CorrectAnswer && numberOfGuesses <= 3) {
      alert("Go lower");
      numberOfGuesses++;
      console.log("number of guesses" + numberOfGuesses);
    } else if (q6Aanswer === q6CorrectAnswer && numberOfGuesses <= 3) {
      alert("✔️ CORRECT! ✔️");
      q6Ended = "yo";
      console.log("number of guesses" + numberOfGuesses);
      console.log("Question 6: ✔️");
      numberOfCorrectAnswers++;
    } else {
      alert("Please answer with a number'");
      numberOfGuesses++;
      console.log("number of guesses" + numberOfGuesses);
    }
  }

  while (numberOfGuesses <= 4 && q6Ended === "nope") {
    alert("The correct answer is 3");
    q6Ended = "yo";
  }

  let iceCreamFlavors = ["stracciatella", "hazelnut", "lemon"];
  let numberOfIceGuesses = 0;
  let numberOfIceGuessesLeft = 6;

  while (numberOfIceGuesses < 6) {
    let iceCreamGuess = prompt(
      "Guess one of my favorite ice cream flavors! " +
        numberOfIceGuessesLeft +
        " guesses left"
    ).toLowerCase();
    numberOfIceGuesses++;
    numberOfIceGuessesLeft--;

    for (let i = 0; i < iceCreamFlavors.length; i++) {
      console.log("i: " + i);
      console.log("guess is: " + iceCreamGuess);
      console.log("flavor is: " + iceCreamFlavors[i]);

      if (iceCreamGuess === iceCreamFlavors[i]) {
        console.log("Question 7: ✔️");
        alert("Nice one! That is indeed one of my favorites!");
        numberOfIceGuesses = 7;
        numberOfCorrectAnswers++;
        console.log("numberOfCorrectAnswers: " + numberOfCorrectAnswers);
      }
    }
  }
  alert("These are all my favorites: " + iceCreamFlavors);
  alert(
    "Well done You have answered " +
      numberOfCorrectAnswers +
      " questions correctly. Here's a an ice cream for you 🍦"
  );
  if (numberOfCorrectAnswers >= 4) {
    console.log("4 or more correct answers! Whoop whoop whoopie");
    document.getElementById("celebrationArea").style.display = "flow";
  }
}
