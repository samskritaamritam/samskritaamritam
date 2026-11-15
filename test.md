
---
layout: default
title: शनिवासरस्य वर्गः
subtitle: प्रातः सप्तवादने
permalink: /test.html
---

<div class="class-layout">

  <div class="class-main">

    <a id="class-01"></a>
    <h2>Class-01 (15-08-2026)</h2>

    <ul>
      <li>Topics: bhavataH nama kim, bhavatyAh nama kim, mama nama, eShaH, saH, akSharANi</li>
    </ul>

    <p>
      <button class="bunny-watch"
              type="button"
              data-bunny-video="fec31bf9-bed3-4b77-a759-469e24da614b">
        ▶ Watch class recording
      </button>
    </p>

    <div class="bunny-player-slot" hidden></div>

    <ul>
      <li><strong>PPT:</strong> <a href="#">Class presentation</a></li>
      <li><strong>Topic Videos:</strong> <a href="#">swarAH</a>, <a href="#">ka-vargaH</a></li>
    </ul>

    <hr>

    <a id="class-02"></a>
    <h2>Class-02 (22-08-2026)</h2>

    <ul>
      <li>Topics: saH, sA, tat, eShaH, eShA, etat, akSharANi</li>
    </ul>

    <p>
      <button class="bunny-watch"
              type="button"
              data-bunny-video="">
        ▶ Watch class recording
      </button>
    </p>

    <div class="bunny-player-slot" hidden>
      <p>Recording not yet available on Bunny.</p>
    </div>

  </div>

</div>

<script>
document.addEventListener("click", function(event) {
  const button = event.target.closest(".bunny-watch");
  if (!button) return;

  const slot = button.nextElementSibling;
  const videoId = button.dataset.bunnyVideo;

  // Close any other currently open player.
  document.querySelectorAll(".bunny-player-slot").forEach(function(player) {
    if (player !== slot) {
      player.hidden = true;
      player.replaceChildren();
    }
  });

  // Clicking the same button again closes its player.
  if (!slot.hidden) {
    slot.hidden = true;
    slot.replaceChildren();
    return;
  }

  if (!videoId) {
    slot.hidden = false;
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://player.mediadelivery.net/embed/809896/" +
    videoId + "?autoplay=false&responsive=true";

  iframe.loading = "lazy";
  iframe.allow =
    "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;";
  iframe.allowFullscreen = true;
  iframe.title = "Class recording";

  slot.replaceChildren(iframe);
  slot.hidden = false;
});
</script>
