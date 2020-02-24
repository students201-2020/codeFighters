
'use strict';
var player = document.getElementById('player');
var boss = document.getElementById('boss');
var villian = {
  img : 'image/pngfuel.com (1).png',
  name : boss,
  attack : 20,
  hp : 100,
}
var selectedFighter =  getFighter('fighter');
function getFighter(key) {
  var selectedFighter = localStorage.getItem(key);
  return JSON.parse(selectedFighter);
}
function rendervillan() {
  boss.setAttribute('src', villian.img);
  boss.setAttribute('alt', villian.name); 
}

function renderFighter() {

  console.log(selectedFighter);       
  player.setAttribute('src', selectedFighter.img);
  player.setAttribute('alt', selectedFighter.name);  
}
rendervillan();
renderFighter();

function playerAttack(character) {
  character.hp -= selectedFighter.attack ;
 return character.hp
}
console.log(selectedFighter.attack)






function ques() {
  var question = prompt('Is a div an inline element by default')
  if (question.toLowerCase() === 'yes') {
    alert('correct');
    playerAttack(villian);
    console.log(villian.hp);
 
  } else {
    alert('wrong');
  }
};
player.addEventListener('click', ques);