document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".realisation-cell");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const dropdown = cell.nextElementSibling;

      cells.forEach((other) => {
        const otherDropdown = other.nextElementSibling;
        if (other !== cell) {
          other.classList.remove("active");
          otherDropdown.style.maxHeight = null;
        }
      });

      cell.classList.toggle("active");

      if (cell.classList.contains("active")) {
        dropdown.style.maxHeight = "0px";

        requestAnimationFrame(() => {
          dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        });
      } else {
        dropdown.style.maxHeight = null;
      }
    });
  });
});