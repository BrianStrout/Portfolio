const imgOptions = {
  threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0.00–1.00 steps
};

const observeEnterringMovieTheater = new IntersectionObserver(
  (entries, observeIntroToServices) => {
    entries.forEach((entry) => {
      console.log(entry.target.classlist);
      const ratio = entry.intersectionRatio;
      if (!entry.isIntersecting) {
        return;
      } else if (entry.isIntersecting) {
        if (ratio < 0.4 || ratio > 0.9) return;

        // Normalize to a 0–1 scale
        const progress = (ratio - 0.5) / (0.9 - 0.5);

        const leftCurtain = entry.target.querySelector("#leftCurtain");
        const rightCurtain = entry.target.querySelector("#rightCurtain");

        if (leftCurtain && rightCurtain) {
          // Animate in sync: 40% → 90%
          const offset = 40 + 50 * progress;
          leftCurtain.style.right = `${offset}%`;
          rightCurtain.style.left = `${offset}%`;
        }
      }
    });
  },
  imgOptions
  //   }
);

// const observeEnterringMovieTheater = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {

// Only animate between 40% and 90% visible
//   if (ratio < 0.4 || ratio > 0.9) return;

//   // Normalize to a 0–1 scale
//   const progress = (ratio - 0.4) / (0.9 - 0.4);

//   const leftCurtain = entry.target.querySelector("#leftCurtain");
//   const rightCurtain = entry.target.querySelector("#rightCurtain");

//   if (leftCurtain && rightCurtain) {
//     // Animate in sync: 40% → 90%
//     const offset = 40 + 50 * progress;
//     leftCurtain.style.right = `${offset}%`;
//     rightCurtain.style.left = `${offset}%`;
//   }
//     });
//   },
//   {

// );

export { observeEnterringMovieTheater };
