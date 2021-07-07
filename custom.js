const burger = document.querySelector('.burger');
const navFloat = document.querySelector('.nav-links-float');
const searchInput = document.getElementById('search-input');
const promptElement = document.querySelector('.prompt');
const submitBtn = document.getElementById('btn');
const midSection = document.querySelector('.mid-section');

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

// Consume API and parse data
function consumeAPI(){
    const searchedUrl = searchInput.value;
    const data = fetch(`https://api.shrtco.de/v2/shorten?url=${searchedUrl}`);
    console.log(typeof data);
    console.log(data.ok);
}

// CreateHTML on click
function createCardDiv(){
    const newCard = document.createElement('div');
    const inputUrl = document.createElement('div');
    const responseDiv = document.createElement('div');
    const copyBtn = document.createElement('button');
    newCard.classList.add('card');
    inputUrl.classList.add('input-url');
    responseDiv.classList.add('response');
    copyBtn.classList.add('form-btns');
    inputUrl.innerText = 'Loading...';
    copyBtn.innerText = 'Copy!';
    midSection.insertAdjacentElement('beforebegin', newCard);
    newCard.insertAdjacentElement('afterbegin', inputUrl);
    newCard.insertAdjacentElement('afterbegin', responseDiv);
    newCard.insertAdjacentElement('beforeend', copyBtn);
    responseDiv.innerText = searchInput.value;    
}
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    createCardDiv();
    consumeAPI();
});


// console.log(data.error);

// Error handler
function handleError(err){
    console.log("Error");
    console.log(err);
}