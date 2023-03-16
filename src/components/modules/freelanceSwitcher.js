// import emailjs;

const balloon1 = document.getElementById("bab1");
const string1 = balloon1.querySelector(".balloon-string");
const balloon2 = document.getElementById("bab2");
const string2 = balloon2.querySelector(".balloon-string");
const balloon3 = document.getElementById("bab3");
const string3 = balloon3.querySelector(".balloon-string");
const words = document.getElementById("pitcherWords");
const wordHeader = document.getElementById("words-header");
const wordPara = document.getElementById("words-para");

const mob_fl_arrow = document.getElementById("mob_fl_arrow");

// const init = () => {
//   emailjs.init("oYymItkIoREaVvBlM");
// };

const freelanceClicker = (e) => {
  console.log(e.target.id);
  // console.log(string1);
  switch (e.target.id) {
    case "ball1":
      words.innerHTML = `
      <div class="freelance-container">
      <h1 class="words-header">Time To Up Your Web Presence?</h1>
      <h3 class="handy under">
        <i>
          If you're unsure of how to make your mark on the internet,
          or improve your old one, it's time we talk about...
        </i>
      </h3>

      <ol style="margin-left: 52px; list-style: circle">
        <li>Designing/building your custom site</li>
        <li>
          Updating/maintaining your website, Wix, SquareSpace, or
          WordPress
        </li>
        <li>Consulting on improvements</li>
        <li>Photo & video content editing</li>
      </ol>
      <p id="words-para" class="handy ind">
        I take great joy in helping individuals, businesses, and
        small organizations evolve how they interact with the web on
        a budget that is within their means. Whether it's regarding
        building a site bound to catch an eye, increasing your
        engagement and lowering your bounce rate; helping with
        management and keeping your online presence current and
        crisp, or helping with your video projects, I look forward
        to the opportunity to chat and start a lasting business
        relationship.
        <br />
      </p>
    </div>
    `;
      // console.log(balloon1.firstElementChild.classList);
      balloon1.firstElementChild.classList.add("popped");
      string1.classList.add("air");
      setTimeout(() => {
        balloon1.classList.add("air");
      }, 500);

      setTimeout(() => {
        balloon1.classList.remove("air");
        string1.classList.remove("air");
        balloon1.firstElementChild.classList.remove("popped");
      }, 1300);

      break;
    case "ball2":
      words.innerHTML = ` <div class="freelance-container"><h1 id="words-header">Examples</h1>
      <div id="mob_fl_arrow" class= "arrowdown"></div>
    <p id="handy">
    <ul id="fl_ex_list">
    <li class="grid2">
      <div class="linkOutTo" id="fugi"></div>
      <div>
        <h2 class="words-header">Spreed Sheet Mobile Menu</h2>
        <p class="handy">
          Does your restaurant, cafe, or bar want a web based menu system you can
          update on a google spreadsheet from your phone? This is what it could
          look like. :)
        </p>
      </div>
    </li>
  
    <li class="grid2">
      <div class="linkOutTo" id="winter"></div>
      <div>
        <h2 class="words-header">Motion Based Landing Page</h2>
        <p class="handy">
          Capture your audiences attention with a landing page that has animated
          elements made from your own art or photos
        </p>
      </div>
    </li>
    <li class="grid2">
      <div class="linkOutTo" id="mookies"></div>
      <div>
        <h2 class="words-header">Playfully introduce your shop</h2>
        <p class="handy">
          Want to set a welcoming vibe, let's set that up with giving your page an
          actual fun intro and simple style
        </p>
      </div>
    </li>
    <li class="grid2">
      <div class="linkOutTo" id="masha"></div>
      <div>
        <h2 class="words-header">Proper Introductions</h2>
        <p class="handy">
          Bring heads to a stop with elegant animation intros to display your
          fashion or personal modeling
        </p>
      </div>
    </li>
  </ul>
    </p></div>`;
      balloon2.firstElementChild.classList.add("popped");
      string2.classList.add("air");
      setTimeout(() => {
        balloon2.classList.add("air");
      }, 500);

      setTimeout(() => {
        balloon2.classList.remove("air");
        string2.classList.remove("air");
        balloon2.firstElementChild.classList.remove("popped");
      }, 1300);
      break;
    case "ball3":
      words.innerHTML = `
      <div class="freelance-container">
      <h1 id="words-header" class="words-header">Reference</h1>
      <p id="words-para" class="handy">
      Need to toss me some bucks?
      </p>
      <div class="payboxes">
      <div id="paypal" class="paybox paypal"></div>
      <div id="venmo" class="paybox venmo"></div>
      </div>
      <p id="words-para" class="handy">
      Need to get in touch?
      </p>
      <form id="myForm">
      <!-- name -->
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="name"
          name="name"
          class="form-control"
          id="name"
          placeholder="enter your name"
        />
      </div>

      <!-- email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="email"
          placeholder="enter your email"
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" name="message" rows="5"></textarea>
      </div>
      <button type="submit" id="submit" class="btn btn-primary">Submit</button>
    </form>
      </div>
      `;
      balloon3.firstElementChild.classList.add("popped");
      string3.classList.add("air");
      setTimeout(() => {
        balloon3.classList.add("air");
      }, 500);
      setTimeout(() => {
        balloon3.classList.remove("air");
        string3.classList.remove("air");
        balloon3.firstElementChild.classList.remove("popped");
      }, 1300);
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
    case "submit":
      e.preventDefault();
      const formSelector = document.getElementById("myForm");

      const serviceID = "service_kyqoxgr";
      const templateID = "template_36awvk9";

      // send the email here
      emailjs
        .sendForm(
          "contact_service",
          templateID,
          formSelector,
          "oYymItkIoREaVvBlM"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("SUCCESS!");
        });

      break;
    case "mob_fl_arrow":
      console.log("arrow clicked");

      let fl_ex_list = document.getElementById("fl_ex_list");
      let li_switch = fl_ex_list.firstElementChild;
      // li_switch.detach().sort();
      // fl_ex_list.append(li_switch);

      fl_ex_list.appendChild(li_switch);

      console.log(li_switch);

      // fl_ex_list.firstElementChild.remove();
      break;
  }
};

export { freelanceClicker };

{
  /* <script type="text/javascript">
      (function () {
        emailjs.init("user_UHpNJFij8MtQD1aAfs38X");
      })();
    </script>
    <script>
      // listen to the form submission
      document
        .getElementById("myForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const serviceID = "service_b4qmiqc";
          const templateID = "template_fv38whr";

          // send the email here
          emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("FAILED...", error);
            } */
}
