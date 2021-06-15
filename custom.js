const burger = document.querySelector('.burger');
const navFloat = document.querySelector('.nav-links-float');
const searchInput = document.getElementById('search-input');
const promptElement = document.querySelector('.prompt');
const inputtedUrl = document.getElementById('url');
const responseElement = document.getElementById('response');
const cardContainer = document.querySelector('.card-container');
const newCardElement = document.createElement('div');

// Toggle mobile menu
const navShow = () => {
    burger.addEventListener('click', () => {
        navFloat.classList.toggle('nav-active');
    });
}

// Prompt on input focus
const inputPrompt = () => {
    searchInput.addEventListener('focus', () => {
        promptElement.classList.toggle('prompt-active');
        searchInput.classList.toggle('search-input-active');
    });
    searchInput.addEventListener('blur', (event) =>{
        event.target.style.border = '2px green solid';
        event.target.style.color = 'green';
        promptElement.classList.toggle('prompt-active');
    });
}

// Call API
const fetchShorterUrl = (url) => {
    // GET Command
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(response => response.json())
    .then((data) => {
        const resultOriginal = data.result.original_link;
        const originalLink = `${resultOriginal}`;
        inputtedUrl.insertAdjacentHTML("beforeend", originalLink);
        const shortLink = data.result.short_link2;
        const shortenedLink = `${shortLink}`;
        responseElement.insertAdjacentHTML("beforeend", shortenedLink);
    });
    
}

const addNewCard = () => {
    form.addEventListener('submit', () => {
        event.preventDefault();
        console.log('adding...');
        newCardElement.setAttribute('class', 'card');
        cardContainer.appendChild(newCardElement);
    });
}

const updateResultList = (event) => {
    event.preventDefault();
    fetchShorterUrl(searchInput.value);
}

form.addEventListener('submit', updateResultList);
// Invoke all functions
navShow();
inputPrompt();
addNewCard();
fetchShorterUrl();