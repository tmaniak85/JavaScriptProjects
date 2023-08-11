let burgerBtn = document.querySelector('.burger')
let barsIco = document.querySelector('.fa-bars')
let xIco = document.querySelector('.fa-times')
let nav = document.querySelector('nav ul')

let handleNav = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    barsIco.classList.toggle('hide')
    xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)
