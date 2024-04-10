const header = document.querySelector('.header-line')
const closeBtn = document.querySelector('.button')

closeBtn.addEventListener('click',function(){
    header.classList.add('none')
})

const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

burger.addEventListener('click',function(){
    nav.classList.toggle('offMob')
})