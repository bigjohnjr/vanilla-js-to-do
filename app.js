let submitButton = document.getElementById("submit");
let clearButton = document.getElementById("clear");
let list = document.getElementById("list");
let form = document.querySelector("form");

// Add to do item to the list
function addItem(listItem) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `${listItem} <span id="deleteListItem"></span>`;
  list.appendChild(newItem);
  form.reset();
}

// Throw alert if the input field is empty
function validateInput(input) {
  if (input == "") {
    alert("Please enter in an item.");
    return false;
  }
  return true;
}

// Execute the addItem function when user clicks submit
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = document.querySelector("input").value;
  if (validateInput(inputValue)) {
    addItem(inputValue);
  }
});

// Remove to do item from the list
function removeItem(item) {
  list.removeChild(item);
}

// Execute the removeItem function if the user clicks on the X next to the list item
list.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target || e.target.id === "deleteListItem") {
    removeItem(e.target.closest("li"));
  }
});

// Clear the entire list
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

// Execute the clearList function when user clicks the "Clear List" button
clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  clearList();
});
