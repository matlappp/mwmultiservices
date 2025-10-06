document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".container");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  containers.forEach((container, index) => {
    container.style.animationDelay = `${index * 0.5}s`;
    observer.observe(container);
  });
});

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
