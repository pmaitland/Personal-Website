import { CardList } from '../../types/cardList'

export const home: CardList = {
  cards: [
    {
      title: 'Ahoy-hoy!',
      body: 'Welcome to my website. Check out some of the things I\'ve done by having a look around or visiting one of the links below.',
      links: {
        'github': 'https://github.com/pmaitland',
        'linkedin': 'https://www.linkedin.com/in/pmaitland/'
      },
      image: 'website.png'
    }
  ]
}

export const games: CardList = {
  description: 'Making video games is great and I would like to create more, but very few of those that I start working on ever reach an enjoyably playable state! Here are the ones that somehow did.',
  cards: [
    {
      title: 'Push Puzzle',
      body: 'Simple push-block puzzle game. Designed so that all assets (including sprites, audio, and levels themselves) can be customised without reprogramming. This was to allow artists and designers to build and reskin the game without any programming knowledge.',
      subtitles: [
        'Oct 2022 - Dec 2022', 'Unity'
      ],
      links: {
        'github': 'https://github.com/DuckSauceGames/push-puzzle'
      },
      image: 'pushPuzzle.png'
    }
  ]
}

export const gameJams: CardList = {
  description: 'I really enjoy taking part in game jams and am pleased to say I\'ve been able to attend many. These are all of the games I\'ve been a part of making at them. Try some of them out!',
  filters: [
    'GitHub Game Off', 'Global Game Jam', 'GUDEV'
  ],
  cards: [
    {
        title: 'Rubber Duck Bubble Party',
        body: 'Join the rubber ducks in their exciting bubble party! Split into teams and push the bubbles around in multiple fun gamemodes!',
        subtitles: [
          'Global Game Jam', 'Jan 2025', 'Bubble', 'Godot'
        ],
        links: {
          'github': 'https://github.com/pmaitland/GGJ2025',
          'itch.io': 'https://spooonlegs.itch.io/rubber-duck-bubble-party',
          'ggj': 'https://globalgamejam.org/games/2025/project-bubball-6'
        },
        image: 'rubberDuckBubbleParty.png'
    },
    {
      title: 'Downhill Soapbox Champion',
      body: 'Speed down the soapbox champion hill picking up cogs and avoiding obstacles.',
      subtitles: [
        'Scrapyard Jam', 'Oct 2023', 'Cobbled scrap', 'Godot'
      ],
      links: {
        'github': 'https://github.com/pmaitland/DownhillSoapboxChampion',
        'itch.io': 'https://yasmojam.itch.io/downhill-soapbox-champion'
      },
      image: 'soapbox.png'
    },
    {
      title: 'Roots and Froots',
      body: 'Descend deep into the earth in order to survive.',
      subtitles: [
        'Global Game Jam', 'Feb 2023', 'Roots', 'Unity'
      ],
      links: {
        'github': 'https://github.com/DuckSauceGames/global-game-jam-2023'
      },
      image: 'rootsAndFroots.png'
    },
    {
      title: 'God Complex',
      body: 'In God Complex you are a god-like being given the opportunity to create life. Will the choices you make help it grow and progress, or lead to its annihilation?',
      subtitles: [
        'Global Game Jam', 'Jan 2022', 'Duality', 'React'
      ],
      links: {
        'github': 'https://github.com/Yasmojam/ggj2022',
        'play it': 'https://yasmojam.github.io/ggj2022/',
        'ggj': 'https://v3.globalgamejam.org/2022/games/god-complex-5'
      },
      image: 'godComplex.png'
    },
    {
      title: 'Bee Game',
      body: 'Your bees are busy working hard to keep your hive alive, and you\'ll need to be busy keeping an eye out for intruder bees who are here to steal from you!',
      subtitles: [
        'GitHub Game Off', 'Nov 2021', 'Bug', 'Unity'
      ],
      links: {
        'github': 'https://github.com/Iain530/github-game-jam-2021'
      },
      image: 'beeGame.png'
    },
    {
      title: 'Island Dream',
      body: 'You are a survivor. Your plane has crashed and you have been lost to society! Stranded on a series of desert islands you must solve simple puzzles and build a boat to leave the islands and find your way back to the world. Find materials to progress across the islands to achieve this goal!',
      subtitles: [
        'Global Game Jam', 'Jan 2021', 'Lost and Found', 'Unity'
      ],
      links: {
        'github': 'https://github.com/Yasmojam/GGJ21',
        'itch.io': 'https://dasha1362.itch.io/island-dream',
        'ggj': 'https://v3.globalgamejam.org/2021/games/tbc-3'
      },
      image: 'islandDream.png'
    },
    {
      title: 'Spaceship Repair',
      body: 'Oh no! Your spaceship has crash landed on an unknown world and asteroids are raining down all around you. Can you collect scrap to repair your spaceship and escape?',
      subtitles: [
        'Global Game Jam', 'Feb 2020', 'Repair', 'Godot'
      ],
      links: {
        'github': 'https://github.com/Yasmojam/GlobalGameJam2020'
      },
      image: 'repairGame.png'
    },
    {
      title: 'Slimes',
      body: 'The twin slimes have to work together to jump, dive, and slide through a dangerous dungeon to help Mama Slime escape.',
      subtitles: [
        'GUDEV', 'Feb 2019', 'Twins', 'Unity'
      ],
      links: {
        'github': 'https://github.com/pmaitland/GUDev5',
        'itch.io': 'https://gudev.itch.io/slimes',
        'gudev': 'https://gudevsoc.co.uk/gamejam/february2019/'
      },
      image: 'slimes.png'
    },
    {
      title: 'Hermit',
      body: 'It\'s important to eat plenty of healthy food to grow big and strong, but be careful; you might outgrow your home and have to find another!',
      subtitles: [
        'Global Game Jam', 'Jan 2019', 'What home means to you', 'Unity'
      ],
      links: {
        'github': 'https://github.com/Iain530/GGJ19',
        'ggj': 'https://v3.globalgamejam.org/2019/games/hermit-2'
      },
      image: 'hermit.png'
    },
    {
      title: 'Parkour Piggies',
      body: 'The piglets have lost their mum! Can you help them jump to the top of each level and find her?',
      subtitles: [
        'GUDEV', 'Oct 2018', 'Deceit', 'Unity'
      ],
      links: {
        'github': 'https://github.com/dasha1362/gudev4-deceit',
        'itch.io': 'https://dasha1362.itch.io/parkour-piggies',
        'gudev': 'https://gudevsoc.co.uk/gamejam/october2018/'
      },
      image: 'parkourPiggies.png'
    },
    {
      title: 'Claw Game',
      body: 'Cleaning the ocean? Pfft, we\'re here to make money! Use the giant claw attached to your boat to pull valuables out of the water and sell them!',
      subtitles: [
        'GUDEV', 'Mar 2018', 'Salvage', 'Godot'
      ],
      links: {
        'github': 'https://github.com/pmaitland/GUDEV_GameJam_Email-',
        'itch.io': 'https://gudev.itch.io/claw-game',
        'gudev': 'https://gudevsoc.co.uk/gamejam/march2018/'
      },
      image: 'clawGame.png'
    },
    {
      title: 'Operation: Wire',
      body: 'You are a virus. Your mission: Investigate computers on the network and find out as much information about them as you can.',
      subtitles: [
        'Global Game Jam', 'Jan 2018', 'Transmission', 'Unity'
      ],
      links: {
        'github': 'https://github.com/DevdudeSami/GUEmail_GGJ',
        'itch.io': 'https://dasha1362.itch.io/operation-wire',
        'ggj': 'https://v3.globalgamejam.org/2018/games/operation-wire'
      },
      image: 'operationWire.png'
    }
  ]
}

export const projects: CardList = {
  description: 'These are other non-game related things I\'ve done. I\'ve worked on more, so this list is not exhaustive, but not everything is worth showing off :)',
  cards: [
    {
      title: 'Personal Website',
      subtitles: [
        'Oct 2023 - Present', 'React'
      ],
      body: 'You are here. I wanted somewhere to collate the things I\'d made and worked on, so this is it!',
      image: 'website.png',
      links: {
        'github': 'https://github.com/pmaitland/Personal-Website'
      }
    },
    {
      title: 'Sonic',
      subtitles: [
        'Aug 2023 - Present', 'Python'
      ],
      body: 'Discord bot used with friends to announce Parkrun finishes and review stats and progress.',
      links: {
        'parkrun': 'https://www.parkrun.org.uk/'
      },
      image: 'sonic.png'
    },
    {
      title: 'Goblinto',
      subtitles: [
        'Dec 2020 - Jan 2023', 'Python'
      ],
      body: 'Discord bot hooked up to a Dungeons and Dragons API to allow for quick searches from within Discord. Can also generate images of monsters using DALL-E-2 and roll dice!',
      links: {
        'dnd api': 'https://www.dnd5eapi.co/',
        'dall-e-2': 'https://openai.com/dall-e-2'
      },
      image: 'goblinto.png'
    },
    {
      title: 'TSP Visualisation',
      subtitles: [
        'Sep 2018 - Apr 2019', 'Javascript'
      ],
      body: 'Final year university project to visualise the Travelling Salesman Problem and methods to solve it with the aim of helping learners gain a better understanding of the problem.',
      links: {
        'github': 'https://github.com/pmaitland/TSP-Visualisation',
        'try it': 'https://pmaitland.github.io/TSP-Visualisation/'
      },
      image: 'tsp.png'
    }
  ]
}

export const others: CardList = {
  description: 'Check out these other people and what they\'re up to too!',
  cards: [
    {
      title: 'Duck Sauce Games',
      body: 'Game jams are great. I always enjoy taking part in them and now my friends and I run our own. Check out our website and come along to the next event!',
      links: {
        'website': 'https://ducksauce.games',
      },
      image: 'dsg.png'
    },
    {
      title: 'handyheart',
      body: 'A fantastic artist, great developer, and wonderful person.',
      links: {
        'website': 'https://handyheart.art',
        'github': 'https://github.com/yasmojam'
      },
      image: 'handyheart.png'
    }
  ]
}

export const notFound: CardList = {
  cards: [
    {
      title: '404 Not Found',
      body: 'Sorry, it looks like that doesn\'t exist. Use the navbar above to get back to somewhere that does.',
      image: '404.png'
    }
  ]
}

export const emojis: Record<string, string> = {
  'alien': '👽',
  'bee': '🐝',
  'bicycle': '🚲',
  'boat': '⛵',
  'brie': '🧀',
  'cat': '🐱',
  'clown': '🤡',
  'duck': '🦆',
  'egg': '🥚',
  'eyes': '👀',
  'frog': '🐸',
  'hmm': '🤔',
  'hotdog': '🌭',
  'mushroom': '🍄',
  'peach': '🍑',
  'pepper': '🫑',
  'pride': '🏳️‍🌈',
  'robot': '🤖',
  'salute': '🫡',
  'skull': '💀',
  'star': '⭐',
  'trans': '🏳️‍⚧️',
  'watermelon': '🍉',
}