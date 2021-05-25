const cardWrap = document.getElementById("panel");
const nextPlayer = document.getElementById("nextPlayer");
let player1Point = document.getElementById("player1Point");
let player2Point = document.getElementById("player2Point");

let point1 = 0;
player1Point.textContent = `player1:${point1}`;

let point2 = 0;
player2Point.textContent = `player2:${point2}`;

let turnCounter = 1;
nextPlayer.innerHTML = "次はPlayer1の番です。"


const array = [0, 1, 2, 3, 4, 5, 6, 7];
const number = [1, 1, 2, 2, 3, 3, 4, 4];
let random = [];
let randomNum;

for (let i = 0; i < 8; i++) {
    randomNum = Math.floor(Math.random() * 8);
    if (array[randomNum] !== "") {
        random[i] = number[array[randomNum]];
        array[randomNum] = "";
    } else {
        i -= 1;
    }
}

const varArray = [1, 2, 3, 4, 5, 6, 7, 8];
let card;
let count = 0;
let num1 = 0;
let num2 = 0;
let arrayNum1 = 0;
let arrayNum2 = 0;
let numberP;

for (let i in varArray) {
    this["card" + varArray[i]] = document.createElement("div");
    cardWrap.appendChild(this["card" + varArray[i]]);
    this["numberP" + varArray[i]] = document.createElement("p");
    this["card" + varArray[i]].appendChild(this["numberP" + varArray[i]])
    this["card" + varArray[i]].classList.add("back", "card");
    this["card" + varArray[i]].disabled = false;
}


card1.addEventListener("click", function () {
    numberP1.textContent = random[0];
    card1.className = "card";
    numberP1.classList.add("cardText");
    card1.disabled = true;
    numberP1.disabled = true;
    if (num1 === 0) {
        num1 = random[0];
        arrayNum1 = 0;
    } else {
        num2 = random[0];
        arrayNum2 = 0;
    }
    counter();
})

card2.addEventListener("click", function () {
    numberP2.textContent = random[1];
    card2.className = "card";
    numberP2.classList.add("cardText");
    card2.disabled = true;
    numberP2.disabled = true;
    if (num1 === 0) {
        num1 = random[1];
        arrayNum1 = 1;
    } else {
        num2 = random[1];
        arrayNum2 = 1;
    }
    counter();
})

card3.addEventListener("click", function () {
    numberP3.textContent = random[2];
    card3.className = "card";
    numberP3.classList.add("cardText");
    card3.disabled = true;
    numberP3.disabled = true;
    if (num1 === 0) {
        num1 = random[2];
        arrayNum1 = 2;
    } else {
        num2 = random[2];
        arrayNum2 = 2;
    }
    counter();
})

card4.addEventListener("click", function () {
    numberP4.textContent = random[3];
    card4.className = "card";
    numberP4.classList.add("cardText");
    card4.disabled = true;
    numberP4.disabled = true;
    if (num1 === 0) {
        num1 = random[3];
        arrayNum1 = 3;
    } else {
        num2 = random[3];
        arrayNum2 = 3;
    }
    counter();
})
card5.addEventListener("click", function () {
    numberP5.textContent = random[4];
    card5.className = "card";
    numberP5.classList.add("cardText");
    card5.disabled = true;
    numberP5.disabled = true;
    if (num1 === 0) {
        num1 = random[4];
        arrayNum1 = 4;
    } else {
        num2 = random[4];
        arrayNum2 = 4;
    }
    counter();
})

card6.addEventListener("click", function () {
    numberP6.textContent = random[5];
    card6.className = "card";
    numberP6.classList.add("cardText");
    card6.disabled = true;
    numberP6.disabled = true;
    if (num1 === 0) {
        num1 = random[5];
        arrayNum1 = 5;
    } else {
        num2 = random[5];
        arrayNum2 = 5;
    }
    counter();
})

card7.addEventListener("click", function () {
    numberP7.textContent = random[6];
    card7.className = "card";
    numberP7.classList.add("cardText");
    card7.disabled = true;
    numberP7.disabled = true;
    if (num1 === 0) {
        num1 = random[6];
        arrayNum1 = 6;
    } else {
        num2 = random[6];
        arrayNum2 = 6;
    }

    counter();
})

card8.addEventListener("click", function () {
    numberP8.textContent = random[7];
    card8.className = "card";
    numberP8.classList.add("cardText");
    card8.disabled = true;
    numberP8.disabled = true;
    if (num1 === 0) {
        num1 = random[7];
        arrayNum1 = 7;
    } else {
        num2 = random[7];
        arrayNum2 = 7;
    }
    counter();
})


let timer;
let newArray;
let disableT = [];

function counter() {
    if (arrayNum1 !== arrayNum2) {
        count += 1;
        if (num1 !== null || num2 !== null) {
            console.log(count);
            if (count === 2) {
                if (num1 !== 0 && num2 !== 0) {
                    timer = setTimeout(function () {
                        result();
                    }, 500)
                } else {
                    count = 0;
                    return;
                }
            }
        } else {
            num1 = 0;
            num2 = 0;
            count = 0;
        }
    } else {
        num2 = 0;
    }
}

function result() {
    if (num1 === num2) {
        switch (arrayNum1) {
            case 0:
                card1.classList.add("finish");
                numberP1.classList.add("finish");
                numberP1.innerHTML = "";
                card1.style.opacity = "0";
                random[0] = null;
                break;
            case 1:
                card2.classList.add("finish");
                numberP2.classList.add("finish");
                numberP2.innerHTML = "";
                card2.style.opacity = "0";
                random[1] = null;
                break;
            case 2:
                card3.classList.add("finish");
                numberP3.classList.add("finish");
                numberP3.innerHTML = "";
                card3.style.opacity = "0";
                random[2] = null;
                break;
            case 3:
                card4.classList.add("finish");
                numberP4.classList.add("finish");
                numberP4.innerHTML = "";
                card4.style.opacity = "0";
                random[3] = null;
                break;
            case 4:
                card5.classList.add("finish");
                numberP5.classList.add("finish");
                numberP5.innerHTML = "";
                card5.style.opacity = "0";
                random[4] = null;
                break;
            case 5:
                card6.classList.add("finish");
                numberP6.classList.add("finish");
                numberP6.innerHTML = "";
                card6.style.opacity = "0";
                random[5] = null;
                break;
            case 6:
                card7.classList.add("finish");
                numberP7.classList.add("finish");
                numberP7.innerHTML = "";
                card7.style.opacity = "0";
                random[6] = null;
                break;
            case 7:
                card8.classList.add("finish");
                numberP8.classList.add("finish");
                numberP8.innerHTML = "";
                card8.style.opacity = "0";
                random[7] = null;
                break;
        }
        switch (arrayNum2) {
            case 0:
                card1.classList.add("finish");
                numberP1.classList.add("finish");
                numberP1.innerHTML = "";
                card1.style.opacity = "0";
                random[0] = null;
                break;
            case 1:
                card2.classList.add("finish");
                numberP2.classList.add("finish");
                numberP2.innerHTML = "";
                card2.style.opacity = "0";
                random[1] = null;
                break;
            case 2:
                card3.classList.add("finish");
                numberP3.classList.add("finish");
                numberP3.innerHTML = "";
                card3.style.opacity = "0";
                random[2] = null;
                break;
            case 3:
                card4.classList.add("finish");
                numberP4.classList.add("finish");
                numberP4.innerHTML = "";
                card4.style.opacity = "0";
                random[3] = null;
                break;
            case 4:
                card5.classList.add("finish");
                numberP5.classList.add("finish");
                numberP5.innerHTML = "";
                card5.style.opacity = "0";
                random[4] = null;
                break;
            case 5:
                card6.classList.add("finish");
                numberP6.classList.add("finish");
                numberP6.innerHTML = "";
                card6.style.opacity = "0";
                random[5] = null;
                break;
            case 6:
                card7.classList.add("finish");
                numberP7.classList.add("finish");
                numberP7.innerHTML = "";
                card7.style.opacity = "0";
                random[6] = null;
                break;
            case 7:
                card8.classList.add("finish");
                numberP8.classList.add("finish");
                numberP8.innerHTML = "";
                card8.style.opacity = "0";
                random[7] = null;
                break;
        }
        if (turnCounter % 2 === 0) {
            point2 += 1;
            player2Point.textContent = `player2:${point2}`;
            turnCounter -= 1;
        } else {
            point1 += 1;
            player1Point.textContent = `player1:${point1}`;
            turnCounter -= 1;
        }
    } else {
        switch (arrayNum1) {
            case 0:
                card1.classList.add("back");
                numberP1.innerHTML = "";
                break;
            case 1:
                card2.classList.add("back");
                numberP2.innerHTML = "";
                break;
            case 2:
                card3.classList.add("back");
                numberP3.innerHTML = "";
                break;
            case 3:
                card4.classList.add("back");
                numberP4.innerHTML = "";
                break;
            case 4:
                card5.classList.add("back");
                numberP5.innerHTML = "";
                break;
            case 5:
                card6.classList.add("back");
                numberP6.innerHTML = "";
                break;
            case 6:
                card7.classList.add("back");
                numberP7.innerHTML = "";
                break;
            case 7:
                card8.classList.add("back");
                numberP8.innerHTML = "";
                break;
        }
        switch (arrayNum2) {
            case 0:
                card1.classList.add("back");
                numberP1.innerHTML = "";
                break;
            case 1:
                card2.classList.add("back");
                numberP2.innerHTML = "";
                break;
            case 2:
                card3.classList.add("back");
                numberP3.innerHTML = "";
                break;
            case 3:
                card4.classList.add("back");
                numberP4.innerHTML = "";
                break;
            case 4:
                card5.classList.add("back");
                numberP5.innerHTML = "";
                break;
            case 5:
                card6.classList.add("back");
                numberP6.innerHTML = "";
                break;
            case 6:
                card7.classList.add("back");
                numberP7.innerHTML = "";
                break;
            case 7:
                card8.classList.add("back");
                numberP8.innerHTML = "";
                break;
        }
    }
    count = 0;
    num1 = 0;
    num2 = 0;
    arrayNum1 = 0;
    arrayNun2 = 0;
    turnCounter += 1;
    if (turnCounter % 2 !== 0) {
        nextPlayer.innerHTML = "次はPlayer1の番です。"
    } else {
        nextPlayer.innerHTML = "次はPlayer2の番です。"
    }
    setTimeout
    if ((point1 + point2) === 4) {
        setTimeout(() => {
            alert("終了です。");
            location.reload();
        }, 500);
    }
}