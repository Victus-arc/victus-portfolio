// ================================
// VIVID PORTFOLIO
// Simple interaction layer
// ================================


// Reveal elements while scrolling

const revealElements = document.querySelectorAll(
  ".section, .skill-card, .project, .quote"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach((element) => {

  element.classList.add("reveal");

  observer.observe(element);

});


// Small mouse movement effect

const heroCard = document.querySelector(".hero-card");

document.addEventListener("mousemove", (event) => {

  if (!heroCard) return;

  const x = (window.innerWidth / 2 - event.clientX) / 80;
  const y = (window.innerHeight / 2 - event.clientY) / 80;

  heroCard.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg) rotate(5deg)`;

});


// Console message

console.log(
  "VIVID PORTFOLIO // SYSTEM ONLINE"
);
