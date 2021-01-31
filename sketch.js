var canvas;
var  gameState, contestantCount;
 var database, quiz, question,contestant;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz ();
  
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  text("My Quiz Game");
  
}
