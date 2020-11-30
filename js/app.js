const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#btn');

const loading = document.querySelector("#spinner");

button.addEventListener('click', getQuote);

function showSpinner() {
    loading.className = "show";
    setTimeout(() => {
        loading.className = loading.className.replace("show", "");
    }, 5000);
}

function hideSpinner() {
    loading.className = loading.className.replace("show", "");
}

function errorHandler(error) {
    hideSpinner()
    quote.innerHTML = "Error " + error;
}

function getQuote() {
    showSpinner()
     fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
     .then(res => res.json())
     .then(data => {
         hideSpinner()
         quote.innerHTML = data[0].quote;
         author.innerHTML = data[0].character;
         document.getElementById('img').src = data[0].image;
     })
     .catch(errorHandler)
}