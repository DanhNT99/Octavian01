const $ = document.querySelector.bind(document)

const nodeBar = $('.icon-bar')
const menu = $('.menu')
const nodeClose = $('.menu-icon')
const body = $('body')
nodeBar.onclick = function() {
    menu.classList.add('menu-show')
}
nodeClose.onclick = function () {
    menu.classList.remove('menu-show')
}
window.onclick = function (e) {
    if(!e.target.closest('.menu') && !e.target.closest('.icon-bar')) {
        menu.classList.remove('menu-show')
    }
}
window.onload = function() {
    setBgSizeForBody ()
}
window.onresize = function() {
    setBgSizeForBody ()
}
function setBgSizeForBody () {
    let heightHeader = $('.header').offsetHeight
    let heightHero = $('.hero').offsetHeight
    body.style.backgroundSize=`100% ${heightHeader + heightHero}px`
}