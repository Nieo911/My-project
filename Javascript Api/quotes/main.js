//variants
const URL ="https://api.quotable.io/random";
let container_quotes = document.querySelector(".quote");
let btn = document.querySelector(".btn");
let auther = document.querySelector(".name");
//function used
let getquotes =()=>{
  fetch(URL).then(data => data.json())
.then((item) =>{
container_quotes.innerText = `"${item.content}"`;
 auther.innerText= `'${item.author}'`;
}
)}
getquotes();
//function run
btn.addEventListener("click",getquotes);

