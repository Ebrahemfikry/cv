let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll" , () => {
    let top = document.documentElement.scrollTop;
    el.style.width = `${(top / height) * 100}%`;
})