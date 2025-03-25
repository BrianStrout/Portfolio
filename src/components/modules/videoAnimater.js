const canvas = document.querySelector(".canvas");
let unloaded = true;
let inViewFrame = { frame: 0 };

const context = canvas.getContext("2d");
const frameCount = 80;
const aniimages = [];
const currentFrame = (index) => `/src/components/images/animation/${index}.png`;

const populateAnimationSlidesforWebPresentation = () => {
  console.log(
    "updateAnimationFrame has called in subFunction to populate animation slides"
  );

  for (let i = 0; i < frameCount; i++) {
    const aniimg = new Image();
    aniimg.src = currentFrame(i);
    aniimages.push(aniimg);
  }
};

const renderWSAnimation = (result) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(aniimages[result], 0, 0, canvas.width, canvas.height);
};

function countBetween(start, end) {
  let current = start;
  let result = start;
  // console.log(result);

  const duration = 2000; // 2 seconds
  const steps = end - start;
  let startTime = performance.now();

  function step() {
    let elapsed = performance.now() - startTime;
    let progress = Math.min(elapsed / duration, 1);
    progress = 1 - Math.pow(1 - progress, 3); // Ease out effect

    current = Math.round(start + progress * steps);
    if (current !== result) {
      result = current;
      // console.log(result);
      renderWSAnimation(result);
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const updateAnimationFrame = (perc) => {
  console.log("updateAnimationFrame", perc);

  if (unloaded) {
    populateAnimationSlidesforWebPresentation();
    unloaded = false;
  }

  if (typeof perc === "number") {
    countBetween(inViewFrame.frame, perc);
    inViewFrame.frame = perc;
  }
};

export { updateAnimationFrame };
