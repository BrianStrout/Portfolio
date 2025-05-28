// import { tester1, Animator } from "./animate.js";
import { observeIntroToServices } from "./observeIntroToServ.js";
import { observeIntroToSkills } from "./observeIntroToSkills.js";
import { observeIntroToMarketing } from "./observeMarketingPopUp.js";
import { observeAnimation } from "./observeAnimation.js";
import { observeFadeUps } from "./observeFadeUps.js";
// import { clicker } from "./freelanceSwitcher.js";
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

function volgendefoto() {
  if (++currentPos >= images.length) currentPos = 0;
  image.src = images[currentPos];
}
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
const moodRing = document.getElementById("moodring");
const cloudsInFront = document.querySelectorAll(".cloudsForward");
const cloudsInBack = document.querySelectorAll(".cloudsBackwards");
let clouds_array1 = [...cloudsInFront]; // converts NodeList to Array
let clouds_array2 = [...cloudsInBack]; // converts NodeList to Array
const remainder = document.getElementById("remainder");
const cloud1 = document.getElementById("c1");
const cloud2 = document.getElementById("c2");
const cloud3 = document.getElementById("c3");
const cloud4 = document.getElementById("c4");
const cloud5 = document.getElementById("c5");
const cloud6 = document.getElementById("c6");
const cloud7 = document.getElementById("c7");
const cloud8 = document.getElementById("c8");
const cloud9 = document.getElementById("c9");
const cloud10 = document.getElementById("c10");
const cloud11 = document.getElementById("c11");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const target = document.getElementById("target");
const switchPort = document.getElementById("switchPort");
const chair = document.getElementById("brianSecondChair");
const brianBlurbP = document.getElementById("brianBlurbP");
const ul = document.getElementById("listOfSkills");
const grabULTitle = document.querySelectorAll(".shrunk");
const ULTitleArray = [...grabULTitle];
const lastTitle = document.getElementById("listed_skills_media");
const liTags = document.getElementsByTagName("li");
const liTagList = [...liTags];
const absoluteCloud = document.getElementById("absolute-cloud");
const linkToGmail = document.getElementById("copy-gmail");
const linkToLinkedIn = document.getElementById("brianlinkedin");
const linkToGitHub = document.getElementById("briangithub");
const resumeLink = document.getElementById("resume-link");

const frames = document.querySelectorAll("iframe");

const secondBrian = document.getElementById("fallingSecond");
const castle = document.getElementById("castle");
const introsOnScreen = document.querySelectorAll("#introToServices");
const links = Array.from(document.querySelectorAll(".nav--link"));

const webSiteLaunch = () => {
  // Intersection Observer Launches

  skillSetPage.forEach((page) => {
    observeIntroToSkills.observe(page);
  });

  introsOnScreen.forEach((intro) => {
    observeIntroToServices.observe(intro);
  });
  observeIntroToMarketing;

  setInterval(volgendefoto, 200);
  const body = document.body;

  window.addEventListener("onbeforeload", () => {
    window.scrollTo(0, 0);
  });

  moodRing.addEventListener("click", () => {
    wrapper.classList.toggle("dark");
    sun.classList.toggle("sunset");
    moon.classList.toggle("sunset");
  });

  const CueClouds = () => {
    clouds_array1.forEach((cloud) => {
      cloud.classList.add("clouds-movement-foreground");
    });
    clouds_array2.forEach((cloud) => {
      cloud.classList.add("clouds-movement-background");
    });
  };

  const cueBrian = () => {
    fallingShell.classList.add("falling");

    setTimeout(() => {
      launched = true;
    }, 3500);
  };

  window.addEventListener("load", () => {
    // window.scrollTo(0, 0);
    topTarget.scrollIntoView({ behavior: "smooth" });

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
        CueClouds();
      }, 2000);

      setTimeout(() => {
        cueBrian();
      }, 3500);
    }, 1000);

    setTimeout(() => {
      clearOut();
    }, 7500);
  });

  firstN.addEventListener("transitionend", function () {
    // console.log("brian here");
  });

  const clearOut = () => {
    // console.log("clearing?");
    hiBox.classList.add("up-and-out");
    iamBox.classList.add("up-and-out");
    brian.classList.add("up-and-out");
    stroutBox.classList.add("up-and-out");
    titleBox.classList.add("up-and-out");

    setTimeout(() => {
      images = images2;
    }, 2000);

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

    // setTimeout(() => {
    //   remainder.classList.remove("unseen");
    // }, 6000);

    setTimeout(() => {
      homeWrap.scrollIntoView({ behavior: "smooth" });
      document.getElementById("wrapperTop").style = "height: 0vh";

      // disableScroll();
    }, 2800);

    setTimeout(() => {
      fallingSecond.classList.add("toEarth");
    }, 4500);
    setTimeout(() => {
      // castle.classList.add("grow");
      document.getElementById("nav--menu").classList.add("introd");
      links.forEach((link) => {
        link.classList.add("introd");
      });
      document.getElementById("mobileToggle").classList.remove("offset--right");

      // clicker("intro");

      nuClicker("andgo");
      lazyLoader();
    }, 6500);
  };
};

export { webSiteLaunch };
