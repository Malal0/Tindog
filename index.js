// Remember to import the data and Dog class!
/////////////////////////////////////////////////////////////
//                  VARIABLES
/////////////////////////////////////////////////////////////

import dogs from "/data.js"
import Dog from "/Dog.js"
// console.log(dogs)
const rex = new Dog(dogs[0]);
const bella = new Dog(dogs[1]);
const teddy = new Dog(dogs[2]);
console.log(teddy.getName());
const badge = document.getElementById("badge");

/////////////////////////////////////////////////////////////
//                  FUNCTIONS
/////////////////////////////////////////////////////////////

function handleClick(e) {
    if (e.target.id === "reject-btn") {
        showBadge("/images/badge-nope.png")
    } else if (e.target.id === "accept-btn") {
        showBadge("/images/badge-like.png")
    } else if (e.target.id === "profile-btn") {
        alert("profile")
    } else if (e.target.id === "logo-btn") {
        alert("logo")
    } else if (e.target.id === "chat-btn") {
        alert("chat")
    }
}

function showBadge(path) {
    badge.src = path;
    badge.classList.remove("hidden");
    setTimeout(() => badge.classList.add("hidden"), 3000);
}

function profile(data) {
    const { age, avatar, bio, name } = data
    return `
            <img class="profile-img" src="/${avatar}" alt="${name} profile image" />
            <div class="profile-info">
                <p class="profile-info-title">${name}, ${age}</p>
                <p>${bio}</p>
            </div>
    `
}

function render() {
    document.getElementById("profile").innerHTML = profile(dogs[1]);
}

render();

/////////////////////////////////////////////////////////////
//                  EVENTLISTENERS
/////////////////////////////////////////////////////////////

document.addEventListener("click", handleClick);