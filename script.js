let button = document.querySelector('#no')
let height = window.innerHeight 
let width = window.innerWidth 


button.addEventListener('mouseover',()=>{
    button.style.position = 'absolute'
    button.style.top = Math.random()*height+'px'
    button.style.left = Math.random()*width+'px'
})