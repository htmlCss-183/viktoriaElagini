fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => showUsers(users));

function showUsers(users){
    const ul = document.createElement("ul");
    for (let user of users){
        const li = document.createElement("li");
        li.innerText = user.name;
        li.style.color = "white";
        li.classList.add("myCustomFont");
        li.style.marginLeft = "15px"; 
        li.style.fontSize = "20px";
        ul.appendChild(li);
    } result.appendChild(ul);
};
userInput.oninput = filterUsers;
function filterUsers(){
    const liElements = document.querySelectorAll("li");
    for (let li of liElements) {
        const currentName = li.innerText.toLowerCase();
        const searchText = this.value.toLowerCase();
        if (!currentName.includes(searchText))
        li.setAttribute('hidden',true);
    else li.removeAttribute('hidden');
    }
};