document.addEventListener("DOMContentLoaded", function () {
  const player = document.getElementById("bunny-player-frame");
  const buttons = document.querySelectorAll(".class-select");
  const title = document.getElementById("selected-class-title");
  const details = document.querySelectorAll(".class-details");

  if (!player || !buttons.length) return;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const videoId = button.dataset.video;
      const classId = button.dataset.class;

      const videoUrl =
        "https://player.mediadelivery.net/embed/809896/" +
        videoId +
        "?autoplay=true&loop=false&muted=true&preload=true&responsive=true";

      // Change the source of the existing iframe.
      player.src = videoUrl;

      // Update selected class in the left pane.
      buttons.forEach(function (item) {
        item.classList.remove("is-active");
      });
      button.classList.add("is-active");

      // Show the corresponding class details.
      details.forEach(function (section) {
        section.hidden = section.id !== classId;
      });

      title.textContent = button.querySelector("small")
        ? button.childNodes[0].textContent.trim()
        : button.textContent.trim();
    });
  });
});
