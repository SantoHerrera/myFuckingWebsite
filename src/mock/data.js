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
  paragraphOne: 'A punch of filler words here, talking/describing me as a person.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'clojuretictac.png',
    title: 'Clojure Tic Tac Toe',
    info: 'When trying to learn a new framework/language, recreating tic tac toe is my goto. This will usually be enough to familiarize with syntax, and some of the quirks that the framework/language has. Out of all the versions i\'ve made the clojure version has been my favorite. Why? Mostly becuase it forced me into doing things differently. How so? It made me code in a functional way. I also learned how to recursively pass state around. Which I think is a neat way of doing things.',
    info2: '',
    url: '',
    repo: 'https://github.com/SantoHerrera/clojuretictac', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot (7).png',
    title: 'Vue Minesweeper ',
    info: 'I love minesweeper. It was actually the thing that got me into programming. I\'ve rewritten this alot aswell. None of the versions I\'ve written are visually pleasing. My favorite version has been the Vue js version. Why? Becuase its the shortest version. In most cases I think the less code the better. This version is about 100 lines of code less than the React Js version, and about 50 in the Vanilla Js version. All versions have bare minimum css. So im mostly talking about the logic of the game when referring about lines of code.',
    info2: '',
    url: '',
    repo: 'https://github.com/SantoHerrera/minesweeperbutinvue', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot (9).png',
    title: 'Professional Experience',
    info: 'For a couple of weeks I was being sent out to Utah Public Health Labatories. This particular job had a lot of down time. My phone dying becuase I used it too much was a genuine concern. Anyways, my boss asked me if I could go to a google sheet that the company had and reorganize the names. Their was over 250 names. I immediately thought "I could make some type of script for this." I had to learn how to use the google script editor. That compined with what my boss wanted, and the contrains that entailed, made this a a fun little project. Not gonna lie, this took me a little longer too finish than I would have hoped.',
    info2: '',
    url: '',
    repo: 'https://github.com/SantoHerrera/UPHL/blob/master/googleSpreadSheet.js', // if no repo, the button will not show up
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
