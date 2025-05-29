import { nuClicker } from "./newSwitchBoard.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { lazyLoader } from "./lazyLoader.js";

gsap.registerPlugin(ScrollTrigger);

let dev = false;
const f1 = "src/components/images/falling1.webp";
const f2 = "src/components/images/falling2.webp";
const f3 = "src/components/images/falling5.webp";
const f4 = "src/components/images/falling4.webp";
const f6 = "src/components/images/falling6.webp";
const b1 = "src/components/images/panic1.webp";
const b2 = "src/components/images/panic4.webp";
const b3 = "src/components/images/panic3.webp";
let image = document.getElementById("image");
let currentPos = 0;
let images = [f1, f2, f1, f6, f3, f4, f3, f4, f1, f3, f4, f3, f6, f1, f2];
let images2 = [b1, b2, b3, b2];
let brianSecondPage = document.getElementById("brianSecondPage");
let brianSecondPageBox = document.getElementById("brianSecondPageBox");
const switchFree = document.getElementById("switchFree");
const switchProfessional = document.getElementById("switchPort");
const freelancePresenter = document.getElementById("freelancePresenter");
const backCloud = document.getElementById("backCloud");
const switchWrap = document.querySelector(".switchwrap");
const homeWrap = document.querySelector(".homeWrap");
const skillSetPage = document.querySelectorAll("#target");

const launch = document.getElementById("launch");
const clear = document.getElementById("clear");
let launched = false;
const topTarget = document.getElementById("top-target");
const hi = document.getElementById("hi");
const hiBox = document.getElementById("hiBox");
const iam = document.getElementById("iam");
const iamBox = document.getElementById("iamBox");
const brian = document.getElementById("brianBox");
const strout = document.getElementById("strout");
const stroutBox = document.getElementById("stroutBox");
const title = document.getElementById("title");
const titleBox = document.getElementById("titleBox");
const firstNameLetters = document.querySelectorAll(".first-letters");
const firstN = document.getElementById("first-n");
const fallingShell = document.getElementById("fallingShell");
const wrapper = document.getElementById("wrapper");

const cloudsInFront = document.querySelectorAll(".cloudsForward");
const cloudsInBack = document.querySelectorAll(".cloudsBackwards");
let clouds_array1 = [...cloudsInFront]; // converts NodeList to Array
let clouds_array2 = [...cloudsInBack]; // converts NodeList to Array

// const target = document.getElementById("target");
// const switchPort = document.getElementById("switchPort");
// const chair = document.getElementById("brianSecondChair");
// const brianBlurbP = document.getElementById("brianBlurbP");
// const ul = document.getElementById("listOfSkills");
// const grabULTitle = document.querySelectorAll(".shrunk");
// const ULTitleArray = [...grabULTitle];
// const lastTitle = document.getElementById("listed_skills_media");
// const liTags = document.getElementsByTagName("li");
// const liTagList = [...liTags];
// const absoluteCloud = document.getElementById("absolute-cloud");
// const linkToGmail = document.getElementById("copy-gmail");
// const linkToLinkedIn = document.getElementById("brianlinkedin");
// const linkToGitHub = document.getElementById("briangithub");
// const resumeLink = document.getElementById("resume-link");
// const frames = document.querySelectorAll("iframe");
// const secondBrian = document.getElementById("fallingSecond");
// const castle = document.getElementById("castle");
// const introsOnScreen = document.querySelectorAll("#introToServices");

const body = document.body;
const brianFallingAnimation = setInterval(() => {
  if (++currentPos >= images.length) currentPos = 0;
  image.src = images[currentPos];
}, 200);
const webSiteLaunch = () => {
  topTarget.scrollIntoView({ behavior: "smooth" });

  const cueBrian = () => {
    console.log("cue?");
    fallingShell.classList.add("falling");
    setTimeout(() => {
      launched = true;
    }, 3500);
  };
  setTimeout(() => {
    hi.classList.remove("translatedHi");
    iam.classList.remove("translatedIam");

    let brian_array = [...firstNameLetters]; // converts NodeList to Array
    brian_array.forEach((letter) => {
      letter.classList.add("first-name-falling-in");
    });
    strout.classList.remove("translatedStrout");
    title.classList.remove("translatedTitle");
    setTimeout(() => {
      cueBrian();
    }, 3500);
  }, 1000);

  setTimeout(() => {
    clearOut();
  }, 7500);
  // });
};
const clearOut = () => {
  hiBox.classList.add("up-and-out");
  iamBox.classList.add("up-and-out");
  brian.classList.add("up-and-out");
  stroutBox.classList.add("up-and-out");
  titleBox.classList.add("up-and-out");

  setTimeout(() => {
    fallingSecond.classList.add("toEarth");
  }, 1500);
  setTimeout(() => {
    images = images2;
  }, 2000);

  setTimeout(() => {
    document.getElementById("mobileToggle").classList.remove("offset--right");
    nuClicker("andgo");
    lazyLoader();
    clearInterval(brianFallingAnimation);
  }, 2500);

  setTimeout(() => {
    body.style.overflow = "visible";
    fallingShell.classList.add("down-and-out");
    clouds_array1.forEach((cloud) => {
      cloud.classList.add("unseen");
    });
    clouds_array2.forEach((cloud) => {
      cloud.classList.add("unseen");
    });
  }, 2500);

  setTimeout(() => {
    homeWrap.scrollIntoView({ behavior: "smooth" });
    document.getElementById("wrapperTop").style = "height: 0vh";
  }, 2800);
};

export { webSiteLaunch };
