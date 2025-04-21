import { marketingContent } from "./marketingContent";

const cardPhysics = [
  `left: 35%;
transform: scale(1);
filter: blur(0px);
z-index: 80;
`,
  `left: calc(100% - 24vw);
transform: scale(.6);
filter: blur(4px);
z-index: 70;
`,
  `left: 55.5%;
transform: scale(.3);
filter: blur(6px);
z-index: 50;
`,
  `left: 10%;
transform: scale(.3);
filter: blur(6px);
z-index: 50;
`,
  `
left: 0%;
transform: scale(.6);
filter: blur(4px);
z-index: 70;
`,
];

const cardsId = ["mc1", "mc2", "mc3", "mc4", "mc5"];

const sectionParagraph = document.getElementById("msParagraph");
const iconsToSort = document.querySelector(".ms__icons");
let msSlide = 0;
let left;
let right;
let risen;

function isMobile() {
  return window.innerWidth <= 768; // Adjust breakpoint as needed
}

if (isMobile()) {
  console.log("User is on a mobile device");
} else {
  console.log("User is on a desktop");
}

const iconRiser = (icon) => {
  if (iconsToSort.querySelector(".risen")) {
    risen = iconsToSort.querySelector(".risen");
    console.log(risen, "should be risen var");
    risen.classList.remove("risen");
  }

  document.querySelector(`#${icon}`).classList.add("risen");
};

const leftA = document.getElementById("msArrowLeft");
let leftNumber = 4;
const rightA = document.getElementById("msArrowRight");
let rightNumber = 2;

const arrowUpdater = (number) => {
  console.log("in arrow");
  console.log(number);

  leftNumber = number - 1;
  if (number === 0) {
    leftNumber = 4;
  }
  rightNumber = number + 1;
  if (number === 4) {
    rightNumber = 0;
  }
  if (msSlide < 0) {
    msSlide = marketingContent.length - 1;
  }
  console.log(leftNumber, rightNumber);

  leftA.style.backgroundImage = `url(/${marketingContent[leftNumber].image})`;
  rightA.style.backgroundImage = `url(/${marketingContent[rightNumber].image})`;
};

const moveCards = (cards) => {
  console.log("moving", cards);

  cards.forEach((card, index) => {
    console.log(card, index);
    console.log(`${cardPhysics[index]}`);

    document.getElementById(`${card}`).style = `${cardPhysics[index]}`;
  });
};

const updateContent = (click) => {
  if (click === "left") {
    msSlide--;
    if (msSlide < 0) {
      msSlide = marketingContent.length - 1;
    }
    let last = cardsId.pop();
    cardsId.unshift(last);
  }

  if (click === "right") {
    msSlide++;
    if (msSlide === marketingContent.length) {
      msSlide = 0;
    }
    let first = cardsId.shift();
    cardsId.push(first);
  }

  iconRiser(marketingContent[msSlide].slug);
  arrowUpdater(msSlide);
  moveCards(cardsId);
};

const marketingController = (target) => {
  console.log("marketing controller live", target);

  if (target.classList.contains("arrowLeft")) {
    console.log("Left!");
    updateContent("left");
  }
  if (target.classList.contains("arrowRight")) {
    console.log("Right!");
    updateContent("right");
  }
};

export { marketingController };
