// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.matches = 0
    }
    getName() {
        return this
    }
}

export default Dog