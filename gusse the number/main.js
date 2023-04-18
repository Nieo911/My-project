var win =document.querySelector('.first');
var lose =document.querySelector('.second');
var overly = document.querySelector('.overly');
var BtnClose = document.querySelector('.close-modal');
var score = 20;
var  secrt = Math.trunc(Math.random()*20 +1);
document.querySelector('.number').textContent = '?';
var chek = document.querySelector('.btn-chek');
var message = document.querySelector('.message');

chek.addEventListener('click',()=>{
const Numbe = Number(document.querySelector
('.answer').value) ;

console.log(secrt);
console.log(Numbe,typeof Numbe);

if(!Numbe)
  {
    document.querySelector('.message').textContent ='🛑 no number';
  } 
      else if(Numbe === secrt)
      {
        document.querySelector('.number').textContent = secrt;
        win.classList.add('win');
        BtnClose.classList.add('show');
        overly.classList.remove('hidden');
      }
          else if(Numbe < secrt){
              if(score > 0)
              {
                document.querySelector('.message').textContent ='😥😥to low😥😥';
                score--;
                document.querySelector('.number').textContent = '?';
                document.querySelector('.score').textContent =`score:${score}`;
              }
          } 
          else if(Numbe > secrt)
          {
            if(score > 0)
              {
              document.querySelector('.message').textContent ='😥😥to high😥😥';
              score--;
              document.querySelector('.number').textContent = '?';
              document.querySelector('.score').textContent =`score:${score}`;
    }else{
      lose.classList.add('lose');
      overly.classList.remove('hidden');
      document.querySelector('.number').textContent = secrt;
    }
  }
})
BtnClose.addEventListener('click',()=>{
  win.classList.remove('win');
  overly.classList.add('hidden');
  BtnClose.classList.remove('show');
})