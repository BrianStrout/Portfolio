var image = document.getElementById("image");
var currentPos = 0;
var images = [f1, f1, f1];

function volgendefoto() {
  if (++currentPos >= images.length) currentPos = 0;

  image.src = images[currentPos];
}

setInterval(volgendefoto, 3000);

console.log("loaded");
