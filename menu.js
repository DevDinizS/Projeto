let btnMenu = document.getElementById('btn-abrir')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let botao = document.getElementById('botao')
let body = document.querySelector('body')
var imgDark = "imagens/Filipe-wb-150-t.png";
var imgLight = "imagens/Filipe-150bw.png";

btnMenu.addEventListener('click', () => {
    menu.classList.add('menu-abre')
})

menu.addEventListener('click', () => {
    menu.classList.remove('menu-abre')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('menu-abre')
})

botao.addEventListener('click', () => {
    botao.classList.toggle('light')
    body.classList.toggle('light')
    footer.classList.toggle('light')
})

function trocar() {
    document.getElementById('figura').src = imgDark;
    document.getElementById('figura1').src = imgDark;
    
    let aux = imgDark;
    imgDark = imgLight;
    imgLight = aux;
}