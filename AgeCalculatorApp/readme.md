# Age Calculator App

A responsive **Age Calculator** that determines a user's exact age in **years, months, and days** based on their birth date.

Built with **HTML, CSS, and Vanilla JavaScript**, focusing on **form validation, accurate date calculations, and dynamic UI updates**.

This project is a solution to the **Age Calculator App challenge** from  
[Frontend Mentor](https://www.frontendmentor.io/).

---

## Live Demo

**Live Site:**  
https://frontend-mentor-challenges-taupe-nu.vercel.app/

---

## Project Screenshot

![Project Screenshot](images/preview.jpg)

*Desktop version of the Age Calculator App.*

---

## Features

### Age Calculation
Calculates the user's age in:

- **Years**
- **Months**
- **Days**

based on the entered birth date.

### Form Validation
Prevents invalid input and ensures all required fields are completed.

Validation includes:

- Required fields
- Valid day range (**1–31**)
- Valid month range (**1–12**)
- Valid year
- Invalid calendar dates (e.g. `31/02/2000`)
- Future date prevention

### Error Feedback
Displays clear error messages and highlights invalid input fields.

### Responsive Layout

- **Desktop:** Structured layout with aligned input fields  
- **Mobile:** Stacked layout optimized for smaller screens  

---

## Technologies Used

### HTML5
- Semantic form structure
- Accessible input fields
- Error message elements for validation feedback

### CSS3
- Flexbox layout
- Responsive design
- Error state styling
- Focus and hover states

### JavaScript (Vanilla JS)
- DOM selection & manipulation
- Form validation
- Date calculations
- Event handling (`submit`)
- Conditional logic
- Class toggling for error states

---

## What I Learned

While building this project, I strengthened my understanding of:

- **Form validation in JavaScript**
- **Error handling and user feedback**
- **Date manipulation using the `Date` object**
- **Handling edge cases** such as invalid calendar dates and future inputs
- **Dynamic DOM updates** using `textContent`
- **Class management** with `classList`
- **Defensive programming** to ensure calculations only run when inputs are valid
- **Responsive layout techniques**

---

## Reflection

This project improved my understanding of **JavaScript date handling and form validation without using external libraries or frameworks**.

Implementing validation logic required careful handling of edge cases such as invalid calendar dates and future inputs. Working with the `Date` object also helped me better understand how JavaScript handles and adjusts dates internally.

Separating **validation logic**, **calculation logic**, and **UI updates** made the code easier to maintain and debug.

---

## Credits

**Coded by:**  
[Tuğçe Karakuş](https://github.com/tugcekarakuss)

**Challenge by:**  
[Frontend Mentor](https://www.frontendmentor.io)