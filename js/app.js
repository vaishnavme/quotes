const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#btn');

button.addEventListener('click', getQuote);

function getQuote() {
     fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
     .then(res => res.json())
     .then(data => {
         quote.innerHTML = data[0].quote;
         author.innerHTML = data[0].character;
         document.getElementById('img').src = data[0].image;
     })
}