const HAMBURGUER = document.getElementById("hamburguer");
const NAV_CONTAINER = document.querySelector(".content-nav-mobile");
const TOP_SPAN = document.querySelector(".hamburguer span:nth-child(1)")
const MIDDLE_SPAN = document.querySelector(".hamburguer span:nth-child(2)")
const BOTTOM_SPAN = document.querySelector(".hamburguer span:nth-child(3)")

HAMBURGUER.onclick = () => {
    const IS_TOGGLED = NAV_CONTAINER.classList.toggle("active");
    if(!IS_TOGGLED){
        TOP_SPAN.style.animation = "hamburguer-top-reverse .2s ease forwards"
        MIDDLE_SPAN.style.animation = "hamburguer-middle-reverse .2s ease forwards"
        BOTTOM_SPAN.style.animation = "hamburguer-bottom-reverse .2s ease forwards"
        NAV_CONTAINER.style.animation = "hiddenNav .5s ease forwards";
    }else{
        TOP_SPAN.style.animation = "hamburguer-top .2s ease forwards"
        MIDDLE_SPAN.style.animation = "hamburguer-middle .2s ease .1s forwards"
        BOTTOM_SPAN.style.animation = "hamburguer-bottom .2s ease .1s forwards"
        NAV_CONTAINER.style.animation = "showNav .5s ease forwards";
    }
}