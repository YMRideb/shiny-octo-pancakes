console.log('There is no spoon');
function myFunction() {
    timeout = setTimeout(alertFunc, 3000);
  }
  
  function alertFunc() {
    alert("Hello!");
  }

var count = 314;
var ninjas = document.querySelector("#ninja-now");

function add1() {
    count++;
    ninjas.innerText = count;
}

var count2 = 159;
var pirates = document.querySelector("#pirate-now");

function addOne(element) {
    count2++;
    pirates.innerText = count2;
}

function subscribe() {
    var elem = document.querySelector('#boom');
    elem.remove();
}

let timeout;

function endGame() {
  timeout = setTimeout(alertFunc, 13000);
}

function alertFunc() {
  alert("Ninjas for the Win!!");
}