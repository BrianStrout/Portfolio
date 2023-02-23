const tester1 = () => {
  console.log("modules running correctly");
};

function Animator(selector, alias, action, noun, style) {
  let animTarget;
  let animTargetArray;
  let tt = action;

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

// switch (action){
// case "add":{
//     animTarget.classList.add(`.${noun}`);

// }
// case "remove":{
//     animTarget.classList.remove(`.${noun}`);
// }
// case "toggle":{
//     animTarget.classList.toggle(`.${noun}`);
// } case "style":{
//     animTarget.style.add(`.${noun}`);
// }
// }
