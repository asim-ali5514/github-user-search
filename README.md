# Frontend Mentor - GitHub user search app solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/mobile-first-github-api-user-search-fR6V7DzaH](https://your-solution-url.com)
- Live Site URL: [https://github-user-search-asim-ali5514.vercel.app/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - React Package


### What I learned

One of the main things that I have learned over building this project was how to interact and troubleshoot with an api. This challenge is a user search with the Github API and this was my first time using axios to interact with an API. Axios made it incredibly easy for me to request from the api when needed because I could just make a quick function to fetchdata and call it on button click. Another thing that I learned was that you could incorporate dynamic styling very easily with tailwind CSS using backticks(``) instead of quotes("") when writing the css.

To see how you can add code snippets, see below:


```js
//The function I used when requesting data
  const fetchData = () => {
    return axios.get(`https://api.github.com/users/${User}`)
    .then((res) => {
      setInfo(res.data)
      setValid(true)
      return res.data
    })
    .catch((err) => {
      console.log(err)
      setValid(false)
    })
  }

  //An example of how I used tailwinds dynamic styling to show different text based on a condition
  <p className={`font-Space-Mono ${!Info.location  ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`}>{!Info.location ? 'Not Available' : Info.location}</p>

```
### Continued development

Something that I really want to continue to use is axios because it was so simple and easy to implement in my project which I really loved. Another huge thing that I am sure I will be using in other projects in definetly tailwinds dynamic styling because it is so easy to use.


### Useful resources

- [Tailwind CSS docs](https://tailwindcss.com/) - The tailwind docs are very well written and easy to navigate 


## Author

- Website - [Asim Ali](https://github-user-search-asim-ali5514.vercel.app/)
- Frontend Mentor - [@asim-ali5514](https://www.frontendmentor.io/profile/asim-ali5514)


