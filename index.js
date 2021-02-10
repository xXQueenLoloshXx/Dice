var randomNum1 = (Math.round((Math.random()*5)) + 1);
var randomNum2 = (Math.round((Math.random()*5)) + 1);

var imgNumber1="images//dice"+randomNum1+".png";
document.querySelector("img.img1").setAttribute("src", imgNumber1);

      var imgNumber2="images//dice"+randomNum2+".png";
document.querySelector("img.img2").setAttribute("src", imgNumber2);

result(randomNum1, randomNum2);

/**************Functions **************/

function result(randomNum1, randomNum2) {
  if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else if (randomNum1 === randomNum2) {
    document.querySelector("h1").innerHTML = "🏳️Draw!🏳️";
  }
}
