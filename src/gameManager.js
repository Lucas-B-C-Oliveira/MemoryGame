class GameManager {

    // If you send an Obj = { screen: 1, age: 2, etc: 3}
    // will ignore the rest of the properties and get only the screen property

    constructor({ screen }) {
        this.screen = screen

        this.earlyHeroes = [
            { imgPath: './assets/batman.png', name: 'batman'},
            { imgPath: './assets/flash.png', name: 'flash'},
            { imgPath: './assets/spiderman.png', name: 'spiderman'},
            { imgPath: './assets/thor.png', name: 'thor'},
        ]
    }

    //To use this, we don't need to use static
    bootUp() {
        // get all functuions of screen class
        // put all heroes in screen/visible
        this.screen.updateImages(this.earlyHeroes)
        // bind(this) -> force screen to use THIS of the GameManager
        this.screen.configurePlayButton(this.play.bind(this))
    }

    shuffle() {
        const copies = this.earlyHeroes
        // Duplicate heros
        .concat(this.earlyHeroes)
        // Put id in each item of copies
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5 })
        })
        // random order
        .sort(() => Math.random() - 0.5)
        
        this.screen.updateImages(copies)
    }

    play() {
        this.shuffle()
    }

}