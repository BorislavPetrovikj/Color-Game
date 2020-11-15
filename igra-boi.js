let randomColor = document.querySelector("#colorDisplay");
let square = document.querySelectorAll(".square");
let resetBtn = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");
let message = document.querySelector("#message");
let div = document.querySelector("#stripe");

var randomNum = 0;
var rgbColor = undefined;

function random_bg_color() {
  for (let i = 0; i < square.length; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    square[i].style.backgroundColor = bgColor;
    square[i].addEventListener("click", function (e) {
      if (e.target.style.backgroundColor == rgbColor) {
        makeAllSameColor(rgbColor);
        resetBtn.remove();
        let playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "PLAY AGAIN...";
        div.appendChild(playAgainBtn);
        message.innerHTML = "You won";
       
        playAgainBtn.addEventListener("click", function () {
     
          console.log("clicked");
        });
      } else {
        message.innerHTML = "Try Again";
        e.target.remove();
      }
    });
  }
  randomNum = Math.floor(Math.random() * 6);
  rgbColor = square[randomNum].style.backgroundColor;
  randomColor.innerHTML = rgbColor;
}

function makeAllSameColor(color) {
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;
  }
}

random_bg_color();

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  random_bg_color();
});

easyBtn.addEventListener("click", function () {
  for (let i = 0; i < square.length; i++) {
    for (let x = 0; i < 2; i++) {
      console.log(square[x]);
      // random_bg_color();
      random_bg_color();
    }
  }
});
hardBtn.addEventListener("click", function (e) {
  random_bg_color();
});



















