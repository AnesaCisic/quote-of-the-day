const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote() {
    const response = await fetch(apiUrl);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote();