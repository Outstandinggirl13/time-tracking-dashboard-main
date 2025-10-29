# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [How My JavaScript Works](#how-my-javascript-works)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](/assets/images/screenshot.png)

### Links

- Solution URL: [Responsive Time-Tracking Dashboard Challenge](https://www.frontendmentor.io/solutions/responsive-time-tracking-dashboard-challenge-rLN1a_8pCb)
- Live Site URL: [GitHub Pages](https://outstandinggirl13.github.io/time-tracking-dashboard-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

1. Fixing unwanted background edges with linear gradients.

When styling the cards (e.g. .work__group, .play__group, .study__group, etc.), I noticed that the colored backgrounds of the sections underneath were slightly visible along the edges of the darker cards on top.
![](/assets/images/problem.PNG)
To fix this, I used a linear gradient with a hard color stop that perfectly matched the background color of the card above (--navy-900). This ensured that no matter the device or screen scaling, the transition looked clean and seamless:

```CSS
.work__group { 
  background-color: var(--navy-900); 
  border-radius: 14px; 
  position: relative; 
  z-index: 1; 
  padding: 1.625rem 1.375rem 1.75rem 1.5625rem; 
  display: flex; 
  flex-direction: column; 
  gap: 0.375rem; 
}

.work {
  background: linear-gradient(0deg, var(--navy-900) 69%, var(--orange-300-work) 69%);
}
```

2. Stacking elements correctly using positioning.

I learned that when you need one element to appear above another, both must have a position value different from static.
Setting `.work__group` to `position: relative` and `.work__image` to `position: absolute` allowed the image to be correctly layered behind the card group.

```CSS
.work__group {
  position: relative;
  z-index: 1;
}

.work__image {
  position: absolute;
}
```

3. Combining Grid, Flexbox, and Clamp for responsive layouts.

For the mobile layout, I used CSS Grid to arrange the cards in a single column with seven rows. The `clamp()` function made the card width responsive to the viewport size:

```CSS
.main__cards {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, auto);
  row-gap: 1.625rem;
  margin: 5.0625rem auto;
  width: clamp(16.875rem, 86.9vw, 33.75rem);
}
```

For tablet screens, I centered the cards using Flexbox combined with Grid:

```CSS
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__cards {
  grid-template-columns: 15.9375rem 15.9375rem;
  grid-template-rows: repeat(4, auto);
  gap: 1.875rem;
}
```

And on desktop screens, I applied a fixed width (fit-content) so the cards remained perfectly centered within the flex container:

```CSS
.main {
  height: 100vh;
}

.main__cards {
  grid-template-columns: repeat(4, 255px);
  grid-template-rows: repeat(2, auto);
  gap: 1.875rem;
  width: fit-content;
}
```
### How My JavaScript Works

1. Selecting elements

First, I selected all the main parts of the report: the three tab buttons (`Daily`, `Weekly`, and `Monthly`) and the elements that display time data for each activity (like work, play, study, etc.).
I grouped those elements into three separate objects — `daily`, `weekly`, and `monthly` — so I can easily show or hide them depending on which tab is active.

2. Switching between tabs

I created a function called `showPeriod()` that handles switching.

- It removes the `.active` class from the previously selected tab and adds it to the newly clicked one.
- It hides all time periods (daily, weekly, monthly).
- Then it shows only the one that was clicked.

This makes it look like the data updates when you change tabs.

3. Simplifying visibility changes

Instead of repeating element.style.display = "none" or "block" many times, I made a helper function setDisplay() that loops through all properties inside an object (like daily) and sets their display style in one go.

4. Connecting the tabs to the functions

Each tab button (`Daily`, `Weekly`, `Monthly`) has an event listener.
When you click one, it calls `showPeriod()` and passes the correct object (`daily`, `weekly`, or `monthly`) so that only that data is visible.

5. Loading data from JSON

The script fetches data from a file called `data.json`.
After the data is loaded, it loops through all activities (like “Work”, “Play”, “Study”, etc.) and time periods (`daily`, `weekly`, `monthly`).
For each combination, it:

- Finds the matching element in the HTML,
- Updates its text with the current and previous hours,
- Adds labels like “Yesterday” or “Last Week”.

6. Making text with needed format

There’s also a small helper function `capitalize()` that ensures activity names match the JSON format (for example, turning `"work"` into `"Work"`).

In short — my JavaScript makes the time-tracking dashboard dynamic:
it loads real data, updates it automatically, and switches between daily, weekly, and monthly reports when the user clicks different tabs.


## Author

- Website - [Outstandinggirl13](https://github.com/Outstandinggirl13)
- Frontend Mentor - [@Outstandinggirl13](https://www.frontendmentor.io/profile/Outstandinggirl13)