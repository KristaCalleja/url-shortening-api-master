const burger = document.querySelector('.burger');
const navFloat = document.querySelector('.nav-links-float');
const searchInput = document.getElementById('search-input');
const promptElement = document.querySelector('.prompt');
const submitBtn = document.getElementById('btn');

// Toggle mobile menu
function navShow() {
    navFloat.classList.toggle('nav-active');
}
burger.addEventListener('click', navShow);

// Prompt on input focus
function inputPrompt() {
    promptElement.classList.toggle('prompt-active');
    searchInput.classList.toggle('search-input-active');
}
searchInput.addEventListener('focus', inputPrompt);

// CreateHTML on click
function createCardDiv(){
    const midSection = document.querySelector('.mid-section');
    const newCard = document.createElement('div');
    const inputUrl = document.createElement('div');
    const responseDiv = document.createElement('div');
    const copyBtn = document.createElement('button');
    newCard.classList.add('card');
    inputUrl.classList.add('input-url');
    responseDiv.classList.add('response');
    copyBtn.classList.add('form-btns');
    inputUrl.textContent = 'Loading...';
    responseDiv.textContent = 'Loading...';
    copyBtn.innerText = 'Copy!';
    midSection.insertAdjacentElement('beforebegin', newCard);
    newCard.insertAdjacentElement('afterbegin', inputUrl);
    newCard.insertAdjacentElement('afterbegin', responseDiv);
    newCard.insertAdjacentElement('beforeend', copyBtn);
}
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    createCardDiv();
});

// Error handler
function handleError(err){
    console.log("Error");
    console.log(err);
}
// function displayShorterUrl(url){
//     const searchValue = document.getElementById('search-input');
//     const searchedUrl = searchValue.value;
//     console.log(searchedUrl);
    

    
//     const response = fetch(`https://api.shrtco.de/v2/shorten?url=${searchedUrl}`);
//     const data = response.json();
    
//     console.log(data);
//     console.log(data.ok);
//     console.log(data.error);
//     inputtedUrl.textContent = `${data.ok}`;
//     responseCode.textContent = `${data.error}`;
// }
// displayShorterUrl("https://frontendmentor.io");