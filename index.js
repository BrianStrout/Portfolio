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

brianSecondPage.src = b1;

setInterval(volgendefoto, 200);
const body = document.body;

const launch = document.getElementById("launch");
const clear = document.getElementById("clear");
let launched = false;

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
const chair = document.getElementById("brianSecondChair");
const ul = document.getElementById("listOfSkills");
const grabULTitle = document.querySelectorAll(".shrunk");
const ULTitleArray = [...grabULTitle];

const lastTitle = document.getElementById("listed_skills_other");

const liTags = document.getElementsByTagName("li");
const liTagList = [...liTags];

const absoluteCloud = document.getElementById("absolute-cloud");

// const brianSecondPage = document.getElementById("brianSecondPage");
moodRing.addEventListener("click", () => {
  wrapper.classList.toggle("dark");
  sun.classList.toggle("sunset");
  moon.classList.toggle("sunset");
});

const CueClouds = () => {
  // launch cloud scape

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
    console.log("launched is: " + launched);
  }, 3500);
};

window.addEventListener("onbeforeload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", (event) => {
  window.scrollTo(0, 0);

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

const clearOut = () => {
  console.log("clearing?");
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

  setTimeout(() => {
    remainder.classList.remove("unseen");
  }, 6000);

  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth" });
  }, 2800);

  setTimeout(() => {
    brianSecondPageBox.classList.remove("unseen");
    brianSecondChair.classList.add("slide-chair-in");
    brianSecondPageBox.classList.add("brianUp");
  }, 3500);
};

clear.addEventListener("click", () => {
  if (!launched) {
    return;
  } else {
    clearOut();
  }
});

brianSecondPageBox.addEventListener("transitionend", function () {
  console.log("transition complete, put Brian in a desk here");
  brianSecondPage.src = "src/components/images/workingatdesk.png";
  brianSecondChair.classList.add("unseen");
  ULTitleArray.forEach((title) => {
    title.classList.remove("shrunk");
  });
});

lastTitle.addEventListener("transitionend", function () {
  liTagList.forEach((list) => {
    list.classList.remove("list-fixer");
  });
  absoluteCloud.classList.remove("pulled-down");
});
