# Newsletter Sign-Up Form with Success Message

This project is a solution to the [Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv) **Newsletter Sign-Up Form with Success Message** challenge.  
It is built using **HTML, CSS, and JavaScript**, fully responsive, and includes client-side email validation with dynamic UI state transitions.

---

## What I Learned

While building this project, I improved my skills in:

- **Semantic HTML:** Structuring form elements correctly using `<form>`, `<label>`, `<input>`, and `<button>` for better accessibility.
- **Form Validation Logic:** Implementing client-side validation using a regular expression to validate email formats.
- **State Management with CSS Classes:** Managing UI transitions (signup → success state) using `classList` instead of inline styles.
- **JavaScript DOM Manipulation:** Handling form submission, preventing default behavior, dynamically updating content, and toggling UI components.
- **Responsive Design:** Implementing a mobile-first layout and adapting the design for tablet and desktop using media queries.
- **Error Handling UX:** Displaying validation feedback and resetting the form state properly.

---

## Project Screenshot

![Project Screenshot](images/preview.jpg)  
*Desktop version of the Newsletter Sign-Up Form.*

---

## Live Demo

**Live Site:** https://newslettersignupwithsuccessmessagee.netlify.app/

---

## Technologies Used

- **HTML5** (Semantic form structure)
- **CSS3**
  - Flexbox
  - Custom Properties (CSS Variables)
  - Media Queries
- **JavaScript (Vanilla JS)**
  - Regex validation
  - DOM manipulation
  - Event handling

---

## Key Features

- **Email Validation:** Client-side validation using regex.
- **Dynamic UI State:** Transition between sign-up and success screens.
- **Error Feedback:** Visual indication for invalid input.
- **Form Reset Logic:** Proper state reset after dismissing the success message.
- **Fully Responsive Layout:** Optimized for mobile, tablet, and desktop.

---

## Reflection

This challenge strengthened my understanding of managing UI states without frameworks. I controlled visibility through CSS classes and structured the JavaScript logic into small, focused functions.

Implementing email validation reinforced the importance of separating concerns: JavaScript manages behavior and state, while CSS handles presentation.

---

**Coded by [Tuğçe Karakuş](https://github.com/tugcekarakuss)**  
Challenge by [Frontend Mentor](https://www.frontendmentor.io)