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
    }

}