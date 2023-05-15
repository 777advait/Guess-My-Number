"use strict";

const guess = document.querySelector(".guess");
const genNumber = () => {return Math.ceil(Math.random() * 20)};

let score = document.querySelector(".score");
let message = document.querySelector(".message");
let highscore = document.querySelector(".highscore");
let number = genNumber();


document.querySelector(".check").addEventListener(
    "click", () => {
        if (score.textContent > 1) {
            if (!guess.value || guess.value > 20 || guess.value < 0) {
                message.textContent = "Please Enter a Valid Number!";
            }

            else if (guess.value == number) {
                message.textContent = "🎉 Correct!";
                highscore.textContent = score.textContent
                document.querySelector("body").style.backgroundColor = "#60b347";
                document.querySelector(".number").textContent = number
            }

            else if (guess.value > number) {
                message.textContent = "📈 Too High!";
                score.textContent = Number(score.textContent) - 1;
            }

            else if (guess.value < number) {
                message.textContent = "📉 Too Low!";
                score.textContent = Number(score.textContent) - 1;
            }
        }

        else {
            message.textContent = "You Lost!";
        }
    }
);


document.querySelector(".again").addEventListener(
    "click", () => {
        number = genNumber();
        document.querySelector(".number").textContent = "?";
        message.textContent = "Start guessing...";
        guess.value = "";
        document.querySelector("body").style.backgroundColor = "#222"
        score.textContent = 20;
    }
);