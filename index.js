import { observeFadeUps } from "./src/components/modules/observeFadeUps.js";
import { setupWebsiteGridScroll } from "./src/components/modules/websiteSidescroller.js";
import { nuClicker } from "./src/components/modules/newSwitchBoard.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { webSiteLaunch } from "./src/components/modules/introAnimation.js";
// import { skipAnimation } from "./src/components/modules/skipAnimation.js";
import {
  moveTouch,
  startTouch,
  endTouch,
  deck,
} from "./src/components/modules/marketingCardsSwiper.js";
import { observeEnterringMovieTheater } from "./src/components/modules/observeEnterringMovieTheater.js";
webSiteLaunch();

const inDEV = false;
// console.log("is running with dumb erros for node");
// inDEV ? skipAnimation() : webSiteLaunch();

function initMobile() {
  return window.innerWidth <= 768; // Adjust breakpoint as needed
}
let mobileView = initMobile();
if (initMobile) {
  console.log("index has registered mobile we be launching listeners");
  deck.addEventListener("touchstart", startTouch);
  deck.addEventListener("touchmove", moveTouch);
  deck.addEventListener("touchend", endTouch);
}

document.addEventListener("click", (e, mobileView) => {
  nuClicker(e);
  console.log("click");
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

// var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
// function preventDefault(e) {
//   e.preventDefault();
// }
// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

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

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent =
//   "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
// function disableScroll() {
//   window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
//   window.addEventListener("keydown", preventDefaultForScrollKeys, false);
// }

// call this to Enable
// function enableScroll() {
//   window.removeEventListener("DOMMouseScroll", preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
//   window.removeEventListener("touchmove", preventDefault, wheelOpt);
//   window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
// }

const elementsToFadeIn = document.querySelectorAll(".fademe");
elementsToFadeIn.forEach((fader) => {
  observeFadeUps.observe(fader);
});

const movieTheater = document.querySelector("#movieTheater");

observeEnterringMovieTheater.observe(movieTheater);

setupWebsiteGridScroll({
  elementId: "websiteGridPresentation",
  onProgress: (progress) => {},
});

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

// const launchDragListener = () => {
//   console.log("listening for drag");
//   deck.addEventListener("touchstart", cardSwiper(e, startTouch));
//   deck.addEventListener("touchmove", cardSwiper(e, moveTouch));
//   deck.addEventListener("touchend", cardSwiper(e, endTouch));
// };
