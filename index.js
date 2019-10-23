var work = document.getElementById("work");

var dropDown =  document.querySelector(".A");
var inner = dropDown.innerHTML;
dropDown.innerHTML = "";

function hover(){

dropDown.innerHTML = inner;
}
work.addEventListener("onmouseover",hover);
