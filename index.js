function buttonclicked(){
  alert("you have submitted");
}

function showMessage(input, message, type){
  const msg=input.parentNode.querySelector('small');
  msg,innerText=message;
  input.className=type? "success":"error";
  return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}


const gform=document.querySelector('#groupforms');
const fullname=document.querySelector('#fullname');
const email=document.querySelector('#email');
const mobile=document.querySelector("#mobile");


gform.addEventListener('submit', (event) =>{
  e.preventDefault(); //stop form submission
  let nameValid=hasValue(gform.elements["fullname"], NAME_REQUIRED);
  let emailValid=validateEmail(gform.elements["email"],EMAIL_REQUIRED, EMAIL_INVALID);
  let mobileValid=validateMobile(gform.elements["mobile"], MOBILE_REQUIRED);
   if(nameValid && emailValid && mobileValid){
    alert("demo only. no form was posted.");
   }
});

gform.addEventListener('submit', (event) =>{
   //handle the form data
});


 