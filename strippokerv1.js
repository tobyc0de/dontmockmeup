// Strip poker

let clothesItems = ["shoes", "trousers", "shirt", "hat", "jacket"];
let userPoints = 0;
let numberOfQuestions = 0;
let selectedItem = "nothing";
let indexOfSelected;
let numberOfQuestionsLeft = clothesItems.length;

function addClothing() {
  document.querySelector("#currentoutfit").innerHTML = clothesItems;

  console.log(clothesItems);
  let addedItem = prompt("What do you want to add to your outfit?");
  clothesItems.push(addedItem);
  console.log(clothesItems);
  numberOfQuestionsLeft = clothesItems.length;
  document.querySelector("#currentoutfit").innerHTML = clothesItems;
}

function removeClothing() {
  console.log("number of questions: " + numberOfQuestions);
  console.log("numer of questions left: " + numberOfQuestionsLeft);
  console.log("clothesItems.length: " + clothesItems.length);

  while (
    numberOfQuestionsLeft >= clothesItems.length &&
    numberOfQuestionsLeft !== 0
  ) {
    selectedItem = prompt(
      "Please remove one of the following items: " + clothesItems
    ).toLowerCase();

    for (let i = 0; i < 5; i++) {
      if (selectedItem === clothesItems[i]) {
        alert("you removed " + selectedItem + "! Well done.");
        userPoints++;
        numberOfQuestions++;
        numberOfQuestionsLeft--;
        indexOfSelected = clothesItems.indexOf(selectedItem);
        clothesItems.splice(indexOfSelected, 1);
        document.getElementById("currentoutfit").innerHTML = clothesItems;
        console.log("number of questions: " + numberOfQuestions);
        console.log("numer of questions left: " + numberOfQuestionsLeft);
        console.log("clothesItems.length: " + clothesItems.length);
      }
    }
  }

  alert(
    "You are now naked, congratulations! You removed " +
      userPoints +
      " out of " +
      numberOfQuestions +
      " clothing items."
  );
}
