const loginInput = document.querySelector("#LogIn-Form input");
const loginForm = document.querySelector("#LogIn-Form");
const link = document.querySelector('a')
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME ='hidden'
const USERNAME_KEY = 'username'
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting()

}
function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreeting()
}

