const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const inPut = document.querySelectorAll(".form__input");
const label = document.querySelectorAll(".form__label");
console.log(form, nameInput, emailInput, messageInput, label);

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form__group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form__group success";
}

function isValidEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// EVENT LISTENERS

// Add an event listener to the input field to listen for changes
nameInput.addEventListener("input", function () {
  // Get the value of the input field
  const name = nameInput.value;

  // Check if the input is a valid name
  if (!/^[a-zA-Z ]+$/.test(name)) {
    // If not, display an error message
    showError(nameInput, "Sorry, invalid format here");
  } else {
    // If the input is valid, clear the error message
    showSuccess(nameInput);
  }
});

// Add an event listener to the email input
emailInput.addEventListener("input", function () {
  // Get the email value
  const email = emailInput.value;

  // Validate the email
  if (!isValidEmail(email)) {
    showError(emailInput, "Sorry, invalid format here");
  } else {
    showSuccess(emailInput);
  }
});

/*
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (nameInput.value === "") {
    showError(nameInput, "Name is required");
  } else {
    showSuccess(nameInput);
  }
});
*/
