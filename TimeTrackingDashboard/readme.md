# Time Tracking Dashboard

This project is a solution to the [Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw) **Time Tracking Dashboard** challenge.  
It is built using **HTML, CSS, and JavaScript**, fully responsive, and dynamically renders time tracking data from a local JSON file.

---

## What I Learned

While building this project, I strengthened my skills in:

- **Dynamic Data Rendering:** Fetching and rendering structured JSON data using the Fetch API.
- **Asynchronous JavaScript:** Using `async/await` to handle data retrieval cleanly.
- **DOM Manipulation:** Dynamically generating UI components based on external data.
- **State-Based Rendering:** Updating the UI according to selected timeframes (`daily`, `weekly`, `monthly`).
- **Clean UI Logic:** Separating data logic from presentation and avoiding hardcoded values.
- **Responsive Design:** Implementing a mobile-first layout and adapting it for tablet and desktop screens using media queries.

---

## Project Screenshot

![Project Screenshot](images/preview.jpg)  
*Desktop version of the Time Tracking Dashboard.*

---

## Live Demo

**Live Site:** https://timetrackinggdashboard.netlify.app/

---

## Technologies Used

- **HTML5** (Semantic structure)
- **CSS3**
  - Flexbox
  - CSS Grid
  - Custom Properties (CSS Variables)
  - Media Queries
- **JavaScript (Vanilla JS)**
  - Fetch API
  - Async/Await
  - DOM Manipulation
  - Event Handling

---

## Key Features

- **Dynamic Card Rendering:** Cards are generated dynamically from `data.json`.
- **Timeframe Switching:** Users can switch between daily, weekly, and monthly views.
- **Data-Driven UI:** No hardcoded time values — all values come from structured JSON data.
- **Responsive Layout:** Optimized for mobile, tablet, and desktop screens.
- **Clean Component Logic:** Reusable rendering logic via a dedicated `loadData(timeframe)` function.

---

## Reflection

This challenge improved my understanding of dynamic UI rendering without using frameworks.  
Instead of hardcoding content, I relied on structured data and built a reusable rendering function.

Working with asynchronous data reinforced the importance of clean architecture and separation of concerns.  
JavaScript manages the data and behavior, while CSS controls layout and visual styling.

---

**Coded by [Tuğçe Karakuş](https://github.com/tugcekarakuss)**  
Challenge by [Frontend Mentor](https://www.frontendmentor.io)