// Variables
let submitButton = document.getElementById("submit-button");
let fullNameInput = document.getElementById("fullname");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");

// Email Format Checker
let emailFormatValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form
let submitForm = function () {
    let formData = {};
    let errors = [];

    // Validate Full Name
    if (fullNameInput.value.trim()) {
        formData.fullName = fullNameInput.value.trim();
    } else {
        errors.push("Full name is missing");
    }

    // Validate Email
    if (emailInput.value.trim()) {
        if (emailFormatValidate.test(emailInput.value.trim())) {
            formData.email = emailInput.value.trim();
        } else {
            errors.push("Invalid Email format");
        }
    } else {
        errors.push("Email is missing");
    }

    // Validate Message
    if (messageInput.value.trim()) {
        formData.message = messageInput.value.trim();
    } else {
        errors.push("Message name is missing");
    }

    // Form Feedback
    if (errors.length > 0) {
        console.error("ERRORS", errors);  
    } else {
        console.log("COLLECTED DATA", formData);
    }
}

submitButton.onclick = function () {
    submitForm();
};
