
function eraseText() {
  document.getElementById("display").innerHTML = "";
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";

}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}


document.getElementById("clearbutton").addEventListener("click", eraseText );

document.getElementById("plus").addEventListener("click", arg_a );

function arg_a(event){

  var inputa = document.getElementById('a').value;


  if (inputa){
    var c = (+inputa + +inputb);
    var result= numberWithCommas(c);
    document.getElementById("display").innerHTML = result;
    event.preventDefault();


  } else {
    document.getElementById("display").innerHTML = "Arg! Need a few blocks to build!";
  }
}

document.getElementById("minus").addEventListener("click", arg_i );

function arg_i(event){

  var inputa = document.getElementById('a').value;
  var inputb = document.getElementById('b').value;

  if (inputa && inputb){
    var c = (+inputa - +inputb);
    var result= numberWithCommas(c);
    document.getElementById("display").innerHTML = result;
    event.preventDefault();

  } else {
    document.getElementById("display").innerHTML = "Arg! Need a few blocks to build!";
  }
}


document.getElementById("multiply").addEventListener("click", arg_m );

function arg_m(event){

  var inputa = document.getElementById('a').value;
  var inputb = document.getElementById('b').value;

  if (inputa && inputb){

    var c = (+inputa * +inputb);
    var result= numberWithCommas(c);
    document.getElementById("display").innerHTML = result;
    event.preventDefault();

  } else {
    document.getElementById("display").innerHTML = "Arg! Need a few blocks to build!";
  }
}


document.getElementById("divide").addEventListener("click", arg_d );

function arg_d(event){

  var inputa = document.getElementById('a').value;
  var inputb = document.getElementById('b').value;

  if (inputa && inputb){

    var c = (+inputa / +inputb);
    var result= numberWithCommas(c);
    document.getElementById("display").innerHTML = result;
    event.preventDefault();

  } else {
    document.getElementById("display").innerHTML = "Arg! Need a few blocks to build!";
  }

}
