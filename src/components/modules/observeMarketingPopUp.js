import { Animator } from "./animate.js";

const imgOptions = {
  threshold: 0.7,
};

const frame = Array.from(document.querySelectorAll("iframe"));
const marketBox = document.querySelector(".marketing--pitch-box");

const observeIntroToMarketing = new IntersectionObserver(
  (entries, observeIntroToMarketing) => {
    entries.forEach((entry) => {
      console.log("func");

      // console.log(entry.target.classlist);
      if (!entry.isIntersecting) {
        return;
      } else if (entry.isIntersecting) {
        console.log("here");
        // marketBox.classList.remove("offset--down");
      }
    });
  },
  imgOptions
);
export { observeIntroToMarketing };
