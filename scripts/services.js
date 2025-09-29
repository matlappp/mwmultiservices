document.querySelectorAll('.service-main h3').forEach(h3 => {
  h3.addEventListener('click', () => {
    h3.classList.toggle('active');
  });
});
