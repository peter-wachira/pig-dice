/*
    Created on : Feb 8th, 2019, 8:39:38 PM
    Author     : Peter Wachira
*/
//back-end

var player1;
var player2;

var rollDice = function (){
  return Math.floor((Math.random() * 6) + 1);
}

function Player(changer){
  this.roll = 0;
  this.currentpoints = 0;
  this.totalpoints = 0;
  this.changer = changer;
}
// game Start
Player.prototype.gameStart = function () {
  this.roll = 0;
  this.currentpoints = 0;
  this.totalpoints= 0;
}


// tossing the die checking for 1
Player.prototype.dieOne = function(){
  if (this.roll ===1){
    this.currentpoints = 0;
    alert("sorry you rolled a one, switch to the other player");
  } else{
    this.currentpoints += this.roll;
  }
}
// holding the die
Player.prototype.holdDie = function(){
  this.totalpoints += this.currentpoints;
  this.currentpoints = 0;
  alert("your turn is over, switch to the other player");
}
// checking for the winner
Player.prototype.checkWinner = function(){
  while (this.totalpoints >= 100){
    alert(" you won the game");
  }
}
//user interface
$("button#instruction").click(function inst() {
    $("#instructions").slideToggle();
  });


$(document).ready(function(){


  $("button#starter").click(function starter(event){

    player1 = new Player(true);
    player2 =  new Player(false);

    });

  $("button#roller").click(function roller(event){
      player1.roll = rollDice();

      $("#roll-side").text(p1Score.roll);
      player1.dieOne();
      $("#currentscore").text(currentscore);
    });

  $("button#roller").click(function roller(event){

      player2.roll = rollDice();

      $("#roll-side").text(p2Score.roll);
      player2.dieOne();
      $("#currentscore").text(currentscore);
  });

  $("button#holder").click(function holder(event){
      player1.holdDie();
      $("#totalpoints").text(player1.totalpoints);
      $("#currentscore").empty();
      $("#roll-side").empty();
      player1.checkWinner();
  });

  $("button#holder").click(function holder(event){
    player2.holdDie();
    $("#totalpoints").text(player2.totalpoints);
    $("#currentscore").empty();
    $("#roll-side").empty();
    player2.checkWinner();
  });
});
