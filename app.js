'use strict;'
var allFighters = [];
var fighterOne = document.getElementById('fighterOne');
var fighterOneStats = document.getElementById('fighterOneStats');

var fighterTwo = document.getElementById('fighterTwo');
var fighterTwoStats = document.getElementById('fighterTwoStats');

var fighterThree = document.getElementById('fighterThree');
var fighterThreeStats = document.getElementById('fighterThreeStats');

var fighterFour = document.getElementById('fighterFour');
var fighterFourStats = document.getElementById('fighterFourStats');

///////////audio lives here//////////////
var gameSound1 = document.getElementById('gameSound1');

////// FIGHTER CONSTRUCTOR FUNCTION ////////////
function Fighter (img,avatar,name,attack,hp) {
  this.img = img;
  this.avatar = avatar;
  this.name = name;
  this.attack = attack;
  this.hp = hp;
  allFighters.push(this);
}

var FighterA = new Fighter('./image/knight.jpeg','image/joe avatar.png','Knight', 30, 120);
var FighterB = new Fighter('./image/ninja.jpeg','image/Robs avatar.png','Ninja', 50, 80);
var FighterC = new Fighter('./image/assassin.jpeg','image/jesse avatar.png', 'Assassin', 60, 40);
var FighterD = new Fighter('./image/brawler.jpeg','image/yasir avatar.png','Brawler', 40, 100);



/////// RENDERS ALL FIGHTERS AND THEIR STATS///////////
function renderFighter (fighter,image,stat) {
  var fighter = fighter;
  var image = image;
  var stat = stat;
  var select = select
  image.setAttribute('src', fighter.img);
  image.setAttribute('alt', fighter.name);
  var fighterStats = document.createElement('h3');
  fighterStats.textContent = 'FIGHTER STATS';
  stat.appendChild(fighterStats);
  var nameStat = document.createElement('li')
  nameStat.textContent = 'Name : ' + fighter.name;
  stat.appendChild(nameStat);
  var attackStat = document.createElement('li')
  attackStat.textContent = 'Attack : ' + fighter.attack ;
  stat.appendChild(attackStat);
  var hpStat = document.createElement('li')
  hpStat.textContent = 'HP : ' + fighter.hp ;
  stat.appendChild(hpStat);
  
}


renderFighter(FighterA, fighterOne, fighterOneStats);
renderFighter(FighterB, fighterTwo,fighterTwoStats);
renderFighter(FighterC, fighterThree,fighterThreeStats);
renderFighter(FighterD, fighterFour, fighterFourStats);

// ///////////////// sets data to the local storage ////////////////////////
function setProductData (key,data) {
  var turnsToString = JSON.stringify(data);
  localStorage.setItem(key , turnsToString);
}

////// WHEM FIGHTER IS SELECTED SAVES TO THE LOCAL STORAGE /////////
function handleClicks (event) {
  console.log('handle click')
var id = event.target.getAttribute('alt');
for(var i = 0; i < allFighters.length; i++) {
  
  if (id === allFighters[i].name) {
    setProductData ('fighter',allFighters[i])
  }
 }
 alert('Click the Enter button to move to the battlefield');
}
// console.log(localStorage);
fighterOne.addEventListener('click' , handleClicks);
fighterTwo.addEventListener('click' , handleClicks);
fighterThree.addEventListener('click' , handleClicks);
fighterFour.addEventListener('click', handleClicks);


////////////////audio func lives here/////////////////////
function playsound1 () {
  console.log('HEY')
  var audio = new Audio('image/game song.mp3');

  audio.loop = true;
  audio.play();

}

function playsoundNext () {
  console.log('HEY')
  var audio = new Audio('image/access_granted.wav');

  audio.play();

} 



