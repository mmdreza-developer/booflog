let bars = document.getElementById("icon-bars")
let closedMenu = document.querySelector(".closed");
let menuMobile = document.getElementById("side-menu-mobile");
let bgDark = document.getElementById("bg-dark-sidemenu")
let menuSection = document.getElementById("menu-section")
bars.onclick = () => {
    menuMobile.style.right = 0;
    bgDark.style.display = "block";
    document.body.style.overflow = "hidden"
}
bgDark.onclick = () => {
    menuMobile.style.right = "-300px";
    bgDark.style.display = "none";
    document.body.style.overflow = "visible"
}

closedMenu.onclick = () => {
    menuMobile.style.right = "-300px";
    bgDark.style.display = "none";
    document.body.style.overflow = "visible"
}
let header = document.querySelector("header")
// Toggle Menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && window.innerWidth > 991) {
        menuSection.style.transform = `translateY(0px)`;
        menuSection.style.opacity = "1";
    }
    else {
        menuSection.style.transform = `translateY(-60px)`;
        header.style.boxShadow = "0 0 10px #b6b6b6"
        menuSection.style.opacity = "0";
        menuSection.style.paddingBottom = "0";
    }
    prevScrollpos = currentScrollPos;
};

//Card
let marks = document.querySelectorAll(".BoxBookMarkPost a i")

marks.forEach(mark => {
    mark.onclick = () => {
        mark.classList.toggle("fa-solid")
    }
})
let scrollTop = document.getElementById("arrowScrollTop")
scrollTop.onclick = () => {
    window.scrollTo(0, 0)
}
document.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        scrollTop.style.bottom = "10px"
    } else {
        scrollTop.style.bottom = "-60px"
    }
})

let personNames = document.querySelectorAll(".cardPersonNameProfile")
let firstWordNames = document.querySelectorAll(".firstWordNamePersonCard")
let iconProfile = document.querySelectorAll(".cardImgProfile")
let icons = document.querySelectorAll(".cardImgProfile i")
let firstWords = []
let word;
personNames.forEach(name => {
    word = name.textContent.charAt(0)
    return firstWords.push(word)
})
let wordName = [...firstWordNames]
for (let i = 0; i < firstWords.length; i++) {
    wordName[i].innerHTML += firstWords[i]
}
let cardIcons = [...iconProfile]
for (let x = 0; x < cardIcons.length; x++) {
    if (!icons[x].getAttribute("class").includes("disable")) {
        icons[x].style.display = "block";
        wordName[x].style.display = "none";
    } else {
        icons[x].style.display = "none";
        wordName[x].style.display = "block";
    }
}

// Likes

const heartGreen = document.querySelectorAll(".heartGreen")
const heartRed = document.querySelectorAll(".heartRed")
heartGreen.forEach(like => {
    return like.onclick = () => {
        like.classList.toggle("fa-solid")
    }
})
heartRed.forEach(like => {
    return like.onclick = () => {
        like.classList.toggle('fa-solid')
    }
})