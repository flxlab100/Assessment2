 
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

  var Name1=document.getElementById("name1");
  var Name2=document.getElementById("name2");
  var limit=5;
  Name1.textContent=0+"/"+limit;
  Name1.addEventListener("input",function(){
      Name1.textContent=textLength+"/"+limit
  })