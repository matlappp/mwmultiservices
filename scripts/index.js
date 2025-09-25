function animateCounts(stats, duration = 2000) {
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);

    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute("data-target"));
      const plus = stat.getAttribute("data-plus") === "true";
      const value = Math.floor(target * progress);
      stat.textContent = value + (plus ? "+" : "");
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

const statsSection = document.querySelector(".stats");
const stats = document.querySelectorAll(".stat");
let triggered = false;

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !triggered) {
    animateCounts(stats, 2000); 
    triggered = true;
  }
}, { threshold: 0.5 });

observer.observe(statsSection);

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    items.forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
      }
    });

      item.classList.toggle("active");
    });
  });
});