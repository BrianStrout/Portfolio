const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.innerHeight = window.innerHeight;
let ball = { frame: 0 };

const context = canvas.getContext("2d");
const frameCount = 20;

const currentFrame = (index) =>
  `src/components/images/animation/${(index + 1).toString()}.png`;

const images = [];

const canvasAnimator = () => {
  for (let i = 0; i < frameCount + 1; i++) {
    console.log(i);
    console.log(currentFrame);

    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  console.log(images);
};

images[0].onload = renderWSAnimation;

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

const renderWSAnimation = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
};

export { canvasAnimator, renderWSAnimation };
