function rollDiceButton() {
    
    var randomNumber1 = Math.floor((6 * Math.random())) + 1;
    var randomNumber2 = Math.floor((6 * Math.random())) + 1;

    var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
    var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

    var image1 = document.querySelector("#die-one");
    image1.setAttribute("src", randomImageSource1);

    var image2 = document.querySelector("#die-two");
    image2.setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h2").innerHTML = "Player 1 wins!";
        document.querySelector("#player-one").innerHTML = "<b>Player 1</b>";
        document.querySelector("#player-two").innerHTML = "Player 2";
    }

    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h2").innerHTML = "Player 2 wins!";
        document.querySelector("#player-one").innerHTML = "Player 1";
        document.querySelector("#player-two").innerHTML = "<b>Player 2</b>";
    }

    else {
        document.querySelector("h2").innerHTML = "It's a draw! Try again.";
        document.querySelector("#player-one").innerHTML = "Player 1";
        document.querySelector("#player-two").innerHTML = "Player 2";
    }
}
