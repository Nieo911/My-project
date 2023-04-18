const URL ="https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.querySelector(".btn");
let reuslt =document.querySelector(".reuslt");
let sound = document.querySelector(".sound");

btn.addEventListener('click',()=>{
  let getord = document.getElementById("get-word").value;
  fetch(`${URL}${getord}`)
  .then((response) => response.json())
  .then((data)=>{
    console.log(data);
    reuslt.innerHTML=`
    <div class="word">
    <h3>${getord}</h3>
    <button class="sound">sound</button>
    </div>

    <div class="deaites">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>/${data[0].phonetic}/</p>
    </div>

    <p class="word-meaing">
    ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-exmple">
    ${data[0].meanings[0].definitions[0].example||""}
    </p>`;
    sound.setAttribute("src",`https:${data[0]
      .phonetics[0].audio}`);
  });
});

function PlaySound(){
  sound.play();
}

/* .catch(()=>{
reuslt.innerHTML =`<h3>Coudnot find this word</h3>`;
  })*/