let meun = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
meun.addEventListener('click',function(){
  meun.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});