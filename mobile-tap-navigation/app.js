const links = document.querySelectorAll(".navLinks ul li")
const contents = document.querySelectorAll(".content")

links.forEach((btn, idx) => {
    btn.addEventListener("click",()=>{
        hideAllContents()
        hideAllBtns()

        btn.classList.add("active")
        contents[idx].classList.add("show")
    })
})

function hideAllContents(){
    contents.forEach((content) => content.classList.remove("show"))
}

function hideAllBtns(){
    links.forEach((item) => item.classList.remove("active"))
}