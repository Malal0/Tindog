// Remember to import the data and Dog class!
/////////////////////////////////////////////////////////////
//                  VARIABLES
/////////////////////////////////////////////////////////////

const badge = document.getElementById("badge");

/////////////////////////////////////////////////////////////
//                  FUNCTIONS
/////////////////////////////////////////////////////////////

function handleClick(e) {
    if (e.target.id === "reject-btn") {
        showBadge("/images/badge-nope.png")
    } else if (e.target.id === "accept-btn") {
        showBadge("/images/badge-like.png")
    }
}

function showBadge(path) {
    badge.src = path;
    badge.classList.remove("hidden");
    setTimeout(() => badge.classList.add("hidden"), 4000)
}

/////////////////////////////////////////////////////////////
//                  EVENTLISTENERS
/////////////////////////////////////////////////////////////

document.addEventListener("click", handleClick);