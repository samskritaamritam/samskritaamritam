
---
layout: page
title: Test Classroom
permalink: /test.html
---

<div class="classroom">

  <aside class="class-list">
    <h3>Classes</h3>

    <details open>
      <summary>Class 01 – Introduction</summary>
      <p>Topics covered:</p>
      <ul>
        <li>Introduction to the subject</li>
        <li>Basic concepts</li>
      </ul>
      <p><a href="#">Class notes</a></p>
      <button onclick="loadClass('class01')">Watch Class 01</button>
    </details>

    <details>
      <summary>Class 02 – Further Study</summary>
      <p>Topics covered:</p>
      <ul>
        <li>Topic one</li>
        <li>Topic two</li>
      </ul>
      <p><a href="#">Class notes</a></p>
      <button onclick="loadClass('class02')">Watch Class 02</button>
    </details>
  </aside>

  <main class="class-player">
    <h2 id="class-title">Class 01 – Introduction</h2>

    <div class="bunny-video">
      <iframe
        id="bunny-player"
        src="https://player.mediadelivery.net/embed/809896/fec31bf9-bed3-4b77-a759-469e24da614b?autoplay=false&responsive=true"
        loading="lazy"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
        allowfullscreen>
      </iframe>
    </div>
  </main>

</div>

<script>
const classes = {
  class01: {
    title: "Class 01 – Introduction",
    video: "fec31bf9-bed3-4b77-a759-469e24da614b"
  },
  class02: {
    title: "Class 02 – Further Study",
    video: ""
  }
};

function loadClass(id) {
  const selected = classes[id];

  document.getElementById("class-title").textContent = selected.title;

  if (selected.video) {
    document.getElementById("bunny-player").src =
      "https://player.mediadelivery.net/embed/809896/" +
      selected.video + "?autoplay=false&responsive=true";
  }
}
</script>
