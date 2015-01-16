function eraseText() {
  document.getElementById("display").innerHTML = "";
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
console.log("")
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function addnumber(event) {
  event.preventDefault();

  var inputa = document.getElementById('a').value;
  var inputb = document.getElementById('b').value;
  var c = (+inputa + +inputb);

  var result= numberWithCommas(c);

  document.getElementById("display").innerHTML = result;

}

function subtractnumber(event) {
  event.preventDefault();

  var inputa = document.getElementById('a');
  var inputb = document.getElementById('b');
  var a = inputa.value;
  var b = inputb.value;
  var c = (+a - +b);
  document.getElementById("display").innerHTML = c;
}

function multiplynumber(event) {
  event.preventDefault();

  var inputa = document.getElementById('a');
  var inputb = document.getElementById('b');
  var a = inputa.value;
  var b = inputb.value;
  var c = (+a * +b);
  document.getElementById("display").innerHTML = c;
}

function dividenumber(event) {
  event.preventDefault();

  var inputa = document.getElementById('a');
  var inputb = document.getElementById('b');
  var a = inputa.value;
  var b = inputb.value;
  var c = (+a / +b);
  document.getElementById("display").innerHTML = c;
}


document.getElementById("clearbutton").addEventListener("click", eraseText );
document.getElementById("plus").addEventListener("click", addnumber );
document.getElementById("minus").addEventListener("click", subtractnumber );
document.getElementById("multiply").addEventListener("click", multiplynumber );
document.getElementById("divide").addEventListener("click", dividenumber );

//
//
// var inputa = document.getElementById('a');
// var inputb = document.getElementById('b');
//
// document.getElementById("plus").addEventListener("click", addnumber );
//
// function addnumber() {
//   document.getElementById("display").innerHTML = "c";
// }
//
//
// function display(){
//   var userInput = document.getElementById('a').value;
//   document.getElementById('display').innerHTML = userInput;
// }
//
// function shownumber(){
//   var userInput = document.getElementById('anumber').value;
//   document.getElementById('display').innerHTML = userInput;
// }
