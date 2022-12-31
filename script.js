let hamburger = document.querySelector(".hamburger")
let bars = document.querySelectorAll(".dash")
let navList= document.querySelector(".nav-list")

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active")
  navList.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(link=>{
  link.addEventListener("click",()=>{
  hamburger.classList.remove("active")
  navList.classList.remove("active")
})
})
