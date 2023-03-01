/////////////////////////////////////////////////////////////
//                  VARIABLES
/////////////////////////////////////////////////////////////

import dogs from "/data.js"
import Dog from "/Dog.js"
// import { handleAccepted, handleRejected } from "/utils.js"
// import { handleDecision, render } from "/utils.js"
let dogNamesArray = dogs.map(dog => dog.name);
const rejectBtn = document.getElementById("reject-btn")
const acceptBtn = document.getElementById("accept-btn")
const noMoreDogsHtml = `
                <div class="no-more-container">
                    <h1>No More Dogs</h1>
                    <button class="reset-btn" id="reset-btn">
                        <img class="reset-btn-img" src="https://img.icons8.com/ios-glyphs/256/dog-sit.png" alt="dog logo"/>
                    </button>
                </div>
            `
let currentDog = getNextDog()
/////////////////////////////////////////////////////////////
//                  FUNCTIONS
/////////////////////////////////////////////////////////////

function handleClick(e) {
    if (e.target === rejectBtn || e.target === acceptBtn) {
        if (dogNamesArray.length) {
            handleDecision(e, acceptBtn, rejectBtn);
        } else {
            render(noMoreDogsHtml);
            rejectBtn.classList.add("hidden");
            acceptBtn.classList.add("hidden");
        }
    } else if (e.target.id === "profile-btn") {
        alert("profile")
    } else if (e.target.id === "logo-btn") {
        alert("logo")
    } else if (e.target.id === "chat-btn") {
        alert("chat")
    } else if (e.target.id === "reset-btn") {
        reset();
    }
}

function getNextDog() {
    const nextDogName = dogNamesArray.shift()
    const nextDogData = dogs[dogs.indexOf(getDogObject(nextDogName))]
    return nextDogData ? new Dog(nextDogData) : {}
}

function getDogObject(name) {
    return dogs.filter(dog => dog.name === name)[0]
}

function showBadge(path, wait) {
    const badge = document.getElementById("badge");
    badge.src = path;
    badge.classList.remove("hidden");
    setTimeout(() => badge.classList.add("hidden"), wait);
}

function render(string) {
    document.getElementById("profile").innerHTML = string;
}

function handleDecision(e, acceptBtn, rejectBtn) {
    if (e.target === acceptBtn) {
        showBadge("/images/badge-like.png", 1000)
        currentDog.setLiked();
    } else if (e.target === rejectBtn) {
        showBadge("/images/badge-nope.png", 1000)
    }


    acceptBtn.disabled = true;
    rejectBtn.disabled = true;

    setTimeout(() => {
        currentDog.setSwiped();
        console.log(dog);
        currentDog = getNextDog()
        console.log(nextDog);
        render(nextDog.getProfileHtml())
        acceptBtn.disabled = false;
        rejectBtn.disabled = false;
    }, 1000)
}

function reset() {
    dogNamesArray = dogs.map(dog => dog.name)
    render(getNextDog().getProfileHtml());
    rejectBtn.classList.remove("hidden");
    acceptBtn.classList.remove("hidden");
}

render(currentDog.getProfileHtml());

/////////////////////////////////////////////////////////////
//                  EVENTLISTENERS
/////////////////////////////////////////////////////////////

document.addEventListener("click", handleClick);