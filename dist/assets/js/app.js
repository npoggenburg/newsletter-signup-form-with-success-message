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
    }

    // Toggle hidden class on submit and reset form
    handleFormSubmit(event) {
        event.preventDefault();
        this.cardForm.classList.toggle(this.hiddenClass);
        this.cardSuccess.classList.toggle(this.hiddenClass);
        this.forms.forEach((form) => {
            form.reset();
        });
    }
}

// Init class on document ready
document.addEventListener('DOMContentLoaded', () => {
    const cardManager = new CardManager();
});