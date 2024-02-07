var swiper = new Swiper(".mySwiper", {
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});


document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.btn-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}