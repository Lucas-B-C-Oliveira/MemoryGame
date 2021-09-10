function onLoad() {
    const dependences = {
        screen: Screen // the Screen class is global
    }

    //boot up GameManager
    const gameManager = new GameManager(dependences)
    gameManager.bootUp()
}

window.onload = onLoad