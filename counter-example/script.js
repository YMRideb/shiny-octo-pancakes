console.log("test");
var count = 0;
var countNum = document.querySelector("#count");

console.log(countNum);
function add1() {
    count++;
    countNum.innerText = "The count is " + count
    console.log(count);
}

function sub1() {
    count--;
    countNum.innerText = "The count is " + count
    console.log(count);
}

var picture = document.querySelector(#womanImg);

function swapImg() {
    picture.src = "womanPeep.jpg"
    // console.log(picture);
}

function swapBack() {
    picture.src = "manBacksplash.jpg.jpg"
    // console.log(picture);
}
console.log(picture.src);