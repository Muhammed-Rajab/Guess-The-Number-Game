console.log("Script loaded successfully!!");
const banner_text = document.querySelector(".banner-text");
const guess = document.querySelector("#guess");
const checkBtn = document.querySelector(".submit-btn");
const number_hint = document.querySelector("#number-hint");
const score = document.querySelector("#score");
const high_score = document.querySelector("#high-score > span");
const secret_num_box = document.querySelector(".box > span");
const againBtn = document.querySelector("#restart");
const scoreBanner = document.querySelector(".score-banner");

let score_ = 20;

// Random number
let secret_num = Math.trunc(Math.random() * 20) + 1;
score.textContent = `Score: ${score_}`;

// console.log(secret_num);;


// Adding click event to check btn
checkBtn.addEventListener("click", () => {
    // console.log(secret_num);;
    if (!guess.value) {
        number_hint.textContent = "No Number!";
    } else if (Number(guess.value) === secret_num) {
        number_hint.textContent = "Correct Number!"
        document.querySelectorAll("body, body *, *").forEach(function(elem) {
            elem.style.setProperty("background-color", "#60b347");
        });
        scoreBanner.innerHTML = secret_num;
    } else if (guess.value !== secret_num) {
        if (score_ > 1) {
            number_hint.textContent = guess.value > secret_num ? "Too High!" : "Too Low!";
            score_--;
            score.textContent = score_;
        } else {
            number_hint.textContent = "You lost the game!!";
        }
    }
    // } else if (guess.value < secret_num) {
    //     if (score_ > 1) {
    //         number_hint.textContent = ;
    //         score_--;
    //         score.textContent = `Score: ${score_}`;
    //     } else {
    //         number_hint.textContent = "You lost the game!!";
    //     }
    // }
});
againBtn.addEventListener("click", function() {
    document.querySelectorAll("body, body *, *").forEach(function(elem) {
        elem.style.setProperty("background-color", "#222");
    });
    // console.log(Number(high_score.textContent));
    number_hint.textContent = "Start guessing...";
    let prevScore = Number(high_score.textContent);
    let currentScore = score_;
    high_score.textContent = currentScore + prevScore;
    // console.log(score_);

    secret_num = Math.trunc(Math.random() * 20) + 1;
    // console.log(secret_num);
    guess.value = "";
    score_ = 20;
    score.textContent = `Score: ${score_}`;
});