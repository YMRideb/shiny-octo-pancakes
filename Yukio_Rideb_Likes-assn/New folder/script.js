var stairimg = document.querySelector("#stairs");

function swapImg() {
    stairimg.src = "blueSine.jpg";
    stairimg.alt = "blue-ish curves";
}

function swapBack() {
    stairimg.src = "blkstairs.jpg";
    stairimg.alt = "Black Staircase";
}

// function setActive(element) {
//     element.style.backgroundColor = #222222;
//     element.style.color = #ffffff;
// }