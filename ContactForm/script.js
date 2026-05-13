const form = document.querySelector("form");
const successMessage = document.querySelector(".alert-message");

// Inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const queryRadios = document.querySelectorAll('input[name="query"]');

// Helpers
const showError = (input) => {
  const group = input.closest(".input-group") || input.closest(".checkbox-group") || input.closest("fieldset");
  const error = group.querySelector(".error-message");

  if (error) error.style.display = "block";
  input.setAttribute("aria-invalid", "true");
};

const hideError = (input) => {
  const group = input.closest(".input-group") || input.closest(".checkbox-group") || input.closest("fieldset");
  const error = group.querySelector(".error-message");

  if (error) error.style.display = "none";
  input.setAttribute("aria-invalid", "false");
};

const isEmailValid = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const isQuerySelected = () => {
  return Array.from(queryRadios).some(radio => radio.checked);
};

// Validation
const validateForm = () => {
  let isValid = true;

  if (!firstName.value.trim()) {
    showError(firstName);
    isValid = false;
  } else {
    hideError(firstName);
  }

  if (!lastName.value.trim()) {
    showError(lastName);
    isValid = false;
  } else {
    hideError(lastName);
  }

  if (!email.value.trim() || !isEmailValid(email.value)) {
    showError(email);
    isValid = false;
  } else {
    hideError(email);
  }

  if (!isQuerySelected()) {
    const fieldset = document.querySelector(".query-group");
    const error = fieldset.querySelector(".error-message");
    error.style.display = "block";
    isValid = false;
  } else {
    const fieldset = document.querySelector(".query-group");
    const error = fieldset.querySelector(".error-message");
    error.style.display = "none";
  }

  if (!message.value.trim()) {
    showError(message);
    isValid = false;
  } else {
    hideError(message);
  }

  if (!consent.checked) {
    showError(consent);
    isValid = false;
  } else {
    hideError(consent);
  }

  return isValid;
};

// Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = validateForm();

  if (!isValid) return;

  successMessage.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  // Form reset
  form.reset();

  // Accessibility reset
  document.querySelectorAll("[aria-invalid]").forEach(el => {
    el.setAttribute("aria-invalid", "false");
  });
});