'use strict';
var playerIcon = document.getElementById('playerIcon');
var player = document.getElementById('player');
var bossIcon = document.getElementById('bossIcon');
var boss = document.getElementById('boss');
var buttonKiller = document.getElementById('buttonkiller')
var villian = {
  img : 'image/boss3.jpeg',
  avatar : 'image/Robert avatar.png',
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
  boss.setAttribute('src', villian.avatar);
  boss.setAttribute('alt', villian.name);
  bossIcon.setAttribute('src',villian.img);
  bossIcon.setAttribute('alt', 'icon') 
}

function renderFighter() {

  console.log(selectedFighter);       
  player.setAttribute('src', selectedFighter.avatar);
  player.setAttribute('alt', selectedFighter.name);
  playerIcon.setAttribute('src',selectedFighter.img);
  playerIcon.setAttribute('alt', 'icon')   
}

rendervillan();
renderFighter();

function playerAttack() {
  villian.hp -= selectedFighter.attack ;
 
 return villian.hp;
}
function villianAttack() {
  selectedFighter.hp -= villian.attack ;

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

new QuestionsConstructor ('Is Java the same as JavaScript?', 'no');
new QuestionsConstructor ('Is this the proper way to use a p tag `<p></p>`?', 'yes');
new QuestionsConstructor ('Does HTML stand for hyper typed media language?', 'no');
new QuestionsConstructor ('Does CSS stand for Cascading Style Sheets?', 'yes');
new QuestionsConstructor ('Does Math.random() generate a random number between 1 and 100?', 'no');
new QuestionsConstructor ('Can LinkedIn be used as a networking tool?', 'yes');
new QuestionsConstructor ('Does Math.random() generate a random number between 0 and 1?', 'yes');
new QuestionsConstructor ('Would you not want to use HTML5 because it offers you less options within the HTML document?', 'no');
new QuestionsConstructor ('Can you add elements to HTML using JavaScript?', 'yes');
new QuestionsConstructor ('Can you style an element using HTML?', 'yes');
new QuestionsConstructor ('Can `break` be used to exit a loop?', 'yes');
new QuestionsConstructor ('Can you use the console to solve basic arithmetic problems?', 'yes');
new QuestionsConstructor ('Do JavaScript objects inherit properties and methods from a prototype?', 'yes');
new QuestionsConstructor ('Can arrays hold functions?', 'yes');
new QuestionsConstructor ('Are strings, booleans, and numbers examples of primitives in JavaScript?', 'yes');
new QuestionsConstructor ('Are arrays, objects, and functions considered reference types in JavaScript?', 'yes');
new QuestionsConstructor ('Are arithmetic, assignment, comparison, logical, and bitwise considered JavaScript operators?', 'yes');
new QuestionsConstructor ('Does the following code `<script href="app.js"></script>` connect your JavaScript to your HTML?', 'no');


function game () {
    for (var i = 0; i < answerArray.length && selectedFighter.hp > 0 && villian.hp > 0; i ++) {
        var ques = prompt (questionsArray[i])
        if(answerArray[i]=== ques) {
        playerAttack();
        alert('player' + selectedFighter.hp + ', boss' + villian.hp);
        } else {
        villianAttack();
        alert('player' + selectedFighter.hp + ', boss' + villian.hp);
        } 
    } 
    if (selectedFighter.hp > 0) {
      alert('you win');
      alert('click next to fight the evil boss Josh');    
    } else {  
      buttonKiller.remove();
      alert('you lost'); 
      alert('Hit the Back button to return to the homepage'); 
    }     
  }
    
  
    

 
 












