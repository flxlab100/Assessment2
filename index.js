 
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

  function confirmInput(){
    let y = document.getElementById("fullname").value;

       if(y.length<=5){
        alert('hello'+ y.length);
      return false;
       } 
}

 


  