const deck = document.getElementById("deckOfMarketingCards");
const cards = deck.querySelectorAll(".marketing__mobileCard");

let startX = 0;
let isDragging = false;
let currentCard = null;

function moveTouch(event) {
  console.log("moving");
  if (!isDragging || !currentCard) return;

  let touchX = event.touches[0].clientX;
  let moveX = touchX - startX;

  // Move the card based on swipe distance
  currentCard.style.transform = `translateX(${moveX}px) rotate(${
    moveX / 20
  }deg)`;
}

function startTouch(event) {
  console.log("touch start sensed");
  if (isDragging) return; // Prevent multiple swipes
  currentCard = deck.firstElementChild; // Always interact with the top card
  startX = event.touches[0].clientX;
  isDragging = true;
}

function endTouch(event) {
  console.log("touch end sensed");
  if (!isDragging || !currentCard) return;

  let touchX = event.changedTouches[0].clientX;
  let moveX = touchX - startX;
  let threshold = window.innerWidth * 0.3; // 30% of screen width

  if (Math.abs(moveX) > threshold) {
    // Move off-screen and rotate
    let direction = moveX > 0 ? 1 : -1;
    currentCard.style.transition = "transform 0.3s ease-out";
    currentCard.style.transform = `translateX(${direction * 100}vw) rotate(${
      direction * 20
    }deg)`;

    // After animation, move card to the back
    setTimeout(() => {
      resetCard(currentCard);
    }, 300);
  } else {
    // Reset card if swipe is too short
    currentCard.style.transition = "transform 0.2s ease-out";
    currentCard.style.transform = "translateX(0) rotate(0)";
  }

  isDragging = false;
}

function resetCard(card) {
  card.style.transition = "none"; // Remove transition to prevent animation snap
  card.style.transform = "translateX(0) rotate(0)";
  deck.appendChild(card);
}

export { moveTouch, startTouch, endTouch, deck };
