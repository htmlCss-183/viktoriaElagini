
const password = document.getElementById("pass");
const form = document.querySelector("form");
const username = document.getElementById('uname').value;

form.addEventListener("submit", (e) => {
    const errors = [];

    if (password.value.length < 8) {
        errors.push("Password is not valid, it must be at least 8 characters");
    }

    if (errors.length > 0) {
        e.preventDefault(); // Prevent the form submission if there are errors
        // You can handle the errors array here, for example, display error messages.
        alert(errors.join("\n")); // Display error messages in an alert
    }
});