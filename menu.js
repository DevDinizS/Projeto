let btnMenu = document.getElementById('btn-abrir')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('menu-abre')
})

menu.addEventListener('click', () => {
    menu.classList.remove('menu-abre')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('menu-abre')
})