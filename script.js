
/*biblioteca de p5.js me ayudo a hacer la transición de oscuridad y transicion de texto*/


const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach((section) => observer.observe(section));
