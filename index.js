/////////////////////////////////////////////////////////////
//                  VARIABLES
/////////////////////////////////////////////////////////////

import dogs from "/data.js"
import Dog from "/Dog.js"
import { handleAccepted, handleRejected } from "/utils.js"

/////////////////////////////////////////////////////////////
//                  FUNCTIONS
/////////////////////////////////////////////////////////////

function handleClick(e) {
    if (e.target.id === "reject-btn") {
        handleRejected();
    } else if (e.target.id === "accept-btn") {
        handleAccepted();
    } else if (e.target.id === "profile-btn") {
        alert("profile")
    } else if (e.target.id === "logo-btn") {
        alert("logo")
    } else if (e.target.id === "chat-btn") {
        alert("chat")
    }
}

function render(string) {
    document.getElementById("profile").innerHTML = string;
}

render(new Dog(dogs[2]).getProfileHtml());

/////////////////////////////////////////////////////////////
//                  EVENTLISTENERS
/////////////////////////////////////////////////////////////

document.addEventListener("click", handleClick);