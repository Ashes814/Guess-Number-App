"use strict";

let secretNumber;
let score;
let highscore = 0;

const displayMessage = function (message) {
  /*
   * @message {string} message - the message to show in the right side of the app
   */
  document.querySelector(".message").textContent = message;
};

const init = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("猜猜我是几……");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};
init();

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("🤔 我怀疑你没输入数字");

    // When Players wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 你是对的，666");
    document.querySelector(".number").textContent = secretNumber;

    // change background color
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 太高了吧！"
          : "📉 你这猜的比马里亚纳海沟还低呢!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 你挂了，小菜鸡😁!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Implement the again button
document.querySelector(".again").addEventListener("click", function () {
  init();
});
