const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menu-close')
const nav = document.querySelector('.nav')
const ul = document.querySelector('.ul')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
  nav.classList.add('open')
  ul.classList.add('teste')
  menuClose.style.display = 'block'
  body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', () => {
  nav.classList.remove('open')
  ul.classList.remove('teste')
  menuClose.style.display = 'none'
  body.style.overflow = 'unset'
})

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  if(width > 800) {
    nav.classList.remove('open')
    ul.classList.remove('teste')
    menuClose.style.display = 'none'
    body.style.overflow = 'unset'
  }
})