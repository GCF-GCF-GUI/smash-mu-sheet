const params = new URLSearchParams(window.location.search);
const characterKey = params.get("char");

const entry = data[characterKey];

if (!entry) {
  document.body.innerHTML = `
    <main class="matchup-page">
      <a href="index.html">← Back</a>
      <h1>Character not found</h1>
    </main>
  `;
} else {
  document.title = `${entry.name} MU Notes`;

  document.getElementById("character-name").textContent = entry.name;
  document.getElementById("summary").textContent = entry.summary;

  const hitboxImage = document.getElementById("hitbox-image");
  hitboxImage.src = entry.hitboxImage;
  hitboxImage.alt = `${entry.name} hitboxes`;

  document.getElementById("squirtle-neutral").textContent = entry.squirtle.neutral;
  document.getElementById("squirtle-advantage").textContent = entry.squirtle.advantage;
  document.getElementById("squirtle-disadvantage").textContent = entry.squirtle.disadvantage;

  document.getElementById("ivysaur-neutral").textContent = entry.ivysaur.neutral;
  document.getElementById("ivysaur-advantage").textContent = entry.ivysaur.advantage;
  document.getElementById("ivysaur-disadvantage").textContent = entry.ivysaur.disadvantage;

  document.getElementById("charizard-neutral").textContent = entry.charizard.neutral;
  document.getElementById("charizard-advantage").textContent = entry.charizard.advantage;
  document.getElementById("charizard-disadvantage").textContent = entry.charizard.disadvantage;
}