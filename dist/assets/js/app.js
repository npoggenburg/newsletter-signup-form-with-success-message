class CardManager {
  constructor() {
    // Selectors
    this.cardForm = document.querySelector('[data-card="form"]');
    this.cardSuccess = document.querySelector('[data-card="success"]');
    this.forms = document.querySelectorAll('[data-card="submit"]');
    // Classes
    this.hiddenClass = 'is-hidden';
    // Add submit event listener to all forms
    this.forms.forEach((form) => {
      form.addEventListener('submit', this.handleFormSubmit.bind(this));
    });
    // Add input event listener to all form fields
    const formFields = document.querySelectorAll('[data-required]');
    formFields.forEach((field) => {
      field.addEventListener('input', this.handleFieldInput.bind(this));
    });
  }

  // Toggle hidden class on submit and reset form
  handleFormSubmit(event) {
    event.preventDefault();

    // Check if any required fields are empty
    const formFields = event.target.querySelectorAll('[data-required]');
    let isValid = true;
    formFields.forEach((field) => {
      if (field.value.trim() === '') {
        isValid = false;
        field.setCustomValidity('This field is required.');
      } else {
        field.setCustomValidity('');
      }
    });

    // If any required field is empty, return invalid state
    if (!isValid) {
      return;
    }

    // Proceed with form submission
    this.cardForm.classList.toggle(this.hiddenClass);
    this.cardSuccess.classList.toggle(this.hiddenClass);

    this.forms.forEach((form) => {
      form.reset();
    });
  }

  // Reset custom validity message when the field value changes
  handleFieldInput(event) {
    const field = event.target;
    field.setCustomValidity('');
  }
}

// Init class on document ready
document.addEventListener('DOMContentLoaded', () => {
  const cardManager = new CardManager();
});