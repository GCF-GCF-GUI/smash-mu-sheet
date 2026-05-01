function getColorFromScore(score) {
  score = Math.max(1, Math.min(10, score));
  const normalized = (score - 1) / 9;
  const hue = normalized * 120;

  return `hsl(${hue}, 100%, 50%)`;
}

const characters = document.querySelectorAll(".character");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const characterName = document.getElementById("character-name");
const characterNotes = document.getElementById("character-notes");

characters.forEach((character) => {
  const key = character.dataset.character;
  const entry = data[key];

  if (entry && entry.score) {
    const score = entry.score;
    const color = getColorFromScore(score);
    const img = character.querySelector("img");

    // Bad matchups get thicker borders
    const thickness = 2 + ((10 - score) / 10) * 4;

    // Bad matchups get stronger glow
    const glow = (10 - score) * 2;

    // Bad matchups are darker, good matchups are lighter
    const brightness = 0.8 + (score / 10) * 0.4;

    img.style.outline = `${thickness}px solid ${color}`;
    img.style.boxShadow = `0 0 ${glow}px ${color}`;
    img.style.filter = `brightness(${brightness})`;

    // Extra red tint for very bad matchups
    if (score <= 3) {
      img.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    }
  }

  character.addEventListener("click", () => {
    const displayName = character.querySelector("span").textContent;

    characterName.textContent = displayName;
    characterNotes.textContent = entry?.notes || "No notes yet.";

    modal.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
  }
});