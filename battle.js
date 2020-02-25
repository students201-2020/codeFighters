
'use strict';
var player = document.getElementById('player');
var boss = document.getElementById('boss');

function Villian (img, name, attack, hp) {
  this.img = img;
  this.name = name;
  this.attack = attack;
  this.hp = hp;
  allVillian.push(this);

  var boss1 = new Villian ('./image/boss1.jpg','JabaScriptor', 20, 100);
  var boss3 = new Villian ('./image/boss2.jpg','TAz-Manian Coder', 20, 100);
  var boss3 = new Villian ('./image/boss3.jpg','Death atTAr of Nishapur', 20, 100);

}
// var villian = {
//   img : 'image/pngfuel.com (1).png',
//   name : boss,
//   attack : 20,
//   hp : 100,
}
var selectedFighter =  getFighter('fighter');
function getFighter(key) {
  var selectedFighter = localStorage.getItem(key);
  return JSON.parse(selectedFighter);
}
function renderVillan() {
  boss.setAttribute('src', Villian.img);
  boss.setAttribute('alt', Villian.name);
  boss.setAttribute() 
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
    playerAttack(Villian);
    console.log(Villian.hp);
 
  } else {
    alert('wrong');
  }
};
player.addEventListener('click', ques);