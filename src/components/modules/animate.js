const tester1 = () => {
  console.log("modules running correctly");
};

function Animator(selector, alias, action, noun, style) {
  let animTarget;
  let animTargetArray;

  if (selector === "id") {
    animTarget = document.getElementById(`${alias}`);
  } else if (selector === "class") {
    animTargetArray = Array.from(document.querySelectorAll(`.${alias}`));

    animTargetArray.forEach((target) => {
      target.classList[action](`${noun}`);
    });
  } else {
    console.log("selector error");
    return;
  }
}

export { tester1, Animator };
