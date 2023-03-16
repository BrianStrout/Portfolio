import { Animator } from "./animate.js";

let brianSecondPageBox = document.getElementById("brianSecondPageBox");
const brianSecondChair = document.getElementById("brianSecondChair");

const imgOptions = {
  threshold: 0.4,
};

const observeIntroToSkills = new IntersectionObserver(
  (entries, observeIntroToServices) => {
    entries.forEach((entry) => {
      console.log(entry.target.classlist);
      if (!entry.isIntersecting) {
        return;
      } else if (entry.isIntersecting) {
        brianSecondPageBox.classList.remove("unseen");
        brianSecondChair.classList.add("slide-chair-in");
        brianSecondPageBox.classList.add("brianUp");
      }
    });
  },
  imgOptions
);

export { observeIntroToSkills };
