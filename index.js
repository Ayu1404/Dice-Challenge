var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var change1 = "./images/dice" +randomNumber1+ ".png" ;
document.querySelectorAll("img")[0].setAttribute("src",change1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var change2 = "./images/dice" +randomNumber2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src",change2);

var headingchange = document.querySelector("h1");
    if(randomNumber1 > randomNumber2) {
        headingchange.innerHTML =  "Player 1 Wins!🚩 ";
    }
    else if(randomNumber1 < randomNumber2){
       headingchange.innerHTML = "🚩Player 2 Wins!";
    }
    else{
        headingchange.innerHTML = "Draw!";
    }