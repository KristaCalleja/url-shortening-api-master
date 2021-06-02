const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links-float');
const searchInput = document.getElementById('search-input');
const promptElement = document.getElementById('prompt');
const inputtedUrl = document.getElementById('url');
const responseElement = document.getElementById('response');

// Toggle mobile menu
const navShow = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

// Prompt on input focus
const inputPrompt = () => {
    searchInput.addEventListener('focus', (event) => {
        promptElement.classList.toggle();
        event.target.style.outline = 'red';
    });
}
// Call API
const fetchShorterUrl = (url) =>{
    // GET Command
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(response => response.json())
    .then((data) => {
        const originalLink = data.result.code;
        inputtedUrl.insertAdjacentHTML( 'beforeend', originalLink)
    })
}

const updateResultList = (event) => {
    event.preventDefault();
    fetchShorterUrl(searchInput.value);
}

form.addEventListener('submit', updateResultList);
// Invoke all functions
navShow();
inputPrompt();
fetchShorterUrl();