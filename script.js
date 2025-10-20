"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const titleElement = document.querySelector(".title");
  const buttonsContainer = document.querySelector(".buttons");
  const yesButton = document.querySelector(".btn--yes");
  const noButton = document.querySelector(".btn--no");
  const catImg = document.querySelector(".cat-img");

  const MAX_IMAGES = 5;

  let play = true;
  let noCount = 0;

  if (!titleElement || !buttonsContainer || !yesButton || !noButton || !catImg) {
    console.error("Required DOM elements not found. Aborting script.");
    return;
  }

  yesButton.addEventListener("click", handleYesClick);

  noButton.addEventListener("click", function () {
    if (play) {
      noCount++;
      const imageIndex = Math.min(noCount, MAX_IMAGES);
      changeImage(imageIndex);
      resizeYesButton();
      updateNoButtonText();
      if (noCount === MAX_IMAGES) {
        play = false;
      }
    }
  });

  function handleYesClick() {
    titleElement.innerHTML = "YESSS SEE YOU!! :3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
  }

  function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
  }

  function generateMessage(noCount) {
    const messages = [
      "No",
      "sure ka na ayaw mo?",
      "lola please:(",
      "don't do this to me :(",
      "you're breaking my heart",
      "payag kana :(",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
  }

  function changeImage(image) {
    catImg.src = `img/cat-${image}.jpg`;
  }

  function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
  }
});
