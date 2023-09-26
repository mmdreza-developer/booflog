window.addEventListener("scroll", () => {
    let contentLeftSideBar = document.getElementById("contentLeftSideBar")

    if (window.pageYOffset > 600 && window.innerWidth > 991) {
        contentLeftSideBar.style.display = "none"
    } else {
        contentLeftSideBar.style.display = "block"
    }
})

var btnFallowMe = document.getElementById("btnFallowMe")

btnFallowMe.addEventListener("click", () => {
    btnFallowMe.classList.toggle('btnFallowing')
})

