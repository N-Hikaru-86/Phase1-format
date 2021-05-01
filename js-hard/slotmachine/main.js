const startTimer = document.getElementById("startTimer");

let nowtime1 = document.getElementById("nowTime");
let nowtime2 = document.getElementById("nowTime2");
let nowtime3 = document.getElementById("nowTime3");
let nowtime4 = document.getElementById("nowTime4");
let nowtime5 = document.getElementById("nowTime5");
let nowtime6 = document.getElementById("nowTime6");
let nowtime7 = document.getElementById("nowTime7");
let nowtime8 = document.getElementById("nowTime8");
let nowtime9 = document.getElementById("nowTime9");


let timer1;
let timer2;
let timer3;
let i = null;
let j = null;
let m = null;
nowtime1.textContent = 0;
nowtime2.textContent = 0;
nowtime3.textContent = 0;
nowtime4.textContent = 9;
nowtime5.textContent = 9;
nowtime6.textContent = 9;
nowtime7.textContent = 1;
nowtime8.textContent = 1;
nowtime9.textContent = 1;


startTimer.addEventListener('click', event => {
    i = 0;
    j = 0;
    m = 0;
    let up, down;
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    timer1 = setInterval(function () {
        if (i !== 9) {
            i += 1;
        } else {
            i = 0;
        }
        nowtime1.textContent = i;
        up = i - 1;
        down = i + 1;
        if (up === -1) {
            up = 9;
        }
        nowtime4.textContent = up;
        if (down > 9) {
            down = 0;
        }
        nowtime7.textContent = down;

    }, 100)
    timer2 = setInterval(function () {
        if (j !== 9) {
            j += 1;
        } else if (j === -1) {
            j = 9;
        } else {
            j = 0;
        }
        nowtime2.textContent = j;
        up = j - 1;
        down = j + 1;
        if (up === -1) {
            up = 9;
        }
        nowtime5.textContent = up;
        if (down > 9) {
            down = 0;
        }
        nowtime8.textContent = down;
    }, 100)
    timer3 = setInterval(function () {
        if (m !== 9) {
            m += 1;
        } else if (m === -1) {
            m = 9;
        } else {
            m = 0;
        }
        nowtime3.textContent = m;
        up = m - 1;
        down = m + 1;
        if (up === -1) {
            up = 9;
        }
        nowtime6.textContent = up;
        if (down > 9) {
            down = 0;
        }
        nowtime9.textContent = down;
    }, 100)

})
const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");

let firstT;
let secondT;
let thirdT;


setTime1.addEventListener('click', event => {
    clearInterval(timer1);
    firstT = i;
    console.log(firstT);
    setTime1.setAttribute("disabled", true);
    if ((firstT !== null) && (secondT !== null) && (thirdT != null)) {
        append();
    }
})
setTime2.addEventListener('click', event => {
    clearInterval(timer2);
    secondT = j;
    console.log(secondT);
    setTime2.setAttribute("disabled", true);
    if ((firstT !== null) && (secondT !== null) && (thirdT != null)) {
        append();
    }
})
setTime3.addEventListener('click', event => {
    clearInterval(timer3);
    thirdT = m;
    console.log(thirdT);
    setTime3.setAttribute("disabled", true);
    if ((firstT !== null) && (secondT !== null) && (thirdT != null)) {
        append();
    }
})

async function result() {
    console.log((firstT === secondT) && (secondT === thirdT));
    if ((firstT === secondT) && (secondT === thirdT)) {
        return "成功";
    } else {
        return "再度挑戦";
    }
}

async function append() {
    const app = await result();
    alert(app);
    nowtime1.textContent = 0;
    nowtime2.textContent = 0;
    nowtime3.textContent = 0;
    nowtime4.textContent = 9;
    nowtime5.textContent = 9;
    nowtime6.textContent = 9;
    nowtime7.textContent = 1;
    nowtime8.textContent = 1;
    nowtime9.textContent = 1;
    i = 0;
    j = 0;
    m = 0;
    firstT = null;
    secondT = null;
    thirdT = null;
    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
}