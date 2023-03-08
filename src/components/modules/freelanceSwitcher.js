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
      <h1 id="words-header">Time To Up Your Web Presence?</h1>
    <p id="words-para">
    <h3><i>
    If it's time to create or rethink your web presence,  get help with keeping it updated, or gain some guidance for your path forward, it's time we talk.
    </i></h3><br>
    I take great joy in helping individuals, businesses, and small organizations evolve how they interact with the web on a budget that is within their means. Whether it's regarding building a site bound to catch an eye, increasing your engagement and lowering your bounce rate; helping with management and keeping your online presence current and crisp, or helping with your video projects, I look forward to the opportunity to chat and start a lasting business relationship.
    <br>
    </p></div>`;
      break;
    case "ball2":
      words.innerHTML = ` <div class="freelance-container"><h1 id="words-header">Examples</h1>
    <p id="words-para">
    <ul>

    <li>
    <div class="linkOutTo" id="fugi"></div>
    <h2>Spreed Sheet Mobile Menu</h2>
    <p>Does your restaurant, cafe, or bar want a web based menu system you can update on a google spreadsheet from your phone?  This is what it could look like. :)</p>
    
  </li>
  <li>  <div class="linkOutTo" id="winter"></div>
    <h2>Motion Based Landing Page</h2>
    <p>Capture your audiences attention with a landing page that has animated elements made from your own art or photos</p>
    </li>
  <li>  <div class="linkOutTo" id="mookie"></div>
    <h2>Playfully introduce your shop</h2>
    <p>Want to set a welcoming vibe, let's set that up with giving your page an actual fun intro and simple style</p>
    </li>
  <li>  <div class="linkOutTo" id="Masha"></div>
    <h2>Proper Introductions</h2>
    <p>Bring heads to a stop with elegant animation intros to display your fashion or personal modeling</p>
    </li>
    <li>  <div class="linkOutTo" id="Masha"></div>
    <h2>Dynamic Landing Page</h2>
    <p>Bring heads to a stop with elegant animation intros to display your fashion or personal modeling</p>
    </li>
</ul>
    </p></div>`;
      break;
    case "ball3":
      words.innerHTML = `
      <div class="freelance-container">
      <h1 id="words-header">Reference</h1>
      <p id="words-para">
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
