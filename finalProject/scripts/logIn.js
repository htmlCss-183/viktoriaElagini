class UserSignIn {
    constructor() {
        this.inputForm = document.getElementById("LoginOfForm");
        this.emailInput = document.getElementById("inputEmail");
        this.passwordInput = document.getElementById("password");
        this.submitBtn = document.getElementById("submit");
  
        this.inputForm.addEventListener("submit", this.handleFormSubmit.bind(this));
    }
  
    handleFormSubmit(event) {
        event.preventDefault();

        const mail = this.emailInput.value;
        const pass = this.passwordInput.value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.length > 0) {
            const foundUser = users.find(user => user.email === mail && user.password === pass);

            if (foundUser) {
                alert("შესვლა განხორციელდა");
                window.location.href = 'index2.html';
            } else if (users.some(user => user.email === mail)) {
                alert("პაროლი არ ემთხვევა");
            } else if (users.some(user => user.password === pass)) {
                alert("მცდარია");
            } else {
                alert("მცდარი მონაცემები");
                window.location.href = 'index10.html';
            }
        } else {
            alert("ასეთი რეგისტრირებული არ არსებობს");
        }
    }
}

const userSignIn = new UserSignIn();