const groupform = document.querySelector("#groupforms");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const booknow = document.querySelector("#booknow");
const NAME_REQUIRED = "Name is required";
const EMAIL_REQUIRED = "Email is required";
const EMAIL_INVALID = "Email is invalid";
const MOBILE_REQUIRED = "Mobile is required";
const MOBILE_INVALID = "Mobile is Invalid";
const phoneRegex = /^[0-9+ ()]{8,16}$/i;
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function buttonclicked() {
  alert("you have submitted");
}

function showMessage(input, message, type) {
  input.previousElementSibling.innerHTML = type ? "" : message;
  //   msg.innerHTML = message;
}

function showError(input, message) {
  showMessage(input, message, false);
}

function showSuccess(input) {
  showMessage(input, "", true);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    showError(input, message);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function validateEmail(input, requiredMsg, invalidMsg) {
  const email = input.value.trim();
  if (hasValue(input, requiredMsg) && !emailRegex.test(email))
  {
    showError(input, invalidMsg);
    return false;
  } else {
    return true;
  }}

function validateInput(format, input, requiredMsg, invalidMsg) {
  const inputValue = input.value.trim();
  if (hasValue(input, requiredMsg) && !format.test(inputValue))
    {
      showError(input, invalidMsg);
      return false;
    } else {
      return true;
    }
}
booknow.addEventListener("click", (event) => {
  //   event.preventDefault(); //stop form submission
  let nameValid = hasValue(groupform.elements["fullname"], NAME_REQUIRED);
  let emailValid = validateEmail(
    groupform.elements["email"],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );
  let mobileValid = validateInput(
    phoneRegex,
    groupform.elements["mobile"],
    MOBILE_REQUIRED,
    MOBILE_INVALID
  );
  if (nameValid && emailValid && mobileValid) {
    window.alert("demo only. no form was posted.");
  }
});



 