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

    
// Consume API and create it dynamically on page
function returnResponse(){
    const newCard = document.createElement('div');
    const inputUrl = document.createElement('div');
    const responseDiv = document.createElement('div');
    const copyBtn = document.createElement('button');

    // Style new divs
    newCard.classList.add('card');
    inputUrl.classList.add('input-url');
    responseDiv.classList.add('response');
    copyBtn.classList.add('form-btns');
    responseDiv.innerText = 'Loading...';
    inputUrl.innerText = 'Loading...';
    copyBtn.innerText = 'Copy!';

    // Manipulate the DOM
    midSection.insertAdjacentElement('beforebegin', newCard);
    newCard.insertAdjacentElement('afterbegin', inputUrl);
    newCard.insertAdjacentElement('afterbegin', responseDiv);
    newCard.insertAdjacentElement('beforeend', copyBtn);

    // Consume the API
    const searchedUrl = searchInput.value;
    const dataPromise = fetch(`https://api.shrtco.de/v2/shorten?url=${searchedUrl}`);
    console.log(typeof dataPromise);
    dataPromise
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log(data.ok);
            responseDiv.innerText = `${data.result.original_link}`;
            inputUrl.textContent = `${data.result.short_link}`;
        })
        .catch(handleError);
        
    // Nested function: Copy to clipboard
    copyBtn.onclick = function(){
        copyBtn.innerText = 'Copied!';
        inputUrl.select;
        // This method does not function on Firefox browser.
        document.execCommand("copy");
    };

}
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    returnResponse();
});

// Error handler
function handleError(err){
    console.log("Error");
    console.log(err);
}

