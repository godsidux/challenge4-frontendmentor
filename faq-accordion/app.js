"use strict";

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        const plusIcon = btn.querySelector(".plus-icon");
      const minusIcon = btn.querySelector(".minus-icon");
    const answer = btn.nextElementSibling;

        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
          plusIcon.style.display = "block";
          minusIcon.style.display = "none";
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
          plusIcon.style.display = "none";
          minusIcon.style.display = "block";
        }
  });
});
