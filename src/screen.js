
const CONTENT_ID = "content"
const PLAY_BTN_ID = "play"
const MESSAGE_ID = "message"
const CLASS_INVISIBLE = "invisible"
const MESSAGE = {
    sucess: {
        text: 'Correct Combination!!!',
        class: 'alert-sucess'
    },
    erro: {
        text: 'Combination Incorrect!!!',
        class: 'alert-danger'
    }
}

class Screen {
    static getCardOfImageInHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verifySelection('${item.id}', '${item.name}')">
                <img src="${item.imgPath}" name="${item.name}" class="card-img-top" alt="...">
            </div>
            <br />
        </div>
        `
    }

    static configureVerifySelectionButton(funcOnClick) {
        window.verifySelection = funcOnClick
    }

    static changeHtmlContent(htmlCode) {
        const content = document.getElementById(CONTENT_ID)
        content.innerHTML = htmlCode
    }

    static generateHtmlStringFromImage(itens) {
        // For each item in the list, it will execute the getCardOfImageInHtml function
        // at the end, it will concatenate everything into a single string
        // change from array to String
        return itens.map(Screen.getCardOfImageInHtml).join('')
    }

    static updateImages(itens) {
        const htmlCode = Screen.generateHtmlStringFromImage(itens)
        Screen.changeHtmlContent(htmlCode)
    }

    static configurePlayButton(funcOnClick) {
        const btnPlay = document.getElementById(PLAY_BTN_ID)
        btnPlay.onclick = funcOnClick
    }

    static showHeroes(heroName, imgPath) {
        const htmlElements = document.getElementsByName(heroName)
        // For Each element finded in screen, change image for initial imagem of him
        htmlElements.forEach(item => (item.src = imgPath))
    }

    static showMessage(sucess = true ) {
        const element = document.getElementById(MESSAGE_ID)
        if(sucess) {
            element.classList.remove(MESSAGE.erro.class)
            element.classList.add(MESSAGE.sucess.class)
            element.innerText = MESSAGE.sucess.text
        }
        else{
            element.classList.remove(MESSAGE.sucess.class)
            element.classList.add(MESSAGE.erro.class)
            element.innerText = MESSAGE.erro.text
        }
        element.classList.remove(CLASS_INVISIBLE)
    }
}