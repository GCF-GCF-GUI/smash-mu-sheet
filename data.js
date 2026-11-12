function createEmptyMatchup(name, score = 5) {
  return {
    name,
    score,

    summary: "",
    winCondition: "",
    stagePicks: "",
    gimmicks: { forMe: [], againstMe: [] },
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

const matchupAliases = { "dark-samus": "samus" };

const data = {
  mario: createEmptyMatchup("Mario", 7),
  "donkey-kong": createEmptyMatchup("Donkey Kong", 7),
  link: createEmptyMatchup("Link", 6),
  samus: {
    ...createEmptyMatchup("Samus", 4),
    name: "Samus / Dark Samus"
  },
  yoshi: createEmptyMatchup("Yoshi", 6),
  kirby: createEmptyMatchup("Kirby", 8),
  fox: createEmptyMatchup("Fox", 6),
  pikachu: createEmptyMatchup("Pikachu", 4),
  luigi: {
    ...createEmptyMatchup("Luigi", 7),
    gimmicks: {
      forMe: [],
      againstMe: ["Everything is negative on hit. Do not try to press advantage."]
    }
  },
  ness: createEmptyMatchup("Ness", 7),
  "captain-falcon": createEmptyMatchup("Captain Falcon", 7),
  jigglypuff: {
    ...createEmptyMatchup("Jigglypuff", 8),
    summary: "Ivysaur is broken in this matchup, and Squirtle's Water Gun is broken too.",
    winCondition: "Remember: Jigglypuff is super light, so start looking for kills very early. Favor Ivysaur. Always cover Jigglypuff's approach preemptively and watch how they react. Start the match with Squirtle, charge Water Gun and use it: catching Jigglypuff's Side B sends them very far away. In disadvantage and around the ledge, use lots and lots of tether cancels with Ivysaur.",
    stagePicks: "Jigglypuff likes Smashville, but we can pick it too as long as we are not getting edgeguarded.",
    squirtle: {
      neutral: "Start the match with Squirtle: charge Water Gun and use it to catch Jigglypuff's Side B and send them very far away.",
      advantage: "Water Gun is broken in this matchup. If it catches Jigglypuff's Side B, it sends them very far away.",
      disadvantage: ""
    },
    ivysaur: {
      neutral: "Ivysaur is broken here. Always cover Jigglypuff's approach preemptively and watch how they react.",
      advantage: "",
      disadvantage: "At the ledge, use lots, lots, LOTS of tether cancels."
    }
  },
  peach: createEmptyMatchup("Peach", 6),
  daisy: createEmptyMatchup("Daisy", 6),
  bowser: {
    ...createEmptyMatchup("Bowser", 7),
    gimmicks: {
      forMe: [],
      againstMe: [
        "Almost everything is negative on hit, so Bowser spamming Up B while grounded can interrupt your combos.",
        "Watch out for Bowser's fucking dash grab: the overshoot is insane."
      ]
    },
    charizard: {
      neutral: "",
      advantage: "Bair is broken against Bowser's recovery, and Neutral B is too. Charizard is actually very strong in advantage in this matchup.",
      disadvantage: ""
    }
  },
  "ice-climbers": {
    ...createEmptyMatchup("Ice Climbers", 3),
    gimmicks: {
      forMe: [],
      againstMe: [
        "Everything is negative on hit. Do not try to press advantage.",
        "Down B is stupidly strong and beats everything, but usually only becomes broken when they alternate it with a desync or set it up while falling from above. Ivysaur's rising Fair is a good way to stop the move's setup. Use spaced Fair to break the setup before it gets going.",
        "Soft hits, low-knockback hits, reversals out of disadvantage and combo breaks reveal a lot about a player's identity. My tendency is to get frustrated. The goal is to never let that frustration take over: combo breaks, combo drops and Down B chip damage are part of the game. No matter how often they happen, do not make angry decisions just because of them."
      ]
    },
    stagePicks: "Avoid Final Destination (FD): it does not work in this matchup either. Among the remaining stages, always pick the longest available and maximize the distance from Ice Climbers. Apart from excluding FD, platform layout is secondary: prioritize as much horizontal space as possible to stay far away from them.",
    summary: "Squirtle is very volatile here: his usual combos do not work, so playing him normally does not work. Keep interactions quick and be willing to trade. Ivysaur has very strong advantage, but be careful with startup clashes and landing on top of Ice Climbers. Charizard may be one of the best all-around choices for neutral. Soft hits, low-knockback hits, reversals out of disadvantage and combo breaks reveal a lot about a player's identity. My tendency is to get frustrated, so the goal is to stay calm no matter how many combo breaks, combo drops or instances of Down B chip damage happen. Accept that these are part of the game. Never let frustration over those interactions drive the next decision.",
    winCondition: "Favor Charizard for general neutral and use Ivysaur for his strong advantage. If using Squirtle, camp and avoid close quarters; look for Water Gun cheese, especially by switching from Charizard to Squirtle for an edgeguard rather than staying in Squirtle neutral. Look for cheese with Ivysaur too, but avoid jumping on top of Ice Climbers: their Neutral B wins that interaction. Use hard callouts to build a more comfortable lead.",
    squirtle: {
      neutral: "Camp and avoid close quarters. Always play for single hits and hit and run. Usual combos do not work: keep interactions quick and look for trades rather than trying to play Squirtle normally. Dash Attack is very punishable. Squirtle's Up B out of shield is very good. When Ice Climbers jump into Side B out of shield, punish it with Water Gun.",
      advantage: "Water Gun can be very strong against Side B. It is better to play Charizard and switch to Squirtle for the Water Gun edgeguard than to rely on it while already playing Squirtle in neutral.",
      disadvantage: ""
    },
    ivysaur: {
      neutral: "Ivysaur is very strong, but Ice Climbers' Down B can interrupt his startup. Be very careful in startup clashes. Down B usually becomes broken when they alternate it with a desync or set it up while falling from above. Rising Fair is a good option to stop its startup: use spaced Fair to break their setup before it gets going. Avoid jumping on top of them: their Neutral B wins that interaction.",
      advantage: "Very, very strong advantage. Look for opportunities to cheese stocks.",
      disadvantage: "Be careful when landing on top of Ice Climbers: they can defend themselves with Down B."
    },
    charizard: {
      neutral: "Potentially one of the best Pokemon for this matchup's neutral overall. Hard callouts can help build a more comfortable lead.",
      advantage: "Switch to Squirtle when there is an opportunity to edgeguard Side B with Water Gun. Charizard's Flare Blitz almost always kills Nana, even when she is shielding.",
      disadvantage: ""
    }
  },
  sheik: createEmptyMatchup("Sheik", 6),
  zelda: {
    ...createEmptyMatchup("Zelda", 6),
    gimmicks: {
      forMe: [],
      againstMe: [
        // Frame data source: https://ultimateframedata.com/zelda
        "Zelda's Up B out of shield kills Squirtle at 60%. The first hit starts on frame 6 and is active on frames 6-7 (Ultimate Frame Data)."
      ]
    }
  },
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
  wario: {
    ...createEmptyMatchup("Wario", 7),
    ivysaur: {
      neutral: "Be careful using Side B (Razor Leaf): Wario can jump over it, mash and drift all the way toward you without thinking, then hit you with Waft and kill you.",
      advantage: "",
      disadvantage: ""
    }
  },
  snake: {
    ...createEmptyMatchup("Snake", 7),
    summary: "Avoid using Squirtle. Only partially charge Water Gun at the start, then play Ivysaur as much as possible.",
    winCondition: "Use Ivysaur the most. Only partially charge Water Gun with Squirtle at the start, then switch to Ivysaur. Gather information on Snake's attacks and air dodges after Up B to extend advantage. With Charizard, look for the grenade-in-hand up throw cheese described in the advantage notes.",
    ivysaur: {
      neutral: "",
      advantage: "It is very important to gather information on what Snake does after Up B: he may attack or choose a defensive option such as an air dodge.",
      disadvantage: ""
    },
    charizard: {
      neutral: "",
      advantage: "You can always go for cheese while holding a grenade: Charizard's up throw kills at 0%.",
      disadvantage: ""
    }
  },
  ike: createEmptyMatchup("Ike", 4),
  "pokemon-trainer": createEmptyMatchup("Pokemon Trainer", 8),
  squirtle: createEmptyMatchup("Squirtle", 8),
  ivysaur: createEmptyMatchup("Ivysaur", 8),
  charizard: createEmptyMatchup("Charizard", 8),
  "diddy-kong": {
    ...createEmptyMatchup("Diddy Kong", 6),
    winCondition: "This is a losing matchup, and that is okay. Diddy is very hard to hit, but he is light: make sure some of your hits are strong enough to make him explode. Do not overextend. Protect yourself and apply pressure so he cannot move around for free. Eventually, a callout on his movement can blow him up. No stress. Diddy's win condition is to force you to shield, because his Side B and grabs are then unreactable. Do not give him shield for free just because he is moving around you. Counter his movement with your own movement instead.",
    gimmicks: {
      forMe: ["Charizard's Neutral B at the ledge is good against Diddy when he has no double jump, or against a masher who always uses double jump as soon as possible."],
      againstMe: ["Diddy uses run back instead of spot dodge. Run back into Dash Attack and run back into Side B are simply better than spot dodge."]
    },
    squirtle: {
      neutral: "Play fortress/turtle neutral. Be very patient, stay grounded and turtle with Water Gun to avoid messy scrambles. Use F-tilt to pick up banana. Do not give Diddy shield for free just because he is moving around you. His goal is to force you to shield, then threaten unreactable Side B and grabs. Counter his movement with your own movement instead. Not all close-quarters characters have the same range: Diddy's Nair is huge. In aerial scrambles, you will probably whiff a move while he mashes Nair and hits you, which is very frustrating. If you are underneath him, use Up B: that is the answer in this situation. Be preemptive, or, if you are grounded, aim your Up B carefully.",
      advantage: "",
      disadvantage: ""
    }
  },
  lucas: {
    ...createEmptyMatchup("Lucas", 2),
    winCondition: "Small mistakes cost a huge amount in this matchup. Lucas is hard to hit and gets reversals very easily. Avoid small mistakes whenever possible. I have to avoid small mistakes.",
    gimmicks: {
      forMe: [],
      againstMe: ["Do not try to hit him. It feels like Lucas has no hurtbox: trying to hit him is not worth it. Do not force it."]
    }
  },
  sonic: {
    ...createEmptyMatchup("Sonic", 3),
    gimmicks: {
      forMe: ["Spam spot dodge to mess with Sonic's Neutral B."],
      againstMe: []
    },
    squirtle: {
      neutral: "Drift-back aerials are always the answer to Sonic's Side B or Down B, especially when you have the lead. Always drift back and time the aerial as close to the ground as possible. Always do this out of a full hop too.",
      advantage: "",
      disadvantage: ""
    }
  },
  "king-dedede": createEmptyMatchup("King Dedede", 6),
  olimar: createEmptyMatchup("Olimar", 5),
  lucario: createEmptyMatchup("Lucario", 6),

  rob: {
  ...createEmptyMatchup("ROB", 2),

  summary: "Hard Matchup, but not unwinnable. Avoid losing neutral while horizontal, but don't stress when you're hit. Remember, you need to play like a 'Luigi' that is turtling. You must slowly approach, and when you do, extend advantage as far as you can. Use the best offstage and the best ledgetraps. Play the Down Tilt minigame: whenever ROB mashes Down Tilt, always ask yourself what his rhythm is and which option he chooses afterward. Use that information about the human player to adapt and counter his habits; otherwise, Down Tilt will run you over.",
  gimmicks: {
    forMe: [],
    againstMe: [
      "Down Tilt minigame: when ROB mashes Down Tilt, always ask yourself: what is his rhythm, and what option does he choose afterward? Use that information about the human player to play against his habits. Otherwise, Down Tilt will run you over.",
      "If Gyro is offstage, preemptive Squirtle Up B (Waterfall) will not work."
    ]
  },
  winCondition: "Favor Squirtle for patient neutral: approach slowly, frustrate ROB and punish overextensions. Learn his Nair timing and turn each opening into extended advantage and offstage pressure. Use Ivysaur to keep advantage going and look for kills; use Charizard to keep ROB at the ledge with Flamethrower and bait his escape options to close stocks. Keep Charizard's neutral to short, safe bursts rather than extended projectile exchanges.",

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
  "rosalina-and-luma": {
    ...createEmptyMatchup("Rosalina and Luma", 4),
    gimmicks: {
      forMe: ["Ivysaur's Razor Leaf is very good for disrupting Rosalina and Luma's game plan and killing Luma."],
      againstMe: []
    }
  },
  "little-mac": createEmptyMatchup("Little Mac", 4),
  greninja: createEmptyMatchup("Greninja", 5),
  mii: createEmptyMatchup("Mii Fighter", 3),
  palutena: createEmptyMatchup("Palutena", 6),
  "pac-man": createEmptyMatchup("Pac-Man", 4),
  robin: createEmptyMatchup("Robin", 6),
  shulk: createEmptyMatchup("Shulk", 4),
  "bowser-jr": createEmptyMatchup("Bowser Jr", 7),
  "duck-hunt": createEmptyMatchup("Duck Hunt", 7),
  ryu: {
    ...createEmptyMatchup("Ryu", 4),
    summary: "These characters kill off Down Tilt, and Down Tilt is safe on shield. Be very careful with shield usage: my habit of running in and shielding gives me absolutely nothing. I have to defend preemptively against run-up Down Tilt. Always ask myself: how do I hit him, or when will he use run-up Down Tilt so I can punish safely? This must always be the question in my head. Always."
  },
  ken: {
    ...createEmptyMatchup("Ken", 4),
    summary: "These characters kill off Down Tilt, and Down Tilt is safe on shield. Be very careful with shield usage: my habit of running in and shielding gives me absolutely nothing. I have to defend preemptively against run-up Down Tilt. Always ask myself: how do I hit him, or when will he use run-up Down Tilt so I can punish safely? This must always be the question in my head. Always. Ken will always hold forward and overshoot everything. Protect yourself against the overshoot.",
    squirtle: {
      neutral: "",
      advantage: "Use multi-hit moves. Watch out for Focus spam: remember that only multi-hits break through Focus.",
      disadvantage: ""
    },
    ivysaur: {
      neutral: "",
      advantage: "Use multi-hit moves. Watch out for Focus spam: remember that only multi-hits break through Focus.",
      disadvantage: ""
    },
    charizard: {
      neutral: "",
      advantage: "Watch out for Focus spam: remember that only multi-hits break through Focus. Use Flame Breath for its multiple hits.",
      disadvantage: ""
    }
  },
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
  joker: {
    ...createEmptyMatchup("Joker", 4),
    winCondition: "Two-framing Joker's recovery with Arsene is one of your win conditions. Pay close attention and keep asking yourself: how is he avoiding my two-frames? Observe his choices and find the answer. Joker is very hard to hit, so it is also essential to identify how he avoids your attacks: dash back, jump, full hop, double jump, or something else. Watch what he actually does and work out how to catch it.",
    gimmicks: {
      forMe: [],
      againstMe: ["Joker can just spam double jump in disadvantage for free. Trying to hit him is very risky: his hurtbox seems to disappear and his jump is high. Expect repeated jumps as his escape option: jump, jump, jump, jump."]
    }
  },
  hero: createEmptyMatchup("Hero", 6),
  "banjo-kazooie": createEmptyMatchup("Banjo Kazooie", 7),
  terry: {
    ...createEmptyMatchup("Terry", 6),
    winCondition: "This is a losing matchup, not a winning one. Terry has better neutral and better advantage, but he also explodes when you get your own advantage going. Ivysaur can kill him very early, especially on small stages: go for that win condition whenever possible. Make your openings explosive enough to keep up, then play safe. Blow him up and play safe.",
    summary: "The goal of the game is to kill your opponent and not get killed. Terry is an animal. All he does is jump on top of you, and when he is in trouble, he presses as many buttons as possible. It will work. These players are not rewarded for skill. What do you need to do? Humiliate these people. Play like you hate him, safely, as if he were sick and you were in quarantine. Protect yourself and always attack the space he is moving into, because he is going to mash. He will always mash. These characters kill off Down Tilt, and Down Tilt is safe on shield. Be very careful with shield usage: my habit of running in and shielding gives me absolutely nothing. I have to defend preemptively against run-up Down Tilt. Always ask myself: how do I hit him, or when will he use run-up Down Tilt so I can punish safely? This must always be the question in my head. Always.",
    gimmicks: {
      forMe: ["When Terry has GO active, you can mash Down B (Pokemon Change) to escape his combos and confirms."],
      againstMe: [
        "When Terry mashes Down Tilt on a platform, do not try to challenge him: you can die for it.",
        "Terry's Down Air can kill you during a ledgetrap if you jump from the ledge.",
        "Everything is negative on hit. Do not try to press advantage."
      ]
    },
    squirtle: {
      neutral: "Once you have landed a few combos, do not keep playing Squirtle neutral: switch early to Ivysaur or Charizard to improve survivability. If Terry is already around 80% or at edgeguard percents, Squirtle has done his job. Squirtle dies too early to random hits.",
      advantage: "",
      disadvantage: ""
    },
    ivysaur: {
      neutral: "Ivysaur's pivot grab is extremely strong because Terry extends his hurtbox a lot. It is very, very good for catching him mashing in place or mashing aerials.",
      advantage: "Extend advantage as far as possible. Make every opening count and get as much out of it as you can.",
      disadvantage: ""
    },
    charizard: {
      neutral: "",
      advantage: "Extend advantage as far as possible. Make every opening count and get as much out of it as you can.",
      disadvantage: ""
    }
  },
  byleth: createEmptyMatchup("Byleth", 6),
  "min-min": {
    ...createEmptyMatchup("Min Min", 5),
    summary: "Always, always, ALWAYS pay close attention to Ramram's hitbox, including its vertical reach.",
    winCondition: "Always, always avoid Ivysaur in neutral and disadvantage. Favor Squirtle in those situations and look to win through his offstage pressure.",
    squirtle: {
      neutral: "",
      advantage: "The question to win is: how does Min Min avoid Squirtle's Fair/Bair offstage? If the answer is 'early jump and cover yourself with an arm', Water Gun beats that hard. Since she needs to cover herself preemptively to return to the stage, fake going offstage for a Fair to bait the preemptive arm, then punish it with Water Gun.",
      disadvantage: ""
    }
  },
  steve: {
    ...createEmptyMatchup("Steve", 6),
    gimmicks: {
      forMe: [],
      againstMe: [
        "After an offstage combo, Steve can overextend with Minecart or blocks to get more double jumps, and even use Elytra to gimp you. Be especially careful when you are behind in stocks: he can use this to go for a suicide kill.",
        "This character is Mickey Mouse and can kill whenever he wants. If you are above 70%, be very careful with roll-in spam."
      ]
    }
  },
  sephiroth: createEmptyMatchup("Sephiroth", 7),
  "pyra-mythra": createEmptyMatchup("Pyra Mythra", 5),
  kazuya: createEmptyMatchup("Kazuya", 2)
};

for (const [alias, key] of Object.entries(matchupAliases)) {
  data[alias] = data[key];
}
