const password = document.getElementById("password");
const form = document.querySelector("form");
const username = document.getElementById('username').value;

form.addEventListener("submit", (e) => {
    const errors = [];

    if (password.value.length < 8) {
        errors.push("Password is not valid, it must be at least 8 characters");
    }

    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
    }
});