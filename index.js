let getUl = document.querySelectorAll(".allUl .first");
let getContent = document.querySelectorAll(".for-tabs-content .tabs-body ")


getUl.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        getUl.forEach(tab => {
            tab.classList.remove("active")
        })
        getContent.forEach(tab => {
            tab.classList.remove("active")
        })
        getUl[index].classList.add("active")
        getContent[index].classList.add("active")
    })
})



