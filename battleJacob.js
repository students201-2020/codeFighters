'use strict';
playSoundJacob(); 
var playerIcon = document.getElementById('playerIcon');
var player = document.getElementById('player');
var bossIcon = document.getElementById('bossIcon');
var boss = document.getElementById('boss');
var villian3 = {
  img : './image/boss1.jpeg',
  avatar : 'image/jacob avatar.png',
  name : boss,
  attack : 30,
  hp : 120,
}
var selectedFighter =  getFighter('fighter');
function getFighter(key) {
  var selectedFighter = localStorage.getItem(key);
  return JSON.parse(selectedFighter);
}
function rendervillan3() {
  boss.setAttribute('src', villian3.avatar);
  boss.setAttribute('alt', villian3.name);
  bossIcon.setAttribute('src',villian3.img);
  bossIcon.setAttribute('alt', 'icon')  
}

function renderFighter() {

  console.log(selectedFighter);       
  player.setAttribute('src', selectedFighter.avatar);
  player.setAttribute('alt', selectedFighter.name);
  playerIcon.setAttribute('src',selectedFighter.img);
  playerIcon.setAttribute('alt', 'icon')    
}
rendervillan3();
renderFighter();
function attackPlayer() {
  var attack  = document.getElementById('animates');
  var posX = 200;
  var posY = 650;
  var id = setInterval(frame,5);
  attackMusic();
  function frame () {
    if(posX === 1500 ) {
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
  villian3.hp -= selectedFighter.attack ;
 
 return villian3.hp;
}
function villian3Attack() {
  selectedFighter.hp -= villian3.attack ;

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

new QuestionsConstructor ('Is `:last-child` a standard CSS pseudo-class?', 'yes');
new QuestionsConstructor ('Is `textcolor` used to change the text color of an element?', 'no');
new QuestionsConstructor ('Are JavaScript functions defined with `function` keyword?', 'yes');
new QuestionsConstructor ('Are declared functions executed immediately?', 'no');
new QuestionsConstructor ('Is `:border-radius` a standard CSS pseudo-class?', 'no');
new QuestionsConstructor ('Can a function expression be stored in a variable?', 'yes');
new QuestionsConstructor ('Can JavaScript functions be called before they are declared?', 'yes');
new QuestionsConstructor ('Can JavaScript change HTML contents?', 'yes');
new QuestionsConstructor ('Can JavaScript change CSS styles?', 'yes');
new QuestionsConstructor ('Is margin>border>padding>content, the outside-in ordering of the CSS box model?', 'yes');
new QuestionsConstructor ('Is a function inside of an object called a method?', 'yes');
new QuestionsConstructor ('Can you put a function inside a constructor function?', 'yes');
new QuestionsConstructor ('Do JavaScript objects inherit properties and methods from a prototype?', 'yes');
new QuestionsConstructor ('Can arrays hold functions?', 'yes');
new QuestionsConstructor ('Are strings, booleans, and numbers examples of primitives in JavaScript?', 'yes');
new QuestionsConstructor ('Are arrays, objects, and functions considered reference types in JavaScript?', 'yes');
new QuestionsConstructor ('Are arithmetic, assignment, comparison, logical, and bitwise considered JavaScript operators?', 'yes');
new QuestionsConstructor ('Does the following code `<script href="app.js"></script>` connect your JavaScript to your HTML?', 'no');


function game () {
    for (var i = 0; i < answerArray.length && selectedFighter.hp > 0 && villian3.hp > 0; i ++) {
        var ques = prompt (questionsArray[i])
        if(answerArray[i]=== ques) {
        playerAttack();
        alert('player' + selectedFighter.hp + ', boss' + villian3.hp);
        } else {
        villian3Attack();
        alert('player' + selectedFighter.hp + ', boss' + villian3.hp);
        } 
    } 
    if (selectedFighter.hp > 0) {
      attackPlayer();
      alert('You win, however you still need to pass the entrance exam for 301 to get past me!');    
    } else {  
      alert('You lose, you have to take 201 again!');  
    }     
  }

  ///// plays music ////////
  function playSoundJacob () {
    
    var audio = new Audio('image/jacob battle music.mp3');
    var audio2 = new Audio('image/jacobThunder.wav');
    audio.loop = true;
    audio2.loop = true;
    audio.play();
    audio2.play();
  }
    
  function attackMusic () {
    var loop = true;
   var audio = new Audio('image/robertfiremusic.wav');
   var audio2 = new Audio('image/attack music.wav');
   
   
   audio.loop;
   
   audio2.play();
   }
    

 
 












