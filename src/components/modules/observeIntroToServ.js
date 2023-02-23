const imgOptions = {};

const observeIntroToServices = new IntersectionObserver(
  (entries, observeIntroToServices) => {
    entries.forEach((entry) => {
      console.log(entry.target.classlist);
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        console.log(entry.target);
        observeIntroToServices.unobserve(entry.target);
      }
    });
  },
  imgOptions
);

export { observeIntroToServices };
