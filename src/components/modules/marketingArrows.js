import { marketingContent } from "./marketingContent";

// const sectionHeader = document.getElementById("msHeader");
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
  // console.log(icon);
  // console.log(iconsToSort);
  if (iconsToSort.querySelector(".risen")) {
    // console.log("Something should be u[");
    risen = iconsToSort.querySelector(".risen");
    console.log(risen, "should be risen var");
    risen.classList.remove("risen");
  }
  // console.log("yreasting on", document.querySelector(`#${icon}`));
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

const updateContent = (click) => {
  // determine mobile or not

  // computer time

  if (click === "left") {
    msSlide--;
    if (msSlide < 0) {
      msSlide = marketingContent.length - 1;
    }
  }

  if (click === "right") {
    msSlide++;
    if (msSlide === marketingContent.length) {
      msSlide = 0;
    }
  }
  // sectionHeader.textContent = marketingContent[msSlide].header;
  sectionParagraph.innerHTML = marketingContent[msSlide].description;

  console.log("suite?", document.querySelector(".suite"));

  console.log(marketingContent[msSlide].image);

  document.querySelector(
    ".suite"
  ).style = `background-image: url(" ${marketingContent[msSlide].image}")`;

  iconRiser(marketingContent[msSlide].slug);
  arrowUpdater(msSlide);

  // mobile time
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
