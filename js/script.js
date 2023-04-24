console.log('working');

////Если парные теги !

//document.querySelector('p').innerHTML += ' Пример span <span> Helloy</span>';
////console.log(document.querySelector('p').innerHTML);
//document.querySelector('p').innerText += ' Пример span <span> Helloy</span>';
////----------------------------------------------------------------------

////document.querySelector('h1').outerHTML = 'JJJJJJJ'
//document.querySelector('h1').outerHTML = '<h2>JJjjjjjj</h2>';
//document.querySelector('h2').outerText = '<h2>JJjjjjjj</h2>';
////=================================================================



//let register = document.querySelector('#form-1');

//function blockRegister() {
//   let register = document.querySelector('#form');
//   register.style.display = 'block';
//}

//register.onclick = blockRegister;

//let lo = document.querySelector('#form-2');
//function blockLo() {
//   let lo = document.querySelector('#form');
//   lo.style.display = 'block';
//}
//lo.onclick = blockLo

let menuBurger = document.querySelector('#burger');

function active() {
   let menuBurger = document.querySelector('#btn-items');
   menuBurger.style.display = 'flex';

}

menuBurger.onclick = active;