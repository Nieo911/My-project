
const  URL ="https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let container_joks = document.querySelector(".joks");
let btn = document.querySelector(".btn");

let getJoks =()=>{
  fetch(URL).then(data => data.json())
.then((item) => 
container_joks.innerHTML = `<p>${item.joke}</p>`
)}
getJoks();

btn.addEventListener("click",getJoks);

