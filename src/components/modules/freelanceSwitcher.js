const balloon1 = document.getElementById("bab1");
const balloon2 = document.getElementById("bab2");
const balloon3 = document.getElementById("bab3");
const words = document.getElementById("pitcherWords");
const wordHeader = document.getElementById("words-header");
const wordPara = document.getElementById("words-para");

const freelanceClicker = (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "ball1":
      words.innerHTML = `
      <div class="freelance-container">
      <h1 class="words-header">Time To Up Your Web Presence?</h1>
      <h3 class="handy under"><i>
    If it's time to create or rethink your web presence,  get help with keeping it updated, or gain some guidance for your path forward, it's time we talk.
    </i></h3><br>
    <p id="words-para" class="handy ind">
    I take great joy in helping individuals, businesses, and small organizations evolve how they interact with the web on a budget that is within their means. Whether it's regarding building a site bound to catch an eye, increasing your engagement and lowering your bounce rate; helping with management and keeping your online presence current and crisp, or helping with your video projects, I look forward to the opportunity to chat and start a lasting business relationship.
    <br>
    </p></div>`;
      break;
    case "ball2":
      words.innerHTML = ` <div class="freelance-container"><h1 id="words-header">Examples</h1>
    <p id="handy">
    <ul>
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
      <div class="linkOutTo" id="mookie"></div>
      <div>
        <h2 class="words-header">Playfully introduce your shop</h2>
        <p class="handy">
          Want to set a welcoming vibe, let's set that up with giving your page an
          actual fun intro and simple style
        </p>
      </div>
    </li>
    <li class="grid2">
      <div class="linkOutTo" id="Masha"></div>
      <div>
        <h2 class="words-header">Proper Introductions</h2>
        <p class="handy">
          Bring heads to a stop with elegant animation intros to display your
          fashion or personal modeling
        </p>
      </div>
    </li>
    <li class="grid2">
      <div class="linkOutTo" id="Masha"></div>
      <div>
        <h2 class="words-header">Dynamic Landing Page</h2>
        <p class="handy">
          Bring heads to a stop with elegant animation intros to display your
          fashion or personal modeling
        </p>
      </div>
    </li>
  </ul>
    </p></div>`;
      break;
    case "ball3":
      words.innerHTML = `
      <div class="freelance-container">
      <h1 id="words-header" class="words-header">Reference</h1>
      <p id="words-para" class="handy">
      Need to toss me some bucks?
      </p>
      <div class="payboxes"></div>
      <div class="paybox">https://paypal.me/BStrout</div>
      <div class="paybox">https://account.venmo.com/u/brian-strout-2</div>
      </div>
      `;
      break;
  }

  //
  //
  // General Reference
};

export { freelanceClicker };
