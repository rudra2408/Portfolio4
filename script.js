// form-validation.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentsInput = document.getElementById('comments');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;
        let errorMessage = '';

        // Clear previous error messages
        clearErrors();

        // Validate name input
        if (nameInput.value.trim() === '') {
            isValid = false;
            showError(nameInput, 'Name is required.');
        }

        // Validate email input
        if (emailInput.value.trim() === '') {
            isValid = false;
            showError(emailInput, 'Email is required.');
        } else if (!validateEmail(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, 'Please enter a valid email address.');
        }

        // Validate comments input
        if (commentsInput.value.trim() === '') {
            isValid = false;
            showError(commentsInput, 'Comments are required.');
        }

        // If form is valid, show success message or handle form submission
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Reset the form fields
        }
    });

    // Function to show error messages
    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
        input.classList.add('input-error');
    }

    // Function to clear previous error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());

        const inputErrors = document.querySelectorAll('.input-error');
        inputErrors.forEach(input => input.classList.remove('input-error'));
    }

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
