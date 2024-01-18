class UserRegistration {
    constructor() {
        this.inputForm = document.querySelector(".formOfInput");
        this.emailInput = document.querySelector(".eMail");
        this.passwordInput = document.querySelector(".password");
        this.submitBtn = document.querySelector(".btn");

        this.inputForm.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const emailValue = this.emailInput.value;
        const passwordValue = this.passwordInput.value;

        if (this.validateEmail(emailValue) && this.validatePassword(passwordValue)) {

            if (!this.isUserExist(emailValue)) {
                const users = this.getUsers();
                users.push({ email: emailValue, password: passwordValue });
                this.saveUsers(users);

                alert("შენი მონაცემები შენახულია!");

                this.emailInput.value = "";
                this.passwordInput.value = "";
            } else {
                alert("მეილი უკვე გამოყენებულია... სხვა სცადეთ!");
            }

        } else {
            alert("პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან,დიდი ასოსგან და რიცხვისგან");
        }
    }

    validateEmail(email) {
        const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
        return emailRegex.test(email);
    }

    validatePassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,}$/;
        return passwordRegex.test(password);
    }

    getUsers() {
        const storedUsers = localStorage.getItem("users");

        if (storedUsers) {
            return JSON.parse(storedUsers);
        } else {
            return [];
        }
    }

    saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    isUserExist(email) {
        const users = this.getUsers();
        return users.some((user) => user.email === email);
    }
}

const userRegistration = new UserRegistration();