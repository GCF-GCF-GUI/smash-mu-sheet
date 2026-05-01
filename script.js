const notes = {
  mario: "Write your Mario matchup notes here.",
  "donkey-kong": "Write your Donkey Kong matchup notes here.",
  link: "Write your Link matchup notes here.",
  samus: "Write your Samus matchup notes here.",
  "dark-samus": "Write your Dark Samus matchup notes here.",
  yoshi: "Write your Yoshi matchup notes here.",
  kirby: "Write your Kirby matchup notes here.",
  fox: "Write your Fox matchup notes here.",
  pikachu: "Write your Pikachu matchup notes here.",
  luigi: "Write your Luigi matchup notes here.",
  ness: "Write your Ness matchup notes here.",
  "captain-falcon": "Write your Captain Falcon matchup notes here.",
  jigglypuff: "Write your Jigglypuff matchup notes here.",
  peach: "Write your Peach matchup notes here.",
  daisy: "Write your Daisy matchup notes here.",
  bowser: "Write your Bowser matchup notes here.",
  "ice-climbers": "Write your Ice Climbers matchup notes here.",
  sheik: "Write your Sheik matchup notes here.",
  zelda: "Write your Zelda matchup notes here.",
  "dr-mario": "Write your Dr. Mario matchup notes here.",
  pichu: "Write your Pichu matchup notes here.",
  falco: "Write your Falco matchup notes here.",
  marth: "Write your Marth matchup notes here.",
  lucina: "Write your Lucina matchup notes here.",
  "young-link": "Write your Young Link matchup notes here.",
  ganondorf: "Write your Ganondorf matchup notes here.",
  mewtwo: "Write your Mewtwo matchup notes here.",
  roy: "Write your Roy matchup notes here.",
  chrom: "Write your Chrom matchup notes here.",
  "mr-game-and-watch": "Write your Mr. Game & Watch matchup notes here.",
  "meta-knight": "Write your Meta Knight matchup notes here.",
  pit: "Write your Pit matchup notes here.",
  "dark-pit": "Write your Dark Pit matchup notes here.",
  "zero-suit-samus": "Write your Zero Suit Samus matchup notes here.",
  wario: "Write your Wario matchup notes here.",
  snake: "Write your Snake matchup notes here.",
  ike: "Write your Ike matchup notes here.",
  "pokemon-trainer": "Write your Pokémon Trainer matchup notes here.",
  squirtle: "Write your Squirtle matchup notes here.",
  ivysaur: "Write your Ivysaur matchup notes here.",
  charizard: "Write your Charizard matchup notes here.",
  "diddy-kong": "Write your Diddy Kong matchup notes here.",
  lucas: "Write your Lucas matchup notes here.",
  sonic: "Write your Sonic matchup notes here.",
  "king-dedede": "Write your King Dedede matchup notes here.",
  olimar: "Write your Olimar matchup notes here.",
  lucario: "Write your Lucario matchup notes here.",
  rob: "Write your R.O.B. matchup notes here.",
  "toon-link": "Write your Toon Link matchup notes here.",
  wolf: "Write your Wolf matchup notes here.",
  villager: "Write your Villager matchup notes here.",
  "mega-man": "Write your Mega Man matchup notes here.",
  "wii-fit-trainer": "Write your Wii Fit Trainer matchup notes here.",
  "rosalina-and-luma": "Write your Rosalina & Luma matchup notes here.",
  "little-mac": "Write your Little Mac matchup notes here.",
  greninja: "Write your Greninja matchup notes here.",
  mii: "Write your Mii Fighter matchup notes here.",
  palutena: "Write your Palutena matchup notes here.",
  "pac-man": "Write your Pac-Man matchup notes here.",
  robin: "Write your Robin matchup notes here.",
  shulk: "Write your Shulk matchup notes here.",
  "bowser-jr": "Write your Bowser Jr. matchup notes here.",
  "duck-hunt": "Write your Duck Hunt matchup notes here.",
  ryu: "Write your Ryu matchup notes here.",
  ken: "Write your Ken matchup notes here.",
  cloud: "Write your Cloud matchup notes here.",
  corrin: "Write your Corrin matchup notes here.",
  bayonetta: "Write your Bayonetta matchup notes here.",
  inkling: "Write your Inkling matchup notes here.",
  ridley: "Write your Ridley matchup notes here.",
  simon: "Write your Simon matchup notes here.",
  richter: "Write your Richter matchup notes here.",
  "king-k-rool": "Write your King K. Rool matchup notes here.",
  isabelle: "Write your Isabelle matchup notes here.",
  incineroar: "Write your Incineroar matchup notes here.",
  "piranha-plant": "Write your Piranha Plant matchup notes here.",
  joker: "Write your Joker matchup notes here.",
  hero: "Write your Hero matchup notes here.",
  "banjo-kazooie": "Write your Banjo & Kazooie matchup notes here.",
  terry: "Write your Terry matchup notes here.",
  byleth: "Write your Byleth matchup notes here.",
  "min-min": "Write your Min Min matchup notes here.",
  steve: "Write your Steve matchup notes here.",
  sephiroth: "Write your Sephiroth matchup notes here.",
  "pyra-mythra": "Write your Pyra & Mythra matchup notes here.",
  kazuya: "Write your Kazuya matchup notes here.",
};

const confidence = {
  mario: "even",
  "donkey-kong": "good",
  fox: "bad",
  sonic: "bad",
  ganondorf: "good",
};

const characters = document.querySelectorAll(".character");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const characterName = document.getElementById("character-name");
const characterNotes = document.getElementById("character-notes");

characters.forEach((character) => {
  const key = character.dataset.character;

  if (confidence[key]) {
    character.classList.add(confidence[key]);
  }

  character.addEventListener("click", () => {
    const displayName = character.querySelector("span").textContent;

    characterName.textContent = displayName;
    characterNotes.textContent = notes[key] || "No notes yet.";

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