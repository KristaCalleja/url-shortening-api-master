const burger = document.querySelector('.burger');
const navFloat = document.querySelector('.nav-links-float');
const searchInput = document.getElementById('search-input');
const promptElement = document.querySelector('.prompt');
const inputtedUrl = document.getElementById('url');
const responseElement = document.getElementById('response');

// Toggle mobile menu
const navShow = () => {
    burger.addEventListener('click', () => {
        navFloat.classList.toggle('nav-active');
    });
}

// Prompt on input focus
const inputPrompt = () => {
    searchInput.addEventListener('focus', () => {
        promptElement.classList.toggle('prompt');
    });
    searchInput.addEventListener('blur', (event) =>{
        event.target.style.border = '2px green solid';
        event.target.style.outline = 'green';
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