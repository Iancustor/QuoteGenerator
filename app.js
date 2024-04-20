// alert("hello");
const API = "https://api.quotable.io/random";
async function generateQuote(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    // console.log(data);
    const quote = data.content;
    const author = data.author;
    // console.log(quote, author);
    quoteEl.textContent = quote;
    authorEl.textContent = author;
  } catch (error) {
    console.log(error);
  }
}

setInterval(() => {
  generateQuote(API);
}, 12000);
generateQuote(API);
const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
// console.log(quoteEl, authorEl);

const nextBtn = document.querySelector(".nextBtn");

nextBtn.addEventListener("click", function nextQuote() {
  generateQuote(API);
});

const copyBtn = document.querySelector(".copyBtn");
copyBtn.addEventListener("click", function copyingQuote() {
  const copyQuote = quoteEl.textContent;
  navigator.clipboard
    .writeText(copyQuote)
    .then((result) => {
      showingMessage();
    })
    .catch((err) => {
      console.log(err);
    });
});
const message = document.querySelector(".message");
function showingMessage() {
  message.classList.add("showMessage");
  setTimeout(() => {
    message.classList.remove("showMessage");
  }, 1600);
}
