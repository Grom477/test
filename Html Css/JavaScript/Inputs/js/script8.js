const box = document.querySelector(".box");
const box2 = document.querySelector(".box2");
const overlay = document.querySelector(".overlay")
const openButton = document.querySelector(".btn-open")
const closeButton = document.querySelector(".btn-close")
const closeButton2 = document.querySelector(".btn-close2")
const submitButton = document.querySelector(".btn")

const openBox = () => {
    box.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const closeBox = () => {
    box.classList.add("hidden")
    box2.classList.add("hidden")
    overlay.classList.add("hidden")
}

openButton.addEventListener("click", openBox)
closeButton.addEventListener("click", closeBox)
overlay.addEventListener("click", closeBox) 
submitButton.addEventListener("click", ()=>{
    box.classList.add("hidden")
    box2.classList.remove("hidden")
})
closeButton2.addEventListener("click", closeBox)


