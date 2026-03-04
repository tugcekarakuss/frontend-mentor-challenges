# Tip Calculator App

This project is a solution to the [Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX) **Tip Calculator App** challenge.  
It is built using **HTML, CSS, and Vanilla JavaScript**, fully responsive, and dynamically calculates tip and total amount per person based on user input.

---

## What I Learned

While building this project, I strengthened my skills in:

- **Event-Driven Programming:** Updating calculations in real time using `input` and `click` event listeners.
- **State Management (Vanilla JS):** Managing application state through controlled variables instead of hardcoded values.
- **DOM Manipulation:** Dynamically updating UI elements (`textContent`) based on calculated results.
- **Form Validation & UX Feedback:** Handling invalid input (e.g., number of people cannot be zero) with visual error states.
- **Class Toggling:** Managing active tip percentage buttons dynamically.
- **Responsive Layout Techniques:** Using Flexbox and Grid for adaptive UI structure.
- **Defensive Programming:** Preventing division-by-zero errors and handling empty inputs safely.

---

## Project Screenshot

![Project Screenshot](images/preview.jpg)  
*Desktop version of the Tip Calculator App.*

---

## Live Demo

**Live Site:** https://your-live-link-here.com/

---

## Technologies Used

- **HTML5**
  - Semantic structure
  - Accessible form controls
  - ARIA attributes for error messaging

- **CSS3**
  - Flexbox
  - CSS Grid (tip button layout)
  - Custom Properties (CSS Variables)
  - Media Queries (Responsive design)
  - Hover & focus states

- **JavaScript (Vanilla JS)**
  - DOM Selection & Manipulation
  - Event Handling (`input`, `click`)
  - Real-time Calculations
  - Conditional Rendering
  - Class Management

---

## Key Features

- **Real-Time Calculation:**  
  Tip amount and total per person update instantly as the user types.

- **Selectable Tip Percentages:**  
  Predefined percentage buttons with active state styling.

- **Custom Tip Support:**  
  Users can enter a custom percentage which overrides selected buttons.

- **Input Validation:**  
  Displays an error message when the number of people is zero and prevents invalid calculations.

- **Reset Functionality:**  
  Clears all inputs and restores the UI to its default state.

- **Responsive Layout:**  
  - Desktop: Two-column layout  
  - Mobile: Stacked vertical layout  

---

## Reflection

This project helped reinforce core JavaScript fundamentals without relying on any frameworks.

Instead of hardcoding values, I implemented dynamic calculations and structured logic around user interactions. Managing UI state manually improved my understanding of how frameworks abstract these processes.

Separating calculation logic from UI updates made the code more maintainable and easier to debug.

---

**Coded by [Tuğçe Karakuş](https://github.com/tugcekarakuss)**  
Challenge by [Frontend Mentor](https://www.frontendmentor.io)