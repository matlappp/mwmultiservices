const video = document.getElementById('bg-video');

if (video) {
  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      const container = document.getElementById('bg-video-container');
      const fallback = video.getAttribute('poster');

      if (fallback) {
        container.style.backgroundImage = `url('${fallback}')`;
      }

      video.remove();
    });
  }
}
