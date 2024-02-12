// Setting Variables (Select Elements)
let theInput = document.querySelector(".container input");
let allSpans = document.querySelectorAll(".buttons span");
let resaults = document.querySelector(".resaults > span");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-item")) {
      showItem();
    }
  });
});

function showMessage() {
  resaults.innerHTML = "Input Can't Be Empty";
}

function checkItem() {
  if (theInput.value != "") {
    if (localStorage.getItem(theInput.value)) {
      resaults.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;
    } else {
      resaults.innerHTML = `No Local Storage Item Called <span>${theInput.value}</span>`;
    }
  } else {
    showMessage();
  }
}
function addItem() {
  if (theInput.value != "") {
    localStorage.setItem(theInput.value, "Test");
    resaults.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
    theInput.value = "";
  } else {
    showMessage();
  }
}
function deleteItem() {
  if (theInput.value != "") {
    if ((localStorage.getItem = theInput.value)) {
      localStorage.removeItem(theInput.value);
      resaults.innerHTML = `Local Storage Item <span>${theInput.value}</span> Deleted`;
      theInput.value = "";
    }
  } else {
    showMessage();
  }
}
function showItem() {
  if (localStorage.length) {
		console.log(`Found Elements ${localStorage.length}`)
    resaults.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      resaults.innerHTML += ` <span class="key">${key}</span>`;
    }
  } else {
    resaults.innerHTML = `Local Storage Is Empty`;
  }
}
