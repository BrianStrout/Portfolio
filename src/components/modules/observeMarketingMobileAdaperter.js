// import { cardSwiper } from "./marketingCardsSwiper";

// const MarketinqgDiv = document.getElementById("sc__marketing");

const imgOptions = {
  threshold: 0.9,
};

function isMobile() {
  return window.innerWidth <= 768; // Adjust breakpoint as needed
}

const observeMarketingAndAdjust = new IntersectionObserver(
  (entries, observeMarketingAndAdjust) => {
    entries.forEach((entry) => {
      console.log(entry.target.classlist);
      // if we're looking at the marketing page
      if (entry.isIntersecting) {
        console.log("observing marketing page, about to check size");

        // and if we're in mobile
        if (isMobile()) {
          console.log("sized as mobile running cardswiper");

          // we want to launch a listener that allows drag and recycling
          cardSwiper();
        } else {
          console.log("User is on a desktop");
        }

        return;
      } else if (!entry.isIntersecting) {
        return;
      }
    });
  },
  imgOptions
);

// export { observeMarketingAndAdjust };
