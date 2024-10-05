let btnMenu = document.getElementById('btn-abrir')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let botao = document.getElementById('botao')
let body = document.querySelector('body')


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
})