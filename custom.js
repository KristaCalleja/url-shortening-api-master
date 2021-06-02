// Toggle mobile menu
const navShow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links-float');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
// Prompt on input focus
const inputPrompt = () => {
    const searchInput = document.getElementById('search-input');
    const promptElement = document.getElementById('prompt');

    searchInput.addEventListener('focus', (event) => {
        promptElement.classList.toggle();
        event.target.style.outline = 'red';
    });
}

// Invoke all functions
navShow();
inputPrompt();