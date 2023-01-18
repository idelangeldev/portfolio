const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const errorMessage = "Sorry, invalid format here";

console.log(form, nameInput, emailInput, messageInput);

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

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENERS

// Add an event listener to the input field to listen for changes
nameInput.addEventListener("input", function () {
  // Get the value of the input field
  const name = nameInput.value;

  // Check if the input is a valid name
  if (!/^[a-zA-Z ]+$/.test(name)) {
    // If not, display an error message ("Sorry, invalid format here")
    showError(nameInput, errorMessage);
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
    // If not, display an error message ("Sorry, invalid format here")
    showError(emailInput, errorMessage);
  } else {
    showSuccess(emailInput);
  }
});

// Add an event listener to the message area input
messageInput.addEventListener("input", function () {
  // Get the email value
  const message = messageInput.value;

  // Validate the email
  if (message === "") {
    showError(messageInput, `${getFieldName(messageInput)} is required`);
  } else {
    showSuccess(messageInput);
  }
});

// // FORM
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   checkRequired([nameInput, emailInput, messageInput]);
// });
