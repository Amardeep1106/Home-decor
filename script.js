<script>
  document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    const abtSection = document.querySelector(".abt");

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function animateOnScroll() {
      if (isInViewport(aboutSection)) {
        aboutSection.classList.add("animated");
      }

      if (isInViewport(abtSection)) {
        abtSection.classList.add("animated");
      }
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial trigger in case elements are already in viewport
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const lateDisElements = document.querySelectorAll(".late_dis");

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function animateOnScroll() {
      lateDisElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("animated");
        }
      });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial trigger in case elements are already in viewport
  });

</script>
