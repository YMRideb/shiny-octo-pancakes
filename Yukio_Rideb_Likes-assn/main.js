var count = 0;
var countNum = document.querySelector("#counter");

function add1() {
    count++;
    countNum.innerText = count + " Likes";
}

function sub1() {
    count = 0;
    countNum.innerText = count + " Likes";
}