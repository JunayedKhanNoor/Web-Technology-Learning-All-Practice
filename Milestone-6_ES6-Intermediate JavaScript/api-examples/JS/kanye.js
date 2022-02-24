const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
} 
const displayQuote = quote =>{
    const quoteElement = document.getElementById('quote');
   // const p = document.createElement('p');
   // p.innerText = quote.quote;
   // quoteElement.appendChild(p);
   quoteElement.innerText = quote.quote;
}