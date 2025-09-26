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
