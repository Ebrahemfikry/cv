let skills = document.querySelector(".skills");
let skillsProg = document.querySelectorAll(".skills .box .progress-bar");

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 150) {
        skillsProg.forEach((span) => {
            span.style.width = span.dataset.width;
        })

    }
}
