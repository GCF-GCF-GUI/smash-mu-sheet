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
    const color = getColorFromScore(entry.score);
    const img = character.querySelector("img");

    img.style.outline = `3px solid ${color}`;
    img.style.boxShadow = `0 0 8px ${color}`;
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