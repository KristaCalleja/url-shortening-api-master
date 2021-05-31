const navShow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links-float');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navShow();