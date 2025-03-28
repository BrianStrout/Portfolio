import { tester1, Animator } from "./src/components/modules/animate.js";
import { observeIntroToServices } from "./src/components/modules/observeIntroToServ.js";
import { observeIntroToSkills } from "./src/components/modules/observeIntroToSkills.js";
import { observeIntroToMarketing } from "./src/components/modules/observeMarketingPopUp.js";
import { observeAnimation } from "./src/components/modules/observeAnimation.js";
import { observeFadeUps } from "./src/components/modules/observeFadeUps.js";
import { clicker } from "./src/components/modules/freelanceSwitcher.js";
import { nuClicker } from "./src/components/modules/newSwitchBoard.js";
// import { tl } from "./src/components/modules/website__gsap.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

let dev = false;
const f1 = "src/components/images/falling1.png";
const f2 = "src/components/images/falling2.png";
const f3 = "src/components/images/falling5.png";
const f4 = "src/components/images/falling4.png";
const f6 = "src/components/images/falling6.png";
const b1 = "src/components/images/panic1.png";
const b2 = "src/components/images/panic4.png";
const b3 = "src/components/images/panic3.png";
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
skillSetPage.forEach((page) => {
  observeIntroToSkills.observe(page);
});

const introsOnScreen = document.querySelectorAll("#introToServices");

introsOnScreen.forEach((intro) => {
  observeIntroToServices.observe(intro);
});

setInterval(volgendefoto, 200);
const body = document.body;

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

const links = Array.from(document.querySelectorAll(".nav--link"));

observeIntroToMarketing;

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
    // console.log("2024 Launched is: " + launched);
  }, 3500);
};

window.addEventListener("onbeforeload", () => {
  window.scrollTo(0, 0);
});

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
    castle.classList.add("grow");

    links.forEach((link) => {
      link.classList.add("introd");
    });
    document.getElementById("mobileToggle").classList.remove("offset--right");

    clicker("intro");
  }, 6500);
};

document.addEventListener("click", (e) => {
  nuClicker(e);
  console.log("nuuuu", e.target);
});

const portLinkCode_Portfolio = document.getElementById("portgithub");
const portLinkCode_Mash = document.getElementById("mashagithub");
const portLinkLive_Portfolio = document.getElementById("mashanetlify");
const portLinkCode_Fuga = document.getElementById("fugagithub");
const portLinkLive_Fuga = document.getElementById("fuganetlify");

wrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  let clicked = event.target.id;
  // console.log(clicked);
  switch (clicked) {
    case "portgithub":
      followingLink("github.com/BrianStrout/Portfolio");
      break;
    case "mashagithub":
      followingLink("github.com/BrianStrout/masha");
      break;
    case "mashanetlify":
      followingLink("mashaoflisbon.netlify.app/");
      break;
    case "fugagithub":
      followingLink("github.com/BrianStrout/Fugitiva");
      break;
    case "fuganetlify":
      followingLink("lafugitiva.netlify.app/");
      break;
    case "rotaryyoutube":
      followingLink("www.youtube.com/watch?v=RNCwRMOqxVs");
      break;
    case "gitmyoutube":
      followingLink("www.youtube.com/watch?v=l_2cQxfxDrs");
      break;
    default:
      break;
  }
});

const followingLink = (dest) => {
  window.open(`https://${dest}`, "_blank");
};

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
  e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

// webprocesssmapping
const webProcesses = document.querySelectorAll(".web__process--presenter");
webProcesses.forEach((websection) => {
  observeAnimation.observe(websection);
});

const elementsToFadeIn = document.querySelectorAll(".fademe");
elementsToFadeIn.forEach((fader) => {
  observeFadeUps.observe(fader);
});

// tl();

const sideScroll = gsap.timeline({
  scrollTrigger: {
    scroller: "#sc__websites",
    trigger: ".scroll__trigger",
    markers: false,
    start: "top 90%",
    end: "bottom 0%",
    scrub: true,
  },
});

sideScroll
  .to(
    ".sc__right",
    {
      marginLeft: "0%",
    },
    "a"
  )
  .to(
    ".sc__left",
    {
      marginLeft: "0%",
    },
    "a"
  );

const drawingProcess = gsap.timeline({
  scrollTrigger: {
    scroller: "#websiteGridPresentation",
    trigger: "#websiteVideo",
    markers: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

// copied from working tutorial by developedbyed

// const canvas = document.querySelector(".canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const context = canvas.getContext("2d");
const frameCount = 20;
let videoFramer = document.getElementById("videoFramer");
const currentFrame = (index) =>
  `src/components/images/animation/${(index + 1).toString()}.png`;

// const smimages = [];
// let ball = { frame: 0 };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = currentFrame(i);
//   console.log(currentFrame(i));
//   images.push(img);
// }

// gsap.to(ball, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: "none",
//   scrollTrigger: {
//     scrub: 0.5,
//     pin: "canvas",
//     end: "500%",
//   },
//   onUpdate: render,
// });

// gsap.fromTo(
//   ".ball-text",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     scrollTrigger: {
//       scrub: 1,

//       start: "50%",
//       end: "60%",
//     },
//     onComplete: () => {
//       gsap.to(".ball-text", { opacity: 0 });
//     },
//   }
// );

// smimages[0].onload = render;

// function render() {
//   videoFramer.style = `background-image = ${currentFrame}`;
// context.canvas.width = images[0].width;
// context.canvas.height = images[0].height;
// context.clearRect(0, 0, canvas.width, canvas.height);
// context.drawImage(images[ball.frame], 0, 0);
// }
