import { updateAnimationFrame } from "./videoAnimater";
let first = false;
const imgOptions = {
  threshold: 0.6,
};

const webVideo = document.getElementById("websiteVideo");

const observeAnimation = new IntersectionObserver(
  (entries, observeAnimation) => {
    entries.forEach((entry) => {
      console.log(entry.target.classlist);

      if (!entry.isIntersecting) {
        return;
      } else if (entry.isIntersecting) {
        if (!false) {
          updateAnimationFrame("load");
        }
        console.log(entry.target, " io");

        entry.target.scrollIntoView({ behavior: "smooth", block: "end" });

        switch (entry.target.id) {
          case "gridHeader":
            // webVideo.currentTime = 0;
            updateAnimationFrame(0);
            break;
          case "wpp__concept":
            // webVideo.currentTime = 0;
            updateAnimationFrame(19);
            break;
          case "wpp__copy":
            // webVideo.currentTime = 4;
            updateAnimationFrame(39);
            break;
          case "wpp__design":
            // webVideo.currentTime = 8;
            updateAnimationFrame(59);
            break;
          case "wpp__creation":
            // webVideo.currentTime = 12;
            updateAnimationFrame(79);
            break;
        }
      }
    });
  },
  imgOptions
);

export { observeAnimation };

// rewrite all this
