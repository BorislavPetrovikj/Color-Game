let randomColor = document.querySelector("#colorDisplay");
let square = document.querySelectorAll(".square");
let resetBtn = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");
let message = document.querySelector("#message");
var randomNum = 0;
var rgbColor = undefined;
var squaresNum = 6;

random_bg_color(squaresNum);

function random_bg_color(squares) {
    for (let i = 0; i < squares; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + r + "," + g + "," + b + ")";
        square[i].style.backgroundColor = bgColor;
        square[i].addEventListener("click", function (e) {
            if (e.target.style.backgroundColor == rgbColor) {
                makeAllSameColor(rgbColor);
                message.innerText = "You won";
                resetBtn.innerText = "Play Again..."
            } else {
                message.innerHTML = "Try Again";
                $(e.target).fadeOut();
            }
        });
    }
    randomNum = Math.floor(Math.random() * squares);
    rgbColor = square[randomNum].style.backgroundColor;
    randomColor.innerHTML = rgbColor;
}

function makeAllSameColor(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

resetBtn.addEventListener("click", function () {
    resetBtn.innerText = "New Colors"
    resetGame(squaresNum);
    message.innerHTML = "";
});

function resetGame(squares) {
    for (i = 0; i < 6; i++) {
        if (i < squares)
            square[i].style.display = "block";
        else square[i].style.display = "none";
    }

    random_bg_color(squares);
}

easyBtn.addEventListener("click", function () {
    squaresNum = 2;
    resetGame(squaresNum);
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    message.innerHTML = "";

});
hardBtn.addEventListener("click", function (e) {

    squaresNum = 6
    resetGame(squaresNum);
    easyBtn.classList.remove("selected")
    message.innerHTML = "";
});

















