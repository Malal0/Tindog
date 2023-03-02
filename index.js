/////////////////////////////////////////////////////////////
//                  VARIABLES
/////////////////////////////////////////////////////////////

import dogs from "/data.js"
import Dog from "/Dog.js"
let dogNamesArray = dogs.map(dog => dog.name);
const rejectBtn = document.getElementById("reject-btn");
const acceptBtn = document.getElementById("accept-btn");
const noMoreDogsHtml = `
                <div class="no-more-container">
                    <p class="no-more-txt">No More Dogs</p>
                    <button class="reset-btn" id="reset-btn">
                        <img class="reset-btn-img" src="https://img.icons8.com/ios-glyphs/256/dog-sit.png" alt="dog logo"/>
                        </button>
                    <p class="no-more-txt">click the dog to restart</p>
                </div>
            `;
let currentDog = getNextDog();
/////////////////////////////////////////////////////////////
//                  FUNCTIONS
/////////////////////////////////////////////////////////////

function handleClick(e) {
    if (e.target === rejectBtn || e.target === acceptBtn) {
        handleDecision(e, acceptBtn, rejectBtn);
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

function showBadge(e, wait) {
    const badge = document.getElementById(`${e.target.dataset.badge}`);
    badge.classList.remove("hidden");
    setTimeout(() => badge.classList.add("hidden"), wait);
}

function render(string) {
    document.getElementById("profile").innerHTML = string;
}

function handleDecision(e, acceptBtn, rejectBtn) {
    showBadge(e, 2000);
    currentDog.setSwiped();
    if (e.target === acceptBtn) {
        currentDog.setLiked();
    }
    console.log(currentDog);
    if (dogNamesArray.length) {
        acceptBtn.disabled = true;
        rejectBtn.disabled = true;

        setTimeout(() => {
            currentDog = getNextDog();
            render(currentDog.getProfileHtml());
            // console.log(currentDog);
            acceptBtn.disabled = false;
            rejectBtn.disabled = false;
        }, 2000);
    } else {
        setTimeout(() => {
            render(noMoreDogsHtml);
            rejectBtn.classList.add("hidden");
            acceptBtn.classList.add("hidden");
        }, 2000);
    }
}

function reset() {
    // dogs.map(dog => {
    //     dog.hasBeenLiked = false;
    //     dog.hasBeenSwiped = false;
    // })
    // not sure if I should seperate this map ⬆ and the other map ⬇
    // dogNamesArray = dogs.map(dog => dog.name);
    dogNamesArray = dogs.map(dog => {
        dog.hasBeenLiked = false;
        dog.hasBeenSwiped = false;
        return dog.name
    });
    render(getNextDog().getProfileHtml());
    rejectBtn.classList.remove("hidden");
    acceptBtn.classList.remove("hidden");
}

render(currentDog.getProfileHtml());

/////////////////////////////////////////////////////////////
//                  EVENTLISTENERS
/////////////////////////////////////////////////////////////

document.addEventListener("click", handleClick);