// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.matches = 0
    }

    setSwiped() {
        this.hasBeenSwiped = true
    }

    setLiked() {
        this.hasBeenLiked = true
    }

    getProfileHtml() {
        const { age, avatar, bio, name } = this
        return `
                <img class="profile-img" src="${avatar}" alt="${name} profile image" />
                <div class="profile-info">
                    <p class="profile-info-title">${name}, ${age}</p>
                    <p>${bio}</p>
                </div>
        `
    }
}

export default Dog