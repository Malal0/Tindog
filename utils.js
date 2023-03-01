function showBadge(path) {
    const badge = document.getElementById("badge");
    badge.src = path;
    badge.classList.remove("hidden");
    setTimeout(() => badge.classList.add("hidden"), 3000);
}

function render(string) {
    document.getElementById("profile").innerHTML = string;
}

// function handleAccepted(html) {
//     showBadge("/images/badge-like.png")
//     render(html)

// }

// function handleRejected(html) {
//     showBadge("/images/badge-nope.png")
//     render(html)
// }

function handleDecision(e, html, acceptBtn, rejectBtn) {
    if (e.target === acceptBtn) {
        showBadge("/images/badge-like.png")
    } else if (e.target === rejectBtn) {
        showBadge("/images/badge-nope.png")
    }

    acceptBtn.disabled = true;
    rejectBtn.disabled = true;

    setTimeout(() => {
        render(html)
        acceptBtn.disabled = false;
        rejectBtn.disabled = false;
    }, 3000)
}

// export { handleAccepted, handleRejected }
export { handleDecision, render }