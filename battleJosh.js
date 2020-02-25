'use strict';
var player = document.getElementById('player');
var boss = document.getElementById('boss');
var villian2 = {
  img : 'image/',
  name : boss,
  attack : 20,
  hp : 100,
}
var selectedFighter =  getFighter('fighter');
function getFighter(key) {
  var selectedFighter = localStorage.getItem(key);
  return JSON.parse(selectedFighter);
}
function rendervillan2() {
  boss.setAttribute('src', villian2.img);
  boss.setAttribute('alt', villian2.name); 
}

function renderFighter() {

  console.log(selectedFighter);       
  player.setAttribute('src', selectedFighter.img);
  player.setAttribute('alt', selectedFighter.name);  
}
rendervillan2();
renderFighter();

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

new QuestionsConstructor ('Does `&&` represent the conitional `or`?', 'no');
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
      alert('you win');    
    } else {  
      alert('you lost');  
    }     
  }
    
  
    

 
 












