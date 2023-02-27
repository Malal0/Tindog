function showBadge(path) {
    const badge = document.getElementById("badge");
    badge.src = path;
    badge.classList.remove("hidden");
    setTimeout(() => badge.classList.add("hidden"), 3000);
}

function handleAccepted() {
    showBadge("/images/badge-like.png")
}

function handleRejected() {
    showBadge("/images/badge-nope.png")
}

export { handleAccepted, handleRejected }