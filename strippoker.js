// Strip poker

let clothesItems = ["shoes", "trousers", "shirt", "hat", "jacket"];
let userPoints = 0;
let numberOfItemsRemoved = 0;
let selectedItem = "nothing";
let indexOfSelected;
let numberOfItemsLeft = clothesItems.length;

function addClothing() {
  document.querySelector("#currentoutfit").innerHTML = clothesItems;

  console.log(clothesItems);
  let addedItem = prompt("What do you want to add to your outfit?");
  clothesItems.push(addedItem);
  console.log(clothesItems);
  numberOfItemsLeft = clothesItems.length;
  document.querySelector("#currentoutfit").innerHTML =
    "You are currently wearing: " + clothesItems;
}

function removeClothing() {
  console.log("number of items: " + numberOfItemsRemoved);
  console.log("numer of items left: " + numberOfItemsLeft);
  console.log("clothesItems.length: " + clothesItems.length);

  while (numberOfItemsLeft >= clothesItems.length && numberOfItemsLeft !== 0) {
    selectedItem = prompt(
      "Please remove one of the following items: " + clothesItems
    ).toLowerCase();

    for (let i = 0; i < 5; i++) {
      if (selectedItem === clothesItems[i]) {
        alert("you removed " + selectedItem + "! Well done.");
        userPoints++;
        numberOfItemsRemoved++;
        numberOfItemssLeft--;
        indexOfSelected = clothesItems.indexOf(selectedItem);
        clothesItems.splice(indexOfSelected, 1);
        document.querySelector("#currentoutfit").innerHTML =
          "You are currently wearing: " + clothesItems;
        console.log("number of items removed: " + numberOfItemsRemoved);
        console.log("numer of items left: " + numberOfItemsLeft);
        console.log("clothesItems.length: " + clothesItems.length);
      }
    }
  }

  alert(
    "You are now naked, congratulations! You removed " +
      userPoints +
      " out of " +
      numberOfItemsRemoved +
      " clothing items."
  );
}
