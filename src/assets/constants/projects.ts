import { CardDetails } from "../../types/cardDetails";

export const projects: CardDetails[] = [
  {
    title: 'Personal Website',
    subtitles: [
      'Oct 2023', 'React'
    ],
    body: 'You\'re here already!',
    links: {
      'github': 'https://github.com/pmaitland/Personal-Website'
    }
  },
  {
    title: 'Sonic',
    subtitles: [
      'Aug 2023 - Sep 2023', 'Python'
    ],
    body: 'Discord bot used with friends to keep track of running records, stats, and goals.',
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
