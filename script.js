btn = document.getElementById("menu-btn")
nav = document.getElementById("menu")

btn.addEventListener('click',()=>{
    btn.classList.toggle('open')
    nav.classList.toggle("hidden")
    nav.classList.toggle("flex")
})