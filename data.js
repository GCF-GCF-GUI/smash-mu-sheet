function createEmptyMatchup(name, score = 5) {
  return {
    name,
    score,

    summary: "",
    hitboxImage: `images/hitboxes/${name.toLowerCase().replaceAll(" ", "-")}.png`,

    squirtle: { neutral: "", advantage: "", disadvantage: "" },
    ivysaur: { neutral: "", advantage: "", disadvantage: "" },
    charizard: { neutral: "", advantage: "", disadvantage: "" },

    notes: "",
    keyMoves: [],
    killConfirms: [],
    commonMistakes: [],
    vods: []
  };
}

const data = {
  mario: createEmptyMatchup("Mario", 7),
  "donkey-kong": createEmptyMatchup("Donkey Kong", 7),
  link: createEmptyMatchup("Link", 6),
  samus: createEmptyMatchup("Samus", 4),
  "dark-samus": createEmptyMatchup("Dark Samus", 4),
  yoshi: createEmptyMatchup("Yoshi", 6),
  kirby: createEmptyMatchup("Kirby", 8),
  fox: createEmptyMatchup("Fox", 6),
  pikachu: createEmptyMatchup("Pikachu", 4),
  luigi: createEmptyMatchup("Luigi", 7),
  ness: createEmptyMatchup("Ness", 7),
  "captain-falcon": createEmptyMatchup("Captain Falcon", 7),
  jigglypuff: createEmptyMatchup("Jigglypuff", 8),
  peach: createEmptyMatchup("Peach", 6),
  daisy: createEmptyMatchup("Daisy", 6),
  bowser: createEmptyMatchup("Bowser", 7),
  "ice-climbers": createEmptyMatchup("Ice Climbers", 3),
  sheik: createEmptyMatchup("Sheik", 6),
  zelda: createEmptyMatchup("Zelda", 6),
  "dr-mario": createEmptyMatchup("Dr Mario", 8),
  pichu: createEmptyMatchup("Pichu", 4),
  falco: createEmptyMatchup("Falco", 5),
  marth: createEmptyMatchup("Marth", 7),
  lucina: createEmptyMatchup("Lucina", 6),
  "young-link": createEmptyMatchup("Young Link", 4),
  ganondorf: createEmptyMatchup("Ganondorf", 8),
  mewtwo: createEmptyMatchup("Mewtwo", 4),
  roy: createEmptyMatchup("Roy", 8),
  chrom: createEmptyMatchup("Chrom", 9),
  "mr-game-and-watch": createEmptyMatchup("Mr Game and Watch", 2),
  "meta-knight": createEmptyMatchup("Meta Knight", 6),
  pit: createEmptyMatchup("Pit", 6),
  "dark-pit": createEmptyMatchup("Dark Pit", 6),
  "zero-suit-samus": createEmptyMatchup("Zero Suit Samus", 6),
  wario: createEmptyMatchup("Wario", 7),
  snake: createEmptyMatchup("Snake", 7),
  ike: createEmptyMatchup("Ike", 4),
  "pokemon-trainer": createEmptyMatchup("Pokemon Trainer", 8),
  squirtle: createEmptyMatchup("Squirtle", 8),
  ivysaur: createEmptyMatchup("Ivysaur", 8),
  charizard: createEmptyMatchup("Charizard", 8),
  "diddy-kong": createEmptyMatchup("Diddy Kong", 6),
  lucas: createEmptyMatchup("Lucas", 2),
  sonic: createEmptyMatchup("Sonic", 3),
  "king-dedede": createEmptyMatchup("King Dedede", 6),
  olimar: createEmptyMatchup("Olimar", 5),
  lucario: createEmptyMatchup("Lucario", 6),

  rob: {
  ...createEmptyMatchup("ROB", 2),

  summary: "Hard Matchup, but not unwinnable. Avoid losing neutral while horizontal, but don't stress when you're hit. Remember, you need to play like a 'Luigi' that is turtling. You must slowly approach, and when you do, extend advantage as far as you can. Use the best offstage and the best ledgetraps.",

  squirtle: {
    neutral: "Turtle mode or crazy verticality both work. Start with one and gather info. Turtle is supposed to frustrate him and catch gyros with ftilt. Crazy verticality is supposed to overwhelm OR punish hard when he decides to go into offense. Be careful cause he can go beneath you when you are vertical. Plats are important to save you.",
    advantage: "He will always Nair out of dis. Learn his timmings. The hitbox begins behind him. So if he does early nair - wait or attack front. If he does late nair - attack behind. If there is no space, fish for parry.",
    disadvantage: "It is okay, place calm. Reset to ledge. Always look at him. He will want to kill. He will overextend. Don't be blind, don't be greedy. Wait for his movements and punish overextentions."
  },

  ivysaur: {
    neutral: "Avoid playing to much neutral if he has lazer. If he doesn't, Razor Leaf can be good to force his hand.",
    advantage: "Extend, extend, extend. Kill him. Look how he avoids, save it, adapt next interaction.",
    disadvantage: "Tether cancel is your friend. Reset to ledge, be annoying on ledge. Don't be baited! NEVER neutral getup."
  },

  charizard: {
    neutral: "You can overwhelm him with your speed, suprising him. Run in jab, for example, can be annoying. And be mixed up with run in grab if he defaults to shield. But don't be too confortable. It is annoying to play. You will be poked out by projectiles. Only use your speed in bursts - safely.",
    advantage: "Don't let him leave ledge, ever. He is big, flamebreath is broken. Be aware that he can do mixups (jump out, lazer/gyro) that will beat the flames, but those can be baited when you NEED the kill. Don't cashout on the info too early.",
    disadvantage: "Flareblitz is risky to avoid ledge traps because of the projectiles - but you can call out a jump upair with it if you're drifting to the side. Don't mash UP out of disadvantage, not worth it. Play calm and use the ground speed to reset as soon as you can."
  }
},

  "toon-link": createEmptyMatchup("Toon Link", 5),
  wolf: createEmptyMatchup("Wolf", 6),
  villager: createEmptyMatchup("Villager", 5),
  "mega-man": createEmptyMatchup("Mega Man", 5),
  "wii-fit-trainer": createEmptyMatchup("Wii Fit Trainer", 5),
  "rosalina-and-luma": createEmptyMatchup("Rosalina and Luma", 4),
  "little-mac": createEmptyMatchup("Little Mac", 4),
  greninja: createEmptyMatchup("Greninja", 5),
  mii: createEmptyMatchup("Mii Fighter", 3),
  palutena: createEmptyMatchup("Palutena", 6),
  "pac-man": createEmptyMatchup("Pac-Man", 4),
  robin: createEmptyMatchup("Robin", 6),
  shulk: createEmptyMatchup("Shulk", 4),
  "bowser-jr": createEmptyMatchup("Bowser Jr", 7),
  "duck-hunt": createEmptyMatchup("Duck Hunt", 7),
  ryu: createEmptyMatchup("Ryu", 4),
  ken: createEmptyMatchup("Ken", 4),
  cloud: createEmptyMatchup("Cloud", 5),
  corrin: createEmptyMatchup("Corrin", 6),
  bayonetta: createEmptyMatchup("Bayonetta", 5),
  inkling: createEmptyMatchup("Inkling", 6),
  ridley: createEmptyMatchup("Ridley", 7),
  simon: createEmptyMatchup("Simon", 6),
  richter: createEmptyMatchup("Richter", 6),
  "king-k-rool": createEmptyMatchup("King K Rool", 7),
  isabelle: createEmptyMatchup("Isabelle", 7),
  incineroar: createEmptyMatchup("Incineroar", 7),
  "piranha-plant": createEmptyMatchup("Piranha Plant", 7),
  joker: createEmptyMatchup("Joker", 4),
  hero: createEmptyMatchup("Hero", 6),
  "banjo-kazooie": createEmptyMatchup("Banjo Kazooie", 7),
  terry: createEmptyMatchup("Terry", 6),
  byleth: createEmptyMatchup("Byleth", 6),
  "min-min": createEmptyMatchup("Min Min", 5),
  steve: createEmptyMatchup("Steve", 6),
  sephiroth: createEmptyMatchup("Sephiroth", 7),
  "pyra-mythra": createEmptyMatchup("Pyra Mythra", 5),
  kazuya: createEmptyMatchup("Kazuya", 2)
};