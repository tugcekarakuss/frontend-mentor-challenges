# FAQ Accordion

A responsive **FAQ Accordion component** that allows users to expand and collapse questions to reveal answers.

Built with **HTML, CSS, and Vanilla JavaScript**, focusing on **accessible UI patterns, state toggling, and smooth animations**.

This project is a solution to a **Frontend Mentor challenge**.

---

## Live Demo

**Live Site:**  
https://faqaccordion-three.vercel.app/

---

## Project Screenshot

![Project Screenshot](./assets/images/preview.jpg)

*Desktop view of the FAQ Accordion component.*

---

## Features

### Accordion Behavior

- Click on a question to **expand/collapse** the answer
- Each FAQ item works independently
- Smooth open/close animation using CSS transitions

### Accessibility

- Uses `aria-expanded` for screen reader support
- `aria-controls` and `aria-labelledby` for proper relationships
- Keyboard focus styles implemented

### Responsive Design

- Mobile-friendly layout
- Adaptive typography and spacing
- Background image switches based on screen size

---

## Technologies Used

### HTML5

- Semantic structure
- Accessible button elements
- ARIA attributes for better UX

### CSS3

- Flexbox layout
- CSS variables for design system
- Transitions for smooth animations
- Responsive design with media queries

### JavaScript (Vanilla JS)

- DOM selection & traversal
- Event handling with `addEventListener`
- Class toggling with `classList`
- Accessibility state updates (`aria-expanded`)

---

## What I Learned

While building this project, I improved my understanding of:

- **Building accessible accordion components**
- **Managing UI state with class toggling**
- **Synchronizing UI state with ARIA attributes**
- **Using CSS transitions for better UX**
- **Structuring reusable component logic**

---

## Reflection

This project reinforced the importance of **accessibility in interactive components**.

Implementing the accordion required keeping the **visual state** and **ARIA state** in sync, ensuring both usability and accessibility.

The separation of concerns between **HTML structure**, **CSS animations**, and **JavaScript behavior** made the component clean and maintainable.

---

## Credits

**Coded by:**  
[Tuğçe Karakuş](https://github.com/tugcekarakuss)

**Challenge by:**  
[Frontend Mentor](https://www.frontendmentor.io)