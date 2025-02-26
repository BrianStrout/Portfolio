import { Animator } from "./animate.js";

const imgOptions = {
  threshold: 0.4,
};

const observeFadeUps = new IntersectionObserver((entries, observeFadeUps) => {
  entries.forEach((entry) => {
    // console.log(entry.target.classlist);

    if (!entry.isIntersecting) {
      // entry.target.classList.add("fadeup");
      return;
    } else if (entry.isIntersecting) {
      entry.target.classList.remove("fadeup");
    }
  });
}, imgOptions);

export { observeFadeUps };
