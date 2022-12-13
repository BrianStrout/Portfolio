const f1 = "src/components/images/f1.jpg";
const f2 = "src/components/images/f2.jpg";
const f3 = "src/components/images/f3.jpg";
const f4 = "src/components/images/f4.jpg";

var image = document.getElementById("image");
var currentPos = 0;
var images = [f1, f2, f3, f4];

function volgendefoto() {
  if (++currentPos >= images.length) currentPos = 0;

  image.src = images[currentPos];
}

setInterval(volgendefoto, 300);

const wrapper = document.getElementById("wrapper");
const moodRing = document.getElementById("moodring");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
moodRing.addEventListener("click", () => {
  wrapper.classList.toggle("dark");
  sun.classList.toggle("sunset");
  moon.classList.toggle("sunset");
});
