const start = document.getElementById("startTimer");
const confirm = document.getElementById("confirmTime");

function timeout() {
    setTimeout(function () {
        clearInterval(timekeeper);
        alert("タイムオーバーだぞ、笑えよ");
        time = 0;
        location.reload();
    }, 40000)
}

let time = 0;
let swi = 0;

start.addEventListener('click', function () {
    timekeeper();
    timeout();
    swi = 1;
})

function timekeeper() {
    setInterval(function () {
        time += 1;
    }, 1000)
}

confirm.addEventListener('click', function () {
    clearInterval(timekeeper);
    clearTimeout(timeout);
    if (swi !== 1) {
        alert("スタートを押せください");
        return;
    }
    result(time);
    time = 0;
})

function result(t) {
    if (t === 20) {
        alert(`そっかぁ……`)
        location.reload();
    } else if (t < 20) {
        alert(`まだ${t}秒なんだよな`);
        location.reload();
    } else if (t > 20 && t < 40) {
        alert(`もう${t}だぜ？`)
        location.reload();
    }
}

