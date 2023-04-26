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
const homeMonitor = document.getElementById("homeMonitor");

const mob_fl_arrow = document.getElementById("mob_fl_arrow");

// const init = () => {
//   emailjs.init("oYymItkIoREaVvBlM");
// };

const mobileMenuActive = false;

const clicker = (e) => {
  console.log(e.target.id);
  // console.log(string1);
  switch (e.target.id) {
    case "m--mobile":
      if (mobileMenuActive) {
        console.log("mobile menu");
      }

      break;
    case "m--hi":
      homeMonitor.innerHTML = `
      <div class="hm--title">
      <h1 class="words-header">Time To Up Your Web Presence?</h1>
    </div>
    <div class="hm--display">
      <h3 class="handy under">
        <i>
          Unsure of how to make your mark on the internet? Let's talk
          about...
        </i>
      </h3>

      <ol style="margin-top: 10px; margin-left: 52px; list-style: circle">
        <h2>Websites!</h2>
        <li>
          Designing and building for your unique and engaging space on the
          internet
        </li>
        <li>
          Managing your website content keeping your online presence
          current and crisp.
        </li>

        <li>Consulting on improvements including SEO and bounce rate</li>

        <li>
          Wix, SquareSpace, and WordPress customization & content
          management
        </li>
        <h2>Multimedia</h2>
        <li>Video Editing</li>
        <li>Motion Graphics</li>
        <li>Photo Animation</li>
        <h2>Marketing Assistance</h2>
        <li>Email Campaigns</li>
        <li>Asset Design</li>
        <li>Social Media</li>
        <!-- <li></li> -->
      </ol>
      <p id="words-para" class="h ind">
        Whether you are an individual, business, or organization, I would
        love to connect about freelance and contract work
        <br />
        <!-- <span class="cta"></span> -->
      </p>
      <div class="cta">Let's Connect!</div>
    </div>
      
      `;
      break;
    case "m--web":
      homeMonitor.innerHTML = `
      <div id="m--balloon" class="balloon">
      <!-- sad-child -->
      <div id="m--hi" class="balloon-ball back"></div>
      <div class="balloon-string"></div>
    </div>
    <div class="hm--title">
      <h1 class="words-header">Websites!</h1>
    </div>
    <div class="hm--display">
      <div class="web--ex-container">
        <ul id="web--ex-list">
          <li class="grid2"></li>

          <li class="grid2">
            <div class="linkOutTo" id="winter"></div>
            <div>
              <h2 class="words-header">
                Winterboy - Motion Based Artist
              </h2>
              <p class="h">
                Working with Winterboy Art I designed a way to use his art
                to capture visitor's attention with a landing page that
                has animated elements made his paintings to make a truly
                personalized touch.
              </p>
            </div>
          </li>

          <li class="grid2">
            <div class="linkOutTo" id="mookies"></div>
            <div>
              <h2 class="words-header">
                Mookies - Introduce your shop playfully
              </h2>
              <p class="h">
                We wanted to create a welcoming vibe for Mookies Cafe. I
                did that by having a playful intro and tucking subtle
                details about the site to let it keep that small town
                vibe.
              </p>
            </div>
          </li>
          <li class="grid2">
            <div class="linkOutTo" id="masha"></div>
            <div>
              <h2 class="words-header">Masha - Proper Introductions</h2>
              <p class="h">
                I wanted to create a site to bring heads to a stop with
                elegant animation intros to a this model's portfolio site.
              </p>
            </div>
          </li>
          <li class="grid2">
            <div class="linkOutTo" id="fugi"></div>
            <div>
              <h2 class="words-header">
                Restaurant - Spreed Sheet Mobile Menu
              </h2>
              <p class="h">
                Does your restaurant, cafe, or bar want a web based menu
                system you can update on a google spreadsheet from your
                phone? This is what it could look like.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
      
      
      
      
      
      
      
      
      `;
      break;
    case "m--video":
      homeMonitor.innerHTML = "video";
      break;
    case "m--marketing":
      homeMonitor.innerHTML = "marketing";
      break;
    case "m--nerd":
      homeMonitor.innerHTML = "nerd";
      break;
    case "m--ref":
      homeMonitor.innerHTML = "reference";
      break;
    case "m--contact":
      homeMonitor.innerHTML = "contact";
      break;

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
    
    <div class="circle">
      <div id="mob_fl_arrow" class= "arrowdown"></div></div>
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
    <div class="linkOutTo" id="rotary"></div>
    <div>
      <h2 class="words-header">Camp Promotional Video</h2>
      <p class="handy">
        Promotional video shot and edited by Strout.Co with motion graphics and engaging transitions for an energetic video edit.
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
    <li class="grid2">
    <div class="linkOutTo" id="ghost"></div>
    <div>
      <h2 class="words-header">Tattoo Promotional Video</h2>
      <p class="handy">
      Promotional video shot and edited by Strout.Co with motion graphics and engaging transitions for an energetic video edit.
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
    case "rotary":
      window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs", "_blank");
      break;
    case "ghost":
      window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs", "_blank");
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

export { clicker };

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
