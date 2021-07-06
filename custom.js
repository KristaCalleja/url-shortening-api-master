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
    copyBtn.innerText = 'Copy!';
    midSection.insertAdjacentElement('beforebegin', newCard);
    newCard.insertAdjacentElement('afterbegin', inputUrl);
    newCard.insertAdjacentElement('afterbegin', responseDiv);
    newCard.insertAdjacentElement('beforeend', copyBtn);
}
submitBtn.addEventListener('click', createCardDiv);

// Add loading dummy text on submit
function addLoadingText(){
    inputtedUrl.textContent = 'loading...';
    responseCode.textContent = 'loading...';
}
submitBtn.addEventListener('click', function(){
    console.log('it got clicked.');
    event.preventDefault();
});

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

// function handleError(err){
//     console.log("Error");
//     console.log(err);
// }

// displayShorterUrl("https://frontendmentor.io");




    
