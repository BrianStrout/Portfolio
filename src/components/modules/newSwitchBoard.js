let pullFocus = document.querySelector("#sc__hello");
let pullFocusDeets;
import { validator } from "./formValidation";
import { marketingController } from "./marketingArrows";
// import { cardSwiper } from "./marketingCardsSwiper";
const moodRing = document.getElementById("moodring");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

let waving = false;

const waver = () => {
  if (window.innerWidth <= 768) {
    // console.log("is mobile view");
    waving = !waving;
    console.log(waving);
    if (waving) {
      document
        .querySelector(".front__and-center")
        .classList.remove("front__and-center");

      setTimeout(() => {
        document.getElementById(
          "mobileBack"
        ).innerHTML = `<div class="mb1"></div><div class="mb2"></div><div class="mb3"></div><div class="mb4"></div><div class="mb5"></div><div class="mb6"></div><div class="mb7"></div><div class="mb8"></div>`;
      }, "750");
    } else if (!waving) {
      document.getElementById("mobileBack").innerHTML = ``;
    }
    return;
  }
};

const nuClicker = (e) => {
  console.log("new", e.target);

  // if (e.target.id === "cta") {

  //   return;
  // }

  if (e === "intro") {
    // document.querySelector(".hm--title").classList.remove("op0");
    document.querySelector(".hm--display").classList.remove("op0");
    return;
  }

  if (e === "andgo") {
    // document.querySelector(".hm--title").classList.remove("op0");
    document.querySelector(".hm--display").classList.remove("op0");
    pullFocus = document.querySelector("#sc__hello");
    pullFocus.classList.remove("blur");
    pullFocus.classList.add("front__and-center");
    pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
    pullFocus.childNodes.forEach((child) => {
      if (child.tagName && child.tagName === "DIV") {
        child.classList.add("hit");
      }
    });
    return;
  }

  // if (e.target.id === "submit") {

  // }

  // console.log(e.target, " has hit new switch board DOT js");

  if (e.target.classList.contains("arrow")) {
    marketingController(e.target);
  }

  if (
    e.target.classList.contains("nav--link") ||
    e.target.classList.contains("cta")
  ) {
    console.log("NAV LINK NUMETAL!");

    scrollTo(0, 0);

    let a = document.querySelectorAll(".hit");

    if (a.length > 0) {
      a.forEach((hasBeen) => {
        hasBeen.classList.remove("hit");
      });
    }

    document.querySelectorAll(".screen__card").forEach((card) => {
      card.classList.add("blur");
      card.classList.remove("front__and-center");
    });

    document.querySelectorAll(".fademe").forEach((fade) => {
      if (!fade.classList.contains("fadeup")) {
        fade.classList.add("fadeup");
      }
    });
  }

  switch (e.target.id) {
    case "moodring":
      wrapper.classList.toggle("dark");
      sun.classList.toggle("sunset");
      moon.classList.toggle("sunset");
      break;

    case "mobileToggle":
      homeWrap.scrollIntoView({ behavior: "smooth" });
      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");

      waver();

      break;
    case "submit":
      console.log("submitting in the new controller");
      e.preventDefault();
      validator();
      break;

    case "rotary":
      window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs", "_blank");
      break;
    case "thisisbrian":
      window.open("https://www.youtube.com/watch?v=5khekERvC1c", "_blank");
      break;
    case "ghost":
      window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs", "_blank");
      break;
    case "chets":
      console.log("is chets open?");
      window.open(
        "https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s",
        "_blank"
      );
      break;
    case "paypal":
      window.open("https://paypal.me/BStrout", "_blank");
      break;
    case "venmo":
      window.open("https://account.venmo.com/u/brian-strout-2", "_blank");
      break;
    case "fugi":
      window.open("https://lafugitiva.netlify.app", "_blank");
      break;
    case "winter":
      window.open("https://winterdemo.netlify.app/", "_blank");
      break;
    case "mookies":
      window.open("https://mookies.netlify.app/", "_blank");
      break;
    case "masha":
      window.open("https://mashaoflisbon.netlify.app/", "_blank");
      break;

    case "linkig":
      window.open("https://www.instagram.com/strout.co", "_blank");

      break;
    case "linkfb":
      window.open("https://www.facebook.com/strout.co", "_blank");

      break;
    case "linkyt":
      window.open("https://www.youtube.com/@stroutco2070", "_blank");

      break;
    case "linkgh":
      window.open("https://www.github.com/brianstrout", "_blank");
      break;

    case "port-port":
      codingProjectDisplay.innerHTML = `
        <div class="project-display-header">
        <div
          class="project-thumbnail-container ptcTop"
          id="port-port"
        ></div>
        <div class="project-thumbnail-container ptcBottom"></div>
        <div class="project-title">
          <h2>Portfolio</h2>
          <div class="made-with-div">
            <h4>Made with...</h4>
            <br />
            <div class="icons-for-grid">
              <div class="made-with-icon">
                <svg
                  width="30px"
                  height="30px"
                  role="img"
                  viewBox=" 0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>HTML5</title>
                  <path
                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                  />
                </svg>
              </div>
              <div class="made-with-icon">
                <svg
                  width="30px"
                  height="30px"
                  role="img"
                  viewBox=" 0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>CSS3</title>
                  <path
                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                  />
                </svg>
              </div>
              <div class="made-with-icon">
                <svg
                  width="30px"
                  height="30px"
                  role="img"
                  viewBox=" 0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>JavaScript</title>
                  <path
                    d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="porfolio-link-container">
            <button class="link" id="portgithub">
              <svg
                width="30px"
                height="30px"
                role="img"
                viewBox=" 0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              Code
            </button>
          </div>
        </div>
      </div>
      <div class="port-blurb">
        <p>
          When I was thinking about how to present my material moving
          forwards, I wanted to make sure I could present something
          clean and professional while still capturing my personality. I
          feel I have met this goal so far, and look forward to adding
          to shareable work. This site was coded in HTML, CSS, and
          Javascript.
        </p>
      </div>`;
      break;
    case "port-fugativa":
      codingProjectDisplay.innerHTML = `
        <div class="project-display-header">
                  <div
                    class="project-thumbnail-container ptcTop"
                    id="port-fugativa"
                  ></div>
                  <div class="project-thumbnail-container ptcBottom"></div>
  
                  <div class="project-title">
                    <h2>Mobile Menu</h2>
  
                    <div class="made-with-div">
                      <h4>Made with...</h4>
                      <br />
                      <div class="icons-for-grid">
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>HTML5</title>
                            <path
                              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                            />
                          </svg>
                        </div>
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>CSS3</title>
                            <path
                              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                            />
                          </svg>
                        </div>
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>JavaScript</title>
                            <path
                              d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="porfolio-link-container">
                      <button class="link" id="fugagithub">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          />
                        </svg>
                        Code</button
                      ><button class="link" id="fuganetlify">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Netlify</title>
                          <path
                            d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"
                          />
                        </svg>
                        Live
                      </button>
                    </div>
                  </div>
                </div>
                <div class="port-blurb">
                  <p>
                    This purpose of building this site was built to find a free,
                    no-app, easy way to provide a restraurant's updated menu to
                    it's costumers. Post Covid-19, a lot of restraurants returned
                    with digital menus, however I noticed that a lot of them
                    featured pdfs, which made changes really annoying for
                    waitstaff to keep up with. And assuming with that most belts
                    were being tighted in the hospitality business, I wanted to
                    build a site that dynamically builds and updates it's menu
                    with reload items, prices, and descriptions. This is only
                    using a template I built and data from Google Sheets. This
                    would enable a manager to update the price on the spreadsheet
                    from their phone and have it immediately affect how it is
                    displayed in the menu. This site was built with HTML, CSS, and
                    Vanilla Javascript as well as an API for Google Sheets. I used
                    a real menu and information from a restaurant I like in
                    Lisbon.
                  </p>
                </div>
        `;
      break;
    case "port-masha":
      codingProjectDisplay.innerHTML = `
        <div class="project-display-header">
                  <div
                    class="project-thumbnail-container ptcTop"
                    id="port-masha"
                  ></div>
                  <div class="project-thumbnail-container ptcBottom"></div>
  
                  <div class="project-title">
                    <h2>Masha!</h2>
  
                    <div class="made-with-div">
                      <h4>Made with...</h4>
                      <br />
                      <div class="icons-for-grid">
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>React</title>
                            <path
                              d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                            />
                          </svg>
                        </div>
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>CSS3</title>
                            <path
                              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                            />
                          </svg>
                        </div>
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Framer</title>
                            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="porfolio-link-container">
                      <button class="link" id="mashagithub">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          />
                        </svg>
                        Code
                      </button>
                      <button class="link" id="mashanetlify">
                        <svg
                          id="mashanetlify"
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Netlify</title>
                          <path
                            d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"
                          />
                        </svg>
                        Live
                      </button>
                    </div>
                  </div>
                </div>
                <div class="port-blurb">
                  <p>
                    This site was made for Masha Kiseleva, a young, motivated, and
                    aspiring model who lives in Lisbon, Portugal and London, UK.
                    As this site is meant to serve not only as part of my
                    portfolio, but also as a starting point and first draft of her
                    professional modeling website, it was created with a focus on
                    aesthetic. It was coded from scratch in React with CSS and
                    also incorporats Framer's Motion api to help give the site's
                    introduction a more eye catching entrance.
                  </p>
                </div>
        
        `;
      break;

    case "m--hi":
      pullFocus = document.querySelector("#sc__hello");
      pullFocus.classList.remove("blur");
      pullFocus.classList.add("front__and-center");
      pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
      pullFocus.childNodes.forEach((child) => {
        if (child.tagName && child.tagName === "DIV") {
          child.classList.add("hit");
        }
      });
      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");
      waver();
      break;

    case "m--marketing":
      // if (!sensingDrag) {
      //   launchDragListener();
      // }
      // sensingDrag = true;
      pullFocus = document.querySelector("#sc__marketing");
      pullFocus.classList.remove("blur");
      pullFocus.classList.add("front__and-center");
      pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
      pullFocus.childNodes.forEach((child) => {
        if (child.tagName && child.tagName === "DIV") {
          child.classList.add("hit");
        }
      });
      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");
      waver();
      break;

    case "m--web":
      pullFocus = document.querySelector("#sc__websites");
      pullFocus.classList.remove("blur");
      pullFocus.classList.add("front__and-center");
      pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
      pullFocus.childNodes.forEach((child) => {
        if (child.tagName && child.tagName === "DIV") {
          child.classList.add("hit");
        }
      });
      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");
      waver();
      break;

    case "m--video":
      pullFocus = document.querySelector("#sc__video");
      pullFocus.classList.remove("blur");
      pullFocus.classList.add("front__and-center");
      pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
      pullFocus.childNodes.forEach((child) => {
        if (child.tagName && child.tagName === "DIV") {
          child.classList.add("hit");
        }
      });
      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");
      waver();
      break;
    case "m--nerd":
      pullFocus = document.querySelector("#sc__nerd");
      pullFocus.classList.remove("blur");
      pullFocus.classList.add("front__and-center");
      pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
      pullFocus.childNodes.forEach((child) => {
        if (child.tagName && child.tagName === "DIV") {
          child.classList.add("hit");
        }
      });

      const liTags = document.getElementsByTagName("li");
      const liTagList = [...liTags];
      const headers = Array.from(document.querySelectorAll(".shrunk"));

      setTimeout(() => {
        liTagList.forEach((list) => {
          list.classList.remove("list-fixer");
        });
      }, 10);

      setTimeout(() => {
        document.querySelectorAll(".transition--cover").forEach((transComp) => {
          transComp.classList.remove("transition--cover");
        });
      }, 250);

      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");
      waver();
      break;
    case "m--reference":
      pullFocus = document.querySelector("#sc__reference");
      pullFocus.classList.remove("blur");
      pullFocus.classList.add("front__and-center");
      pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
      pullFocus.childNodes.forEach((child) => {
        if (child.tagName && child.tagName === "DIV") {
          child.classList.add("hit");
        }
      });
      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");
      waver();
      break;

    case "m--contact":
      pullFocus = document.querySelector("#sc__contact");
      pullFocus.classList.remove("blur");
      pullFocus.classList.add("front__and-center");
      pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
      pullFocus.childNodes.forEach((child) => {
        if (child.tagName && child.tagName === "DIV") {
          child.classList.add("hit");
        }
      });

      setTimeout(() => {
        document.querySelectorAll(".transition--cover").forEach((transComp) => {
          transComp.classList.remove("transition--cover");
        });
      }, 250);
      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");
      waver();
      break;

    case "cta":
      pullFocus = document.querySelector("#sc__contact");
      pullFocus.classList.remove("blur");
      pullFocus.classList.add("front__and-center");
      pullFocus.scrollTo({ top: 0, left: 0, behavior: "instant" });
      pullFocus.childNodes.forEach((child) => {
        if (child.tagName && child.tagName === "DIV") {
          child.classList.add("hit");
        }
      });

      setTimeout(() => {
        document.querySelectorAll(".transition--cover").forEach((transComp) => {
          transComp.classList.remove("transition--cover");
        });
      }, 250);
      document.getElementById("mobileToggle").classList.toggle("toggle");
      document.querySelector(".homeNavShell").classList.toggle("toggle");
      document.querySelector(".sky").classList.toggle("toggle");
      waver();
      break;
  }

  if (e.target.classList.contains("marketing__mobileCard")) {
    console.log("should pull up swiper??");
  }
};

export { nuClicker };
