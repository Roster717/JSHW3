
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "juft";
    } else {
      return "toq";
    }
  }


  var a = prompt("Son kiriting");


  var b = parseInt(a);


  if (!isNaN(b)) {

    alert("Bu son " + checkEvenOrOdd(b));
  } else {

    alert("Hato ketib qoldi");
  }




  function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
  }


  var baseNumber = prompt("son kiriting");


  var base = parseFloat(baseNumber);


  if (!isNaN(base)) {

    var exponent = prompt("darajini kiriting");


    var exp = parseFloat(exponent);


    if (!isNaN(exp)) {

      alert(calculatePower(base, exp));
    } else {

      alert("Xato");
    } }