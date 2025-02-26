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
  //   aniimages[0].onload = renderWSAnimation;
  console.log("loaded image gallery");
  console.log(aniimages);
};

const renderWSAnimation = (result) => {
  console.log("rendering function flying");
  // console.log(inViewFrame.frame, " is inViewFrame frame");
  // console.log(aniimages[inViewFrame.frame]);

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(aniimages[result], 0, 0, canvas.width, canvas.height);
};

// const drawUp = (perc) => {
//   console.log("drawing up to", perc);
//   inViewFrame.frame = perc;
//   console.log("drawing reseeting frame to: ", inViewFrame.frame);
// };

// const drawDown = (perc) => {
//   console.log("drawing down to", perc);
//   inViewFrame.frame = perc;
// };

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
      console.log(result);
      renderWSAnimation(result);
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const updateAnimationFrame = (perc) => {
  console.log("UAF called on", perc);
  if (perc === "load" && unloaded) {
    populateAnimationSlidesforWebPresentation();
    unloaded = false;
  }

  if (typeof perc === "number") {
    console.log("number time!");

    //check where you are scrolling from inviewframe
    console.log(inViewFrame);

    countBetween(inViewFrame.frame, perc);
    inViewFrame.frame = perc;
    // if (inViewFrame.frame < perc) {
    //   drawUp(perc);
    // } else if (inViewFrame.frame > perc) {
    //   drawDown(perc);
    // }

    // let frameRoll =   countFromTo(inViewFrame, perc)
    //       console.log(frameRoll)

    // set number to draw to

    // if number is
  }

  //

  //   const canvasAnimator = () => {
  //     console.log("frame count is ", frameCount);

  //     for (let i = 0; i < frameCount; i++) {
  //       const aniimg = new Image();
  //       aniimg.src = currentFrame(i);
  //       aniimages.push(aniimg);
  //     }
  //     aniimages[0].onload = renderWSAnimation;
  //   };

  //   const renderWSAnimation = () => {
  //     console.log("rendering function flying");
  //     console.log(inViewFrame.frame, " is inViewFrame frame");
  //     console.log(aniimages[inViewFrame.frame]);

  //     context.clearRect(0, 0, canvas.width, canvas.height);
  //     context.drawImage(aniimages[inViewFrame.frame], 0, 0, canvas.width, canvas.height);
  //   };

  //   gsap.to(inViewFrame, {
  //     frame: frameCount,
  //     snap: "frame",
  //     ease: "none",

  //     scrollTrigger: {
  //       trigger: "#websiteGridPresentation",
  //       target: "canvas",
  //       scrub: 0.5,
  //       end: "150%",
  //       markers: "true",
  //     },
  //     onUpdate: renderWSAnimation,
  //   });

  //   canvasAnimator();

  //   document.querySelector(".newFooter").style = "display: none";
};

export { updateAnimationFrame };
