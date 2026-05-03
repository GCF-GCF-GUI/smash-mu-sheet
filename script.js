function getColorFromScore(score) {
  score = Math.max(1, Math.min(10, score));
  const normalized = (score - 1) / 9;
  const hue = normalized * 120;

  return `hsl(${hue}, 100%, 50%)`;
}

const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  const key = character.dataset.character;
  const entry = data[key];

  if (entry && entry.score) {
    const score = entry.score;
    const color = getColorFromScore(score);
    const img = character.querySelector("img");

    const thickness = 2 + ((10 - score) / 10) * 4;
    const glow = (10 - score) * 2;
    const brightness = 0.8 + (score / 10) * 0.4;

    img.style.outline = `${thickness}px solid ${color}`;
    img.style.boxShadow = `0 0 ${glow}px ${color}`;
    img.style.filter = `brightness(${brightness})`;

    if (score <= 3) {
      img.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    }
  }

  character.addEventListener("click", () => {
    window.location.href = `matchup.html?char=${key}`;
  });
});