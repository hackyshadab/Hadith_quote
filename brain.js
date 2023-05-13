let realdata ="";
let quotedata = "";
const aquotes = document.getElementById("aquote");
const equotes = document.getElementById("equote");
const author = document.getElementById("book");
const newquote = document.getElementById("newquote");
const get_new_hadith = () => {
    let randm = Math.floor(Math.random()*50);
    console.log("Thankyou ALLAH for making this possible");
    quotedata = realdata[randm];
    aquotes.innerHTML = `${realdata[randm].Quote_arabic}`;
    equotes.innerHTML = `${realdata[randm]. Quote_english}`;
    author.innerHTML = `${realdata[randm].Book}`;
    
}
const get_Hadith_quote = async () => {
    const api = "https://hadith-api-v6n2.onrender.com/quotes";
    try {
        let data = await fetch(api);
        realdata = await data.json();
        get_new_hadith()
    } catch (error) {
    }
}
function tweet(){
    let tweeturl = `https://twitter.com/intent/tweet?text=${quotedata.Quote_english} - ${quotedata.Book}`;
    window.open(tweeturl);
}
newquote.addEventListener("click",get_new_hadith);
get_Hadith_quote();
// alert("Hey, Use big screen for better experience");
