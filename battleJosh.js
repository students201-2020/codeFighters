'use strict';
playSoundJosh(); 
var playerIcon = document.getElementById('playerIcon');
var player = document.getElementById('player');
var bossIcon = document.getElementById('bossIcon');
var boss = document.getElementById('boss');
var buttonKiller = document.getElementById('buttonkiller');
var audiobtn = document.getElementById('audio');
var villian2 = {
  img : 'image/boss2.jpeg',
  avatar : 'image/josh avatar.png',
  name : boss,
  attack : 20,
  hp : 110,
}
var selectedFighter =  getFighter('fighter');
function getFighter(key) {
  var selectedFighter = localStorage.getItem(key);
  return JSON.parse(selectedFighter);
}
function rendervillan2() {
  boss.setAttribute('src', villian2.avatar);
  boss.setAttribute('alt', villian2.name); 
  bossIcon.setAttribute('src',villian2.img);
  bossIcon.setAttribute('alt', 'icon') 
}

function renderFighter() {

  console.log(selectedFighter);       
  player.setAttribute('src', selectedFighter.avatar);
  player.setAttribute('alt', selectedFighter.name); 
  playerIcon.setAttribute('src',selectedFighter.img);
  playerIcon.setAttribute('alt', 'icon')   
}
rendervillan2();
renderFighter();
function attackPlayer() {
  var attack  = document.getElementById('animates');
  var posX = 200;
  var posY = 650;
  var id = setInterval(frame,5);
  attackMusic();
  function frame () {
    if(posX === 1565 ) {
      clearInterval(id);
      boss.remove();
      animates.remove();
    } else {
      posX+= 5;
      attack.style.top = posY +"px"
      attack.style.left = posX +"px"
    }

  }

}

function playerAttack() {
  villian2.hp -= selectedFighter.attack ;
 
 return villian2.hp;
}
function villian2Attack() {
  selectedFighter.hp -= villian2.attack ;

  return selectedFighter.hp;

}

player.addEventListener('click', game);

var answerArray = [];
var questionsArray = [];
function QuestionsConstructor (question, answer){
  this.question = question;
  this.answer = answer;
  questionsArray.push(this.question);
  answerArray.push(this.answer)
}

new QuestionsConstructor ('Does `&&` represent the conditional `or`?', 'no');
new QuestionsConstructor ('Does `||` represent the conditional `and`?', 'no');
new QuestionsConstructor ('Do you use the `<script></script>` tags to link JavaScript to HTML?', 'yes');
new QuestionsConstructor ('Can you push from a function into an array?', 'yes');
new QuestionsConstructor ('Can you use `git checkout -b filename` to create a new branch and move to it?', 'yes');
new QuestionsConstructor ('Can you use a for loop to cycle through an array?', 'yes');
new QuestionsConstructor ('Does the content of inline elemnts determine their default width?', 'yes');
new QuestionsConstructor ('While loops are used when the number of iterations are known?', 'no');
new QuestionsConstructor ('For loops are used when the number of iterations are unknown?', 'no');
new QuestionsConstructor ('Does Math.floor round down the number it is used with?', 'yes');
new QuestionsConstructor ('Will Math.ceil(1.2) return 2 in the console?', 'yes');
new QuestionsConstructor ('Can you put a function inside a constructor function?', 'yes');
new QuestionsConstructor ('Do JavaScript objects inherit properties and methods from a prototype?', 'yes');
new QuestionsConstructor ('Can arrays hold functions?', 'yes');
new QuestionsConstructor ('Are strings, booleans, and numbers examples of primitives in JavaScript?', 'yes');
new QuestionsConstructor ('Are arrays, objects, and functions considered reference types in JavaScript?', 'yes');
new QuestionsConstructor ('Are arithmetic, assignment, comparison, logical, and bitwise considered JavaScript operators?', 'yes');
new QuestionsConstructor ('Does the following code `<script href="app.js"></script>` connect your JavaScript to your HTML?', 'no');


function game () {
    for (var i = 0; i < answerArray.length && selectedFighter.hp > 0 && villian2.hp > 0; i ++) {
        var ques = prompt (questionsArray[i])
        if(answerArray[i]=== ques) {
        playerAttack();
        alert('player' + selectedFighter.hp + ', boss' + villian2.hp);
        } else {
        villian2Attack();
        alert('player' + selectedFighter.hp + ', boss' + villian2.hp);
        } 
    } 
    if (selectedFighter.hp > 0) {
      attackPlayer();
      alert('you win'); 
      
    } else {  
      buttonKiller.remove();
      alert('you lost');
       
    }     
  }
///////////////Audio sounds live here////////////////////
  function playSoundJosh () {
    console.log('HEY')
    var audio = new Audio('image/LuckyLittleSpookyAmbience.flac');
    var audio2 = new Audio('image/josh battle music2.flac');
    
    audio.loop = true;
    audio2.loop = true;
    
    audio.play();
    
    audio2.play();
  }

  function playSoundGranted () {
    console.log('HEY')
    var audio = new Audio('image/access_granted.wav');

    audio.play(); 
  }
  function playSoundDenied  () {

    var audio = new Audio('image/access_denied audio.wav');

    audio.play(); 

  }

  function attackMusic () {
    var loop = true;
   var audio = new Audio('image/robertfiremusic.wav');
   var audio2 = new Audio('image/attack music.wav');
   
   
   audio.loop;
   
   audio2.play();
   }
///////////////////////////////////text blinker///////////////////
  function textBlinker() {
    document.getElementById('.startgame').fadeOut(500);
    document.getElementById('.startgame').fadeIn(500);
  }
  setInterval(textBlinker, 1000);
    
  
    

 
 












