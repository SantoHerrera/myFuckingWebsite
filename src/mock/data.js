import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Welcome', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rafael Herrera',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Screenshot (11).png',
  paragraphOne:
    'I have a really hard time talking about myself. So ill just put some of my hobbies here. Some of them being playing soccer, longboarding, videogames, hiking, and programming',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nuova.png',
    title: 'Relevant Experience',
    info:
      "Heres a website I made for a client. I got a react template I found on github and changed it to our needs. Although it's very similer to the original I did run into a bunch of roadblocks changing it.",
    info2: 'Original: https://github.com/Dorota1997/react-frontend-dev-portfolio',
    url: 'https://nuovaimmagine.netlify.app/',
    repo: 'https://github.com/SantoHerrera/nuovaimmagine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot (7).png',
    title: 'Vue Minesweeper ',
    info:
      "I love minesweeper, it was the thing that got me into programming. I've rewritten this alot. My favorite version being the Vue js version as its the shortest version. ",
    info2: '',
    url: 'https://vueminesweeper.netlify.app/',
    repo: 'https://github.com/SantoHerrera/minesweeperbutinvue', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'clojuretictac.png',
    title: 'Clojure Tic Tac Toe',
    info:
      "When trying to learn a new framework/language, recreating tic tac toe is my goto. This will usually get the ball rolling with syntax and everything that follows. Out of all the versions i've made the clojure version has been my favorite. As it forced me into doing things in a functional way.",
    info2: '',
    url: 'https://github.com/SantoHerrera/clojuretictac',
    repo: 'https://github.com/SantoHerrera/clojuretictac', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'santoelias65537@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rafael-herrera-61995319a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SantoHerrera',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
