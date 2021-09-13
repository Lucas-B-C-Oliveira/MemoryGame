function onLoad() {
    const dependences = {
        screen: Screen, // the Screen class is global
        util: Util
    }

    //boot up GameManager
    const gameManager = new GameManager(dependences)
    gameManager.bootUp()
}

window.onload = onLoad