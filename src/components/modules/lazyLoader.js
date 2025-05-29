const lazyLoader = (stage) => {
  console.log("lazy loading engaged for ", stage);
  if (!stage) {
    console.log("no staging");
  }

  document.getElementById("nav--menu").style.backgroundImage =
    "url('../src/components/images/clouds/cloudbanner.png')";

  // url("../compon")
  document.getElementById("nav--menu").classList.add("introd");

  Array.from(document.querySelectorAll(".nav--link")).forEach((linkc) => {
    linkc.classList.add("introd");
  });
};

export { lazyLoader };
