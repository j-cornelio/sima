export function sticky() {
    // Sticky Header
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".main_h");

      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    // Mobile Navigation toggle
    document.querySelector(".mobile-toggle").addEventListener("click", function () {
      const header = document.querySelector(".main_h");
      header.classList.toggle("open-nav");
    });

    // Close menu when link is clicked
    document.querySelectorAll(".main_h li a").forEach(link => {
      link.addEventListener("click", function () {
        const header = document.querySelector(".main_h");
        const navigation = document.querySelector(".navigation");

        if (header.classList.contains("open-nav")) {
          if (navigation) navigation.classList.remove("open-nav");
          header.classList.remove("open-nav");
        }
      });
    });

    // Smooth scroll navigation
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", function (event) {
        const id = this.getAttribute("href");
        const targetElement = document.querySelector(id);

        if (!targetElement) return;

        const offset = 70;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        event.preventDefault();
      });
    });
}
