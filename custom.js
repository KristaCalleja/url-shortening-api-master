const burger = document.querySelector('.burger');
const navFloat = document.querySelector('.nav-links-float');
const submitBtn = document.getElementById('btn');
const searchInput = document.getElementById('search-input');
const promptElement = document.querySelector('.prompt');
const copyButton = document.getElementById('copy-btn');

// Toggle mobile menu
const navShow = () => {
    burger.addEventListener('click', () => {
        navFloat.classList.toggle('nav-active');
    });
}

navShow();
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
inputPrompt();

submitBtn.addEventListener('click', () => {
    function fetchShorterUrl(url) {
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(response => response.json())
            .then(data => addNewCard(data))
                const resultOriginal = data.result.original_link;
                const originalLink = `${resultOriginal}`;
                const shortLink = data.result.short_link2;
                const shortenedLink = `${shortLink}`;
                console.log(originalLink);
                console.log(shortenedLink);
    }

        function addNewCard(data){
            
            for (const q of data) {
                // Find the container where we will attach everything to
                const cardContainer = document.querySelector('.card-container');
            // Create all necessary elements
            const newCard = document.createElement('div');
            const inputUrl = document.createElement('div');
            const responseDiv = document.createElement('div');
            const copyBtn = document.createElement('button');
            console.log('adding new card...');
            
            // Add classes and ids
            newCard.setAttribute('class', 'card');
            inputUrl.setAttribute('class', 'input-url');
            responseDiv.setAttribute('class', 'response');
            copyBtn.setAttribute('class', 'form-btns');
            
            // Grab data and insert into created elements
            inputUrl.insertAdjacentHTML("beforeend", originalLink);
            responseDiv.insertAdjacentHTML("beforeend", shortenedLink);

            // Append everything to cardContainer
            newCard.appendChild(inputUrl, responseDiv);
            cardContainer.appendChild(newCard);
        }
    }

// Invoke all functions
fetchShorterUrl();
})