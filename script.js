const quoteText = document.querySelector(".quote"),
quoteButton = document.querySelector("button"),
quoteAuthor = document.querySelector(".name"),
soundButton = document.querySelector(".sound"),
copyButton = document.querySelector(".copy"),
twitterButton = document.querySelector(".twitter");

function randomQuote(){
    quoteButton.textContent = "Loading...";
    fetch('https://qapi.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = data.quote;
        quoteAuthor.textContent = data.author;
        quoteButton.textContent = "New Quote";
    });
}
soundButton.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.textContent} by ${quoteAuthor.textContent}`);
    speechSynthesis.speak(utterance);
})
copyButton.addEventListener("click",()=>{
    navigator.clipboard.writeText(`${quoteText.textContent}`);
    alert("Quote copied to clipboard");
});
twitterButton.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.textContent}`;
    window.open(tweetUrl, "_blank");
});
quoteButton.addEventListener("click", randomQuote);
  
