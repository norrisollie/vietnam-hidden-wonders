# Vietnam Slider Carousel

I have created a full page three page slider. I have used React as the front-end framework. It was a fun, creative challenge and really enjoyed working on it.

## Details

Live Link: https://norrisollie.github.io/vietnam-hidden-wonders/
Repo Link: https://github.com/norrisollie/vietnam-hidden-wonders/

## Available Scripts

In the project directory, you can run:
`npm start`

## Tech Used

- React for the front end framework.
- SASS for the CSS preprocessor.
- Swiper for the carousel functionality.
- React Spring for the Modal Animation.
- CSS animation for the background image zoom.

## Strategy

- I started off with using Create React App, after deciding to use React.
- I installed the required packages, Swiper and Sass.
- I started off creating the structure of the page, carousel and slides. I started by creating an array of objects that would contain all the data for the slides. I chose this method as this would be a similar way of making this project if a CMS was used.
- I worked on styling the carousel to match the design on Figma.
- The modal functionality, including the animation, was worked on last, as I thought this would be a more challenging part of the task.
- Final part was bug fixes and small updates to get it ready

## Challenges

- I was unsure whether to use a bundler, such as Parcel, with HTML, CSS and vanilla javascript, or using a front-end framework. I decided to use React as it would be easier to manage state, and thought it would be quicker to get the project completed in the time available.
- I was a bit unsure about how to get the video to stop playing on slide change when using React, however after studying the documents for Swiper and React, it was really easy to figure out using the UseSwiper hook. I was able to use this to detect when you change slides to close the modal and stop the video from playing.
- The animation proved to be quite challenging. Initially I wanted to use GSAP, however it wasn’t working well and the implementation didn’t look great. It was also a challenge to get it to work with Swiper. I have used GSAP and Swiper before, but it wasn’t on a React project, it was on a simple HTML, SCSS and Javascript project using Parcel as a bundler. For the background animation, I used CSS animations, using the active slide class provided on swiper slide. I am disappointed I wasn’t able to add more animation, especially to the text on each slide when the slides load and change.
- There appears to be a bug on Chrome, where the title text behind the modal looks as though it is behind the image, but in front of the modal text. This doesn’t appear to be an issue on Safari. If you resize the window with the modal opens, it works as normal. Unfortunately I wasn’t too sure to fix to fix this issue. If the text was to fade out when the modal opens this will likely fix the issue, alternatively you could use opacity instead as a workaround.
