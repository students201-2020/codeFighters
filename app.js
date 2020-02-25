'use strict;'
var allFighters = [];
var fighterOne = document.getElementById('fighterOne');
var fighterOneStats = document.getElementById('fighterOneStats');

var fighterTwo = document.getElementById('fighterTwo');
var fighterTwoStats = document.getElementById('fighterTwoStats');

var fighterThree = document.getElementById('fighterThree');

////// FIGHTER CONSTRUCTOR FUNCTION ////////////
function Fighter (img,name,attack,hp) {
  this.img = img;
  this.name = name;
  this.attack = attack;
  this.hp = hp;
  allFighters.push(this);
}

var FighterA = new Fighter('./image/assassin.jpeg','Assassin',20,100);
var FighterB = new Fighter('./image/knight.jpeg','Knight',10,100);
var FighterC = new Fighter('./image/brawler.jpeg','Brawler',20, 100);
var FighterC = new Fighter('./image/ninja.jpeg','Ninja',10, 100);



/////// RENDERS ALL FIGHTERS AND THEIR STATS///////////
function renderFighter (fighter,avatar,stat) {
  var fighter = fighter;
  var avatar = avatar;
  var stat = stat;
  var select = select
  avatar.setAttribute('src', fighter.img);
  avatar.setAttribute('alt', fighter.name);
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
