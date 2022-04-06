const quoteConatiner = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorConatiner = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.querySelector('.loader')
var x = [];
function randomNum(){
    return Math.floor((Math.random()*x.length)+1)
}
async function new1(){
   try{
    x = await (await fetch('https://type.fit/api/quotes')).json()
    console.log(x); // why i am not able to send the data out or not able to access it from outside is it because of the scoping
    var y = randomNum()
    console.log(x[y].text.length);
    if(x[y].text.length > 50){
        quoteText.classList.add('long-quote')
    }
    else{
        quoteText.classList.remove('long-quote')
    }
    
    quoteText.innerHTML = x[y].text
    // if author is null
    if(x[y].author === null){
        authorConatiner.innerHTML = "Unknown"
    }
    else{
        authorConatiner.innerHTML = x[y].author
    }
}
   catch(err){
        console.log(err);
   }
}
function loading(){
loader.hidden = false
quoteConatiner.hidden = true
}
function compLoading(){
    loader.hidden = true
    quoteConatiner.hidden = false
    }

// twitter function
function twitter(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}`
    window.open(twitterUrl,'_blank')
}
newQuoteBtn.addEventListener('click',new1);
twitterBtn.addEventListener('click',twitter);
