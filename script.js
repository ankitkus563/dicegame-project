let btn = document.querySelector(".btn");


let dice;
let totalValue = ["", 0, 0];
let newTotal = ["", 0, 0];
let activePlayer = 1;


btn.addEventListener("click", () => {
    rollDice()


})
let holdVol = document.getElementById("holdvol");
holdVol.addEventListener("click", () => {

    holdValue()


})




function rollDice() {



    if (dice !== 1) {
        dice = 0

        dice = Math.trunc(Math.random() * 6 + 1);
        totalValue[activePlayer] += dice
        document.querySelector(`.Player-${activePlayer}`).innerText = dice;
        document.querySelector(`.img-${activePlayer}`).src = `img/dice-${dice}.png`;

        document.querySelector(`.total-score-${activePlayer}`).innerText = totalValue[activePlayer];
        document.querySelector(`.box-${activePlayer}`).style.backgroundColor = "#253543";








    } else {





        dice = 0;
        totalValue[activePlayer] = 0;
        document.querySelector(`.box-${activePlayer}`).style.backgroundColor = "red";

        document.querySelector(`.Player-${activePlayer}`).innerText = dice;
        document.querySelector(`.total-score-${activePlayer}`).innerText = totalValue[activePlayer];

        activePlayer = activePlayer === 1 ? 2 : 1;







    }


}
function holdValue() {


    newTotal[activePlayer] += totalValue[activePlayer]



    document.querySelector(`.Player-${activePlayer}`).innerText = newTotal[activePlayer];
    document.querySelector(`.box-${activePlayer}`).style.backgroundColor = "blue";
    activePlayer = activePlayer === 1 ? 2 : 1;

    if (newTotal[activePlayer] >= 20) {

        document.querySelector(`.Player-${activePlayer}`).innerHTML = "You Won";

        totalValue = ["", 0, 0];
        newTotal = ["", 0, 0];
        activePlayer = 1;

    }




}