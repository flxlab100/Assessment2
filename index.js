 
  function Numofadults(){
    let x = document.getElementById("numofadults").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 3) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }

  const groupforms=document.getElementById('groupforms');
  const fullname=document.getElementById('fullname');
  const email=document.getElementById('email');
  const mobile=document.getElementById('mobile');

  groupforms.addEventListener("submit", e=>{
      e.preventDefault();
      validateInputs();
  });

const setError=(element, message)=>{
  const inputControl=elemtn.parentElement;
  const errorDisplay=inputControl.querySelector('.error');

  errorDisplay.innerText=message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess=element=>{
  const inputControl=element.parentElement;
}


const validateInputs=()=>{
      const  fullnameValue=fullname.value.trim();
      const emailValue=email.value.trim();
      const  mobileValue=mobile.value.trim();

      if(fullnameValue===''){
           setError=(fullname, "Fullname is required");
      }else{
        setSuccess(fullname);
      }

      if(emailValue===''){
        setError(email, "Email is required");

      }else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
      }else{
        setSuccess(email);
      }

      if(mobileValue===''){
        setError(mobile, 'Mobile is not valid');
      }else (mobile.length=10){
        setSuccess(mobile);
      } 
         
      }

       