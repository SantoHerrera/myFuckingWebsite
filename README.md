# Gatsby Simplefolio ⚡️ [![GitHub](https://img.shields.io/github/license/cobidev/gatsby-simplefolio?color=blue)](https://github.com/cobidev/gatsby-simplefolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/cobidev/gatsby-simplefolio) ![GitHub forks](https://img.shields.io/github/forks/cobidev/gatsby-simplefolio)

## A clean, beautiful and responsive portfolio template for Developers

<h2 align="center">
  <img src="https://github.com/cobidev/gatsby-simplefolio/blob/master/examples/example.gif" alt="Gatsby Simplefolio" width="600px" />
  <br>
</h2>

## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ One Page Layout built with React\
⚡️ Styled with Bootstrap v4.3 + Custom SCSS\
⚡️ Fully Responsive\
⚡️ Configurable color scheme\
⚡️ Image optimization with Gatsby\
⚡️ Easy site customization\
⚡️ Well organized documentation

To view a demo example, **[click here](https://gatsby-simplefolio.netlify.com/)**\
To view a live example, **[click here](https://cobidev.com/)**

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.\
Also you need to have installed [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/)

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
gatsby-cli@2.8.22 or higher
```

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

```
yarn@v1.21.1 or higher
```

---

## How To Use 🔧

From your command line, first clone Simplefolio:

```bash
# Clone this repository
$ git clone https://github.com/cobidev/gatsby-simplefolio

# Go into the repository
$ cd gatsby-simplefolio

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run develop
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn develop
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, go to this url `http://localhost:8000/` and you will see the website running on a Development Server:

<h2 align="center">
  <img src="https://github.com/cobidev/gatsby-simplefolio/blob/master/examples/example.png" alt="Gatsby Simplefolio" width="100%">
</h2>

---

## Instructions:

### Step 1 - STRUCTURE

Go to `/src/mock/data.js` and fill your information, they are 5 objects:

### Hero Section

```javascript
export const heroData = {
  title: '', // Hello, my name is
  name: '', // John
  subtitle: '', // I'm the Unknown Developer.
  cta: '', // Know more
};
```

### About Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

```javascript
export const aboutData = {
  img: 'profile.jpg', // put your profile image (recommended aspect radio: square)
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};
```

### Projects Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

Put as many projects object you want inside the `array`.

```javascript
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  ...
];
```

### Contact Section

```javascript
export const contactData = {
  cta: '', // call to action text for the contact section
  btn: '', // text inside the button
  email: '',
};
```

### Footer Section

You can remove or add as many you social-media icons you want.\
Just put an object with the corresponding values inside the networks `array` or remove it from there.

```javascript
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '', // your twitter url
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '', // your codepen url
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '', // your linkedin url
    },
    {
      id: nanoid(),
      name: 'github',
      url: '', // your github url
    },
  ],
};
```

### Required - Disable GitHub buttons

Set `isEnabled` to `false` once you finish setup your portfolio.\
By setting to `false` it will hide the GitHub stars/fork buttons

```javascript
export const githubButtons = {
  isEnabled: true, // true is the default value
};
```

### Step 2 - STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to `src/styles/abstracts/_variables.scss` and only change the values on this classes `$main-color` and `$secondary-color` to your prefered HEX color

```scss
// Default values
$main-color: #02aab0;
$secondary-color: #00cdac;
```

**_Note_**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#BrightVault)

---

## Deployment 📦

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

## Others versions 👥

[Simplefolio](https://github.com/cobidev/simplefolio) by [Jacobo Martinez](https://github.com/cobidev)\
[Ember.js Simplefolio](https://github.com/sernadesigns/simplefolio-ember) by [Michael Serna](https://github.com/sernadesigns)

## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language

## Authors

- **Jacobo Martinez** - [https://github.com/cobidev](https://github.com/cobidev)

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/2365af6f-820a-4fb8-83e6-69a66f686dfe/deploy-status)](https://app.netlify.com/sites/gatsby-simplefolio/deploys)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments 🎁

I was motivated to create this project because I wanted to contribute on something useful for the dev community, thanks to [ZTM Community](https://github.com/zero-to-mastery) and [Andrei](https://github.com/aneagoie)
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
