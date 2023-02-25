import { Animator } from "./animate.js";

const imgOptions = {
  threshold: 0.8,
};

const outs = Array.from(document.querySelectorAll(".out-of-question"));
const introGrid1 = document.getElementById("intro-grid-one");
const introGrid2 = document.getElementById("intro-grid-two");
const tiny = document.querySelector(".tiny-boy");
const sadChildren = document.querySelectorAll(".sad-child");

const observeIntroToServices = new IntersectionObserver(
  (entries, observeIntroToServices) => {
    entries.forEach((entry) => {
      console.log(entry.target.classlist);
      if (!entry.isIntersecting) {
        return;
      } else if (entry.isIntersecting) {
        // console.log("run fun");
        // console.log("fun running");
        outs.forEach((out, index) => {
          // console.log(index);

          if (index === 0) {
            setTimeout(() => {
              out.classList.remove("out-of-question");
            }, 500);
          }
          if (index === 1) {
            setTimeout(() => {
              out.classList.remove("out-of-question");
            }, 1000);
            setTimeout(() => {
              out.classList.add("upn-out-of-question");
            }, 1750);
          }
          if (index === 2) {
            setTimeout(() => {
              out.classList.remove("out-of-question");
            }, 1750);
            setTimeout(() => {
              out.classList.add("upn-out-of-question");
            }, 2500);
            setTimeout(() => {
              outs[0].classList.add("upn-out-of-question");
            }, 3000);
            setTimeout(() => {
              introGrid1.classList.add("get-up");
              introGrid2.classList.add("get-down");
            }, 3500);
            setTimeout(() => {
              introGrid1.remove();
              introGrid2.remove();
              tiny.classList.remove("tiny-boy");
            }, 4000);
            setTimeout(() => {
              sadChildren.forEach((child) => {
                child.classList.remove("sad-child");
              });
            }, 4500);
            setTimeout(() => {
              Animator("class", "balloon-ball", "add", "in-wind");
            }, 5000);
          }
        });
      }
    });
  },
  imgOptions
);

export { observeIntroToServices };
