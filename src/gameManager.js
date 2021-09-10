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
        this.iconDefault = "./assets/default.png"
        this.hiddenHeroes = []
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
        // Wait 1 sec to update Screen
        setTimeout(() => {
            this.hideHeroes(copies)
        }, 1000);
    }

    hideHeroes(heroes) {
        // Change image of all heroes for default icon
        // as we did in the constructor, let's extract only what is needed

        // using the syntax ({ key: 1}) we're saying we're going to return
        // what's inside the relatives
        // when we don't use : (example of id), JS understands that the name
        // is the same as the value. E.g. id: id, becomes id.

        const hiddenHeroes = heroes.map(( {name, id} ) => ({
            id,
            name,
            imgPath: this.iconDefault
        }))

        //update screen with hidden heroes
        this.screen.updateImages(hiddenHeroes)
        // save heroes for work with they later
        this.hiddenHeroes = hiddenHeroes
    }

    play() {
        this.shuffle()
    }

}