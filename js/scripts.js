/*
    Created on : Feb 8th, 2019, 8:39:38 PM
    Author     : Peter Wachira
*/
//back-end

var player1;
var player2;

var rollDice = function (){
  // return Math.floor((Math.random() * 6) + 1);
  return Math.floor(6*Math.random())+1;
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
    alert(" you won the game buddy!");
  }
}
//user interface
$("button#instruction").click(function() {
    $("#instructions").slideToggle();
  });


$(document).ready(function(){


  $("button#starter").click(function(event){

    player1 = new Player(true);
    player2 =  new Player(false);

    player1.gameStart();
    player2.gameStart();
    $("#p1-currentscore #p2-currentscore").empty();
    $(".p1Score").empty();
    $(".p2Score").empty();
    $("#roll-side").empty();

    });


  $("button#roller").click(function rollerOne(event){

      $("#player2").removeClass("selector");
      $("#player1").addClass("selector");
      player1.roll = rollDice();

      $("#roll-side").text(player1.roll);
      player1.dieOne();
      $("#p1-currentscore").text(player1.currentpoints);
    });

  $("button#roller").click(function rollerTwo(event){
     $("#player1").removeClass("selector");
     $("#player2").addClass("selector");

      player2.roll = rollDice();

      $("#roll-side").text(player2.roll);
      player2.dieOne();
      $("#p2-currentscore").text(player2.currentpoints);
  });

  $("button#holder").click(function (event){
      $("#player2").removeClass("selector");
      $("#player1").addClass("selector");
      player1.holdDie();
      $(".p1Score").text(player1.totalpoints);
      $("#p1-currentscore").empty();
      $("#roll-side").empty();
      player1.checkWinner();
  });

  $("button#holder").click(function(event){
    $("#player1").removeClass("selector");
    $("#player2").addClass("selector");
    player2.holdDie();
    $(".p2Score").text(player2.totalpoints);
    $("#p2-currentscore").empty();
    $("#roll-side").empty();
    player2.checkWinner();
  });
});
