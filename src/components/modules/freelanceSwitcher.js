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
      words.innerHTML = `<h1 id="words-header">Designing & Building</h1>
    <p id="words-para">
      Looking for a fun dynamic landing page that draws in audiences
      and lowers your bounce rate/improves SEO? Looking for a
      functional way to keep Menus up to date from a spreadsheet?
      Dynamic social link page? Website Management Looking for extra
      hands to herlp keep your online presence current and crisp?
      Social Media Need help editing videos? Updating Instagram?
    </p>`;
      break;
    case "ball2":
      words.innerHTML = `<h1 id="words-header">Examples</h1>
    <p id="words-para">
    <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
</ul>
    </p>`;
      break;
    case "ball3":
      words.innerHTML = `<h1 id="words-header">Reference</h1>
    <p id="words-para">
      Need to toss me some bucks?
    </p>
    <div class="payboxes"></div>
    <div class="paybox">https://paypal.me/BStrout</div>
    <div class="paybox">https://account.venmo.com/u/brian-strout-2</div>
    
    
    `;
      break;
  }

  //
  //
  // General Reference
};

export { freelanceClicker };
