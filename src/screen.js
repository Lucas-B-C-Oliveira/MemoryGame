
const CONTENT_ID = "content"

class Screen {
    static getCardOfImageInHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img src="${item.imgPath}" name="${item.name} class="card-img-top" alt="...">
            </div>
            <br />
        </div>
        `
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
s
    static updateImages(itens) {
        const htmlCode = Screen.generateHtmlStringFromImage(itens)
        Screen.changeHtmlContent(htmlCode)
    }
}