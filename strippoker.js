// Strip poker

let clothesItems = ["shoes", "trousers", "shirt", "hat", "jacket"];

function showListOfClothing() {
  let clothesList = document.getElementById("currentoutfit");
  clothesList.innerHTML = ""; // remove all items, then show them
  for (i = 0; i < clothesItems.length; ++i) {
    let clothesListItem = document.createElement("li");
    clothesListItem.innerText = clothesItems[i];
    clothesList.appendChild(clothesListItem);
  }
}

showListOfClothing();

let selectedItem = "nothing";
let indexOfSelected;
let numberOfItemsLeft = clothesItems.length;
let itemList = returnItem();

function returnItem() {
  for (let x = 0; x < clothesItems.length; x++) {
    console.log("clothesItemsx: " + clothesItems[x]);
  }
}

function addClothing() {
  console.log(clothesItems);
  let addedItem = prompt(
    "You are currently wearing " +
      clothesItems +
      ". What do you want to add to your outfit? "
  );
  clothesItems.push(addedItem);
  numberOfItemsLeft = clothesItems.length;
  showListOfClothing();
}

function removeClothing() {
  if (numberOfItemsLeft >= clothesItems.length && numberOfItemsLeft !== 0) {
    selectedItem = prompt(
      "Please remove one of the following items: " + clothesItems
    ).toLowerCase();

    for (let i = 0; i < 5; i++) {
      if (selectedItem === clothesItems[i]) {
        alert("you removed your " + selectedItem + "! Well done.");
        indexOfSelected = clothesItems.indexOf(selectedItem);
        clothesItems.splice(indexOfSelected, 1);
        numberOfItemsLeft = clothesItems.length;
        showListOfClothing();
      }
    }
  } else {
    alert("You are already naked! Better put some more clothes on.");
  }
}
