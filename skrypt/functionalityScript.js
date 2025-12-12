const heroOverlay = document.querySelector(".overlay");

window.addEventListener("scroll", () => {
    let max = 800; //im wieksze tym wolniej ciemnieej

    let v = window.scrollY / max;

    if (v > 1) v = 1;
    if (v < 0) v = 0;

    heroOverlay.style.opacity = v;
})