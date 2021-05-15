const cardWrap = document.getElementById("panel");

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

const btn1 = document.createElement("button");
cardWrap.appendChild(btn1);
btn1.classList.add("back", "card");

const btn2 = document.createElement("button");
cardWrap.appendChild(btn2);
btn2.classList.add("back", "card");

const btn3 = document.createElement("button");
cardWrap.appendChild(btn3);
btn3.classList.add("back", "card");

const btn4 = document.createElement("button");
cardWrap.appendChild(btn4);
btn4.classList.add("back", "card");

const btn5 = document.createElement("button");
cardWrap.appendChild(btn5);
btn5.classList.add("back", "card");

const btn6 = document.createElement("button");
cardWrap.appendChild(btn6);
btn6.classList.add("back", "card");

const btn7 = document.createElement("button");
cardWrap.appendChild(btn7);
btn7.classList.add("back", "card");

const btn8 = document.createElement("button");
cardWrap.appendChild(btn8);
btn8.classList.add("back", "card");

let count = 0;
let num1 = "";
let num2 = "";
let arrayNum1 = "";
let arrayNum2 = "";

btn1.addEventListener("click", function () {
    btn1.innerHTML = random[0];
    btn1.className = "card";
    counter();
    if (num1 === "") {
        num1 = random[0];
        arrayNum1 = 0;
    } else {
        num2 = random[0];
        arrayNum2 = 0;
    }
})

btn2.addEventListener("click", function () {
    btn2.innerHTML = random[1];
    btn2.className = "card";
    counter();
    if (num1 === "") {
        num1 = random[1];
        arrayNum1 = 1;
    } else {
        num2 = random[1];
        arrayNum2 = 1;
    }
})

btn3.addEventListener("click", function () {
    btn3.innerHTML = random[2];
    btn3.className = "card";
    counter();
    if (num1 === "") {
        num1 = random[2];
        arrayNum1 = 2;
    } else {
        num2 = random[2];
        arrayNum2 = 2;
    }
})

btn4.addEventListener("click", function () {
    btn4.innerHTML = random[3];
    btn4.className = "card";
    counter();
    if (num1 === "") {
        num1 = random[3];
        arrayNum1 = 3;
    } else {
        num2 = random[3];
        arrayNum2 = 3;
    }
})

btn5.addEventListener("click", function () {
    btn5.innerHTML = random[4];
    btn5.className = "card";
    counter();
    if (num1 === "") {
        num1 = random[4];
        arrayNum1 = 4;
    } else {
        num2 = random[4];
        arrayNum2 = 4;
    }
})

btn6.addEventListener("click", function () {
    btn6.innerHTML = random[5];
    btn6.className = "card";
    counter();
    if (num1 === "") {
        num1 = random[5];
        arrayNum1 = 5;
    } else {
        num2 = random[5];
        arrayNum2 = 5;
    }
})

btn7.addEventListener("click", function () {
    btn7.innerHTML = random[6];
    btn7.className = "card";
    counter();
    if (num1 === "") {
        num1 = random[6];
        arrayNum1 = 6;
    } else {
        num2 = random[6];
        arrayNum2 = 6;
    }
})

btn8.addEventListener("click", function () {
    btn8.innerHTML = random[7];
    btn8.className = "card";
    counter();
    if (num1 === "") {
        num1 = random[7];
        arrayNum1 = 7;
    } else {
        num2 = random[7];
        arrayNum2 = 7;
    }
})

function counter() {
    count += 1
    console.log(num1);
    console.log(num2);
    console.log(arrayNum1);
    console.log(arrayNum2);
    if (count === 2) {
        const timer = setTimeout(function () {
            console.log(count);
            result();
        }, 500)
    }
}

function result() {
    if (num1 === num2) {
        switch (arrayNum1) {
            case 0: btn1.classList.add("finish");
                btn1.innerHTML = "";
                break;
            case 1: btn2.classList.add("finish");
                btn2.innerHTML = "";
                break;
            case 2: btn3.classList.add("finish");
                btn3.innerHTML = "";
                break;
            case 3: btn4.classList.add("finish");
                btn4.innerHTML = "";
                break;
            case 4: btn5.classList.add("finish");
                btn5.innerHTML = "";
                break;
            case 5: btn6.classList.add("finish");
                btn6.innerHTML = "";
                break;
            case 6: btn7.classList.add("finish");
                btn7.innerHTML = "";
                break;
            case 7: btn8.classList.add("finish");
                btn8.innerHTML = "";
                break;
        }
        switch (arrayNum2) {
            case 0: btn1.classList.add("finish");
                btn1.innerHTML = "";
                break;
            case 1: btn2.classList.add("finish");
                btn2.innerHTML = "";
                break;
            case 2: btn3.classList.add("finish");
                btn3.innerHTML = "";
                break;
            case 3: btn4.classList.add("finish");
                btn4.innerHTML = "";
                break;
            case 4: btn5.classList.add("finish");
                btn5.innerHTML = "";
                break;
            case 5: btn6.classList.add("finish");
                btn6.innerHTML = "";
                break;
            case 6: btn7.classList.add("finish");
                btn7.innerHTML = "";
                break;
            case 7: btn8.classList.add("finish");
                btn8.innerHTML = "";
                break;
        }
    } else {
        switch (arrayNum1) {
            case 0:
                btn1.classList.add("back");
                btn1.innerHTML = "";
                break;
            case 1:
                btn2.classList.add("back");
                btn2.innerHTML = "";
                break;
            case 2:
                btn3.classList.add("back");
                btn3.innerHTML = "";
                break;
            case 3:
                btn4.classList.add("back");
                btn4.innerHTML = "";
                break;
            case 4:
                btn5.classList.add("back");
                btn5.innerHTML = "";
                break;
            case 5:
                btn6.classList.add("back");
                btn6.innerHTML = "";
                break;
            case 6:
                btn7.classList.add("back");
                btn7.innerHTML = "";
                break;
            case 7:
                btn8.classList.add("back");
                btn8.innerHTML = "";
                break;
        }
        switch (arrayNum2) {
            case 0:
                btn1.classList.add("back");
                btn1.innerHTML = "";
                break;
            case 1:
                btn2.classList.add("back");
                btn2.innerHTML = "";
                break;
            case 2:
                btn3.classList.add("back");
                btn3.innerHTML = "";
                break;
            case 3:
                btn4.classList.add("back");
                btn4.innerHTML = "";
                break;
            case 4:
                btn5.classList.add("back");
                btn5.innerHTML = "";
                break;
            case 5:
                btn6.classList.add("back");
                btn6.innerHTML = "";
                break;
            case 6:
                btn7.classList.add("back");
                btn7.innerHTML = "";
                break;
            case 7:
                btn8.classList.add("back");
                btn8.innerHTML = "";
                break;
        }
    }
    count = 0;
    num1 = "";
    num2 = "";
    arrayNum1 = "";
    arrayNun2 = "";
}