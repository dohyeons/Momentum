const loginInput = document.querySelector("#LogIn-Form input");
const loginForm = document.querySelector("#LogIn-Form");
const link = document.querySelector('a')
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME ='hidden'
const USERNAME_KEY = 'username'
const savedUsername = localStorage.getItem(USERNAME_KEY);
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add('hidden');
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username)

}
function paintGreeting(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreeting(savedUsername)
}

