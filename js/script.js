const URL_PATH = new URL(window.location.href);
const HAMBURGUER = document.getElementById("hamburguer");
const NAV_CONTAINER = document.querySelector(".content-nav-mobile");
const TOP_SPAN = document.querySelector(".hamburguer span:nth-child(1)")
const MIDDLE_SPAN = document.querySelector(".hamburguer span:nth-child(2)")
const BOTTOM_SPAN = document.querySelector(".hamburguer span:nth-child(3)")
const CARD_CAROUSEL = document.querySelector(".second_content>.row");
const VIDEO_SEASON = document.getElementById("video_season");
const VIDEO_ROCKET_PASS = document.getElementById("rocket_pass_video");
const VIDEO_DRIVE_DAYS = document.getElementById("drive_days_video");


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

window.addEventListener("resize", centerCarousel);

VIDEO_SEASON?.addEventListener('play', () => {
    document.querySelector(".season_img").style.animation = "fadeInFromBottm 1.5s .5s ease-in-out forwards";
    document.querySelectorAll(".play_button")[2].style.animation = "fadeIn 1s 2.1s ease-in-out forwards";
    document.querySelector(".down_button").style.animation = "fadeIn 1s 2.1s ease-in-out forwards";
});
VIDEO_ROCKET_PASS?.addEventListener('play', () => {
    document.querySelector(".logo_rocket_pass").style.animation = "fadeInFromBottm 2s 2.1s ease-in-out forwards";
    document.querySelector(".arrow_down_button").style.animation = "fadeIn 1.5s 3s ease-in-out forwards";
});
VIDEO_DRIVE_DAYS?.addEventListener('play', () => {
    document.querySelector(".drive_days_logo").style.animation = "fadeInFromBottm 1.5s 3.6s ease-in-out forwards";
    document.querySelectorAll(".play_button")[2].style.animation = "fadeIn 1.5s 4.5s ease-in-out forwards";
    document.querySelector(".arrow_bottom").style.animation = "fadeIn 1.5s 4.5s ease-in-out forwards";
});

function customScroll(el, event){
    const id = el.href.substr(el.href.indexOf("#") + 1);
    event.preventDefault();document.getElementById(id).scrollIntoView({behavior:'smooth'})
}

function centerCarousel(){
    if(URL_PATH.pathname === "/index.html" && window.innerWidth < 1120){
        const scrollWidth = CARD_CAROUSEL?.scrollWidth
        const widthContainer = CARD_CAROUSEL?.offsetWidth
        CARD_CAROUSEL.scrollLeft = (scrollWidth - widthContainer) / 2;
    }
}

window.onload = centerCarousel;