'use strict';
var player = document.getElementById('player');
var boss = document.getElementById('boss');
var villian3 = {
  img : './image/boss1.jpeg',
  name : boss,
  attack : 20,
  hp : 100,
}
var selectedFighter =  getFighter('fighter');
function getFighter(key) {
  var selectedFighter = localStorage.getItem(key);
  return JSON.parse(selectedFighter);
}
function rendervillan3() {
  boss.setAttribute('src', villian3.img);
  boss.setAttribute('alt', villian3.name); 
}

function renderFighter() {

  console.log(selectedFighter);       
  player.setAttribute('src', selectedFighter.img);
  player.setAttribute('alt', selectedFighter.name);  
}
rendervillan3();
renderFighter();

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
new QuestionsConstructor ('Is color `textcolor` used to change the text color of an element?', 'no');
new QuestionsConstructor ('Does a JavaScript function `expression` load when the interpreter reaches that line of code?', 'yes');
new QuestionsConstructor ('Does a JavaScript function `declaration` load when the interpreter reaches that line of code?', 'no');
new QuestionsConstructor ('Is `:border-radius` a standard CSS pseudo-class?', 'no');
new QuestionsConstructor ('Are HTML attributes and CSS declarations examples of key-value pairs?', 'yes');
new QuestionsConstructor ('Does the content of inline elemnts determine their default width?', 'yes');
new QuestionsConstructor ('Do all HTML elements with inline display change to block display?', 'no');
new QuestionsConstructor ('Can an inline element have margin?', 'yes');
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
      alert('You win, however you still need to pass the entrance exam for 301 to get past me!');    
    } else {  
      alert('You lose, you have to take 201 again!');  
    }     
  }
    
  
    

 
 












