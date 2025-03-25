// websiteGridScroll.js
import { updateAnimationFrame } from "./videoAnimater";

let mapAdjuster;
let lastMapAdjuster = null;
let converter;

const adjustMap = (progressperc) => {
  let newMapAdjuster = Math.floor((progressperc * 100) / 25) * 25;
  console.log(newMapAdjuster, "new map");

  if (progressperc < 0.025) {
    // let step = (progressperc * 80).toFixed(0);
    // let stepc = parseInt(step);
    // console.log(typeof stepc);

    updateAnimationFrame(0);
  } else if (progressperc > 0.025 && progressperc < 0.24) {
    updateAnimationFrame(19);
  } else if (progressperc > 0.24 && progressperc < 0.49) {
    updateAnimationFrame(39);
  } else if (progressperc > 0.5 && progressperc < 0.75) {
    updateAnimationFrame(59);
  } else if (progressperc > 0.75) {
    updateAnimationFrame(79);
  }

  if (newMapAdjuster === lastMapAdjuster) {
    return;
  }

  if (newMapAdjuster === 100) {
    return;
  }

  lastMapAdjuster = newMapAdjuster;
  console.log(newMapAdjuster, "is map adjuster");
  const mapEl = document.querySelector(".web__grid--right");
  if (!mapEl) {
    console.warn("Element '.web__grid--right' not found.");
    return;
  }
  mapEl.style.transform = `translateX(-${newMapAdjuster}%)`;
  console.log(mapEl.style);
};

export function setupWebsiteGridScroll({
  elementId = "websiteGridPresentation",
  parentID = "sc__websites",
  onProgress = (progress) => {},
  scrollOffsetVh = 10,
  enterThreshold = [0.6, 0.98],
  stillnessDelay = 1500,
} = {}) {
  console.log("Website scroll tracking initialized.");

  const target = document.getElementById(elementId);
  const parent = document.getElementById(parentID);

  if (!target || !parent) {
    console.warn(
      `Required element(s) not found: ${!target ? elementId : parentID}`
    );
    return;
  }

  // Attach scroll listener to parent container
  parent.addEventListener("scroll", () => {
    updateScrollProgress();
  });

  function updateScrollProgress() {
    const scrollTop = parent.scrollTop;
    const targetOffsetTop = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const parentHeight = parent.clientHeight;
    const distanceScrolled = scrollTop - targetOffsetTop;
    const totalScrollable = targetHeight - parentHeight;
    const clamped = Math.max(0, Math.min(distanceScrolled, totalScrollable));
    const progress = clamped / totalScrollable;
    console.log(progress);
    onProgress(progress);

    adjustMap(progress);
  }
}
