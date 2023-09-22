// Strip poker

let clothesItems = ["shoes", "trousers", "shirt", "hat", "jacket"];

function UpdateListOfClothing() {
  let clothesList = document.getElementById("currentoutfit");
  clothesList.innerHTML = ""; // remove all items, then show them
  for (i = 0; i < clothesItems.length; ++i) {
    let clothesListItem = document.createElement("li");
    clothesListItem.innerText = clothesItems[i];
    clothesList.appendChild(clothesListItem);
  }
}

UpdateListOfClothing();

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
  UpdateListOfClothing();
}

function removeClothing() {
  if (numberOfItemsLeft >= clothesItems.length && numberOfItemsLeft !== 0) {
    selectedItem = prompt(
      "Please remove one of the following items: " + clothesItems
    ).toLowerCase();

    for (let i = 0; i <= clothesItems.length; i++) {
      if (selectedItem === clothesItems[i]) {
        alert("you removed your " + selectedItem + "! Well done.");
        indexOfSelected = clothesItems.indexOf(selectedItem);
        clothesItems.splice(indexOfSelected, 1);
        numberOfItemsLeft = clothesItems.length;
        UpdateListOfClothing();
      }
    }
  } else if (numberOfItemsLeft === 0) {
    alert("You are already naked! Better put some more clothes on.");
  }
}
