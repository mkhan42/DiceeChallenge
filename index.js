var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var diceImage1 = document.querySelectorAll("img")[0];

diceImage1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var diceImage2 = document.querySelectorAll("img")[1];

diceImage2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
