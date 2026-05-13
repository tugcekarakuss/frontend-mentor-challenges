# Contact Form

A responsive and accessible **Contact Form component** with real-time validation and user feedback.

Built with **HTML, CSS, and Vanilla JavaScript**, focusing on **form validation, accessibility (ARIA), and user experience improvements**.

This project is a solution to a **Frontend Mentor challenge**.

---

## Live Demo

**Live Site:**  
https://contact-formm-project.netlify.app/

---

## Project Screenshot

![Project Screenshot](./assets/images/desktop-preview.jpg)

*Desktop view of the contact form component.*

---

## Features

### Form Validation

- Required field validation for all inputs
- Email format validation using regex
- Dynamic error message handling
- Prevents submission if validation fails

### Accessibility (A11y)

- Uses `aria-invalid` to reflect validation state
- `aria-describedby` connects inputs with error messages
- `aria-live` announces dynamic updates (success message)
- Focus management for better keyboard navigation

### User Experience

- Smooth scroll to top on successful submission
- Success message displayed after submission
- Clear visual feedback for errors and valid states

### Responsive Design

- Adaptive spacing and typography
- Flexible input grouping (name fields, radio buttons)

---

## Technologies Used

### HTML5

- Semantic structure
- Proper form labeling
- Accessible form patterns

### CSS3

- Flexbox layout
- CSS variables (custom properties)
- Responsive design with media queries
- Interactive states (hover, focus)

### JavaScript (Vanilla JS)

- Form validation logic
- DOM manipulation
- Event handling (`submit`, `input`)
- State synchronization between UI and ARIA attributes

---

## What I Learned

- Building accessible form components
- Managing validation and UI state
- Synchronizing visual feedback with ARIA attributes
- Writing reusable validation logic
- Improving UX with scroll and focus management

---

## Reflection

This project reinforced the importance of **accessible and user-friendly forms**.

Keeping the **UI state** and **ARIA state** in sync ensured both usability and accessibility.

Separating structure (HTML), styling (CSS), and behavior (JavaScript) made the codebase clean and maintainable.

---

## Credits

**Coded by:**  
[Tuğçe Karakuş](https://github.com/tugcekarakuss)

**Challenge by:**  
[Frontend Mentor](https://www.frontendmentor.io)