const start = document.getElementById("startTimer");
const confirm = document.getElementById("confirmTime");

let swi = 0;
var nowtime;
var pas_dt;
var past;
var pas_t;
var pastime;

start.addEventListener('click', function () {
    pastime = new Date();
    swi = 1;
    console.log(pastime);
    pas_dt = setInterval(function () {
        pasdate = new Date();
        console.log(pasdate);
    }, 1000);
    timeout();
})

function timeout() {
    setTimeout(function () {
        clearInterval(pas_dt);
        alert("タイムオーバーだぞ、笑えよ");
        location.reload();
    }, 40000);
}

confirm.addEventListener('click', function () {
    clearTimeout(timeout);
    clearInterval(pas_dt);
    if (swi !== 1) {
        alert("スタートを押せください");
        return;
    }
    now_d = new Date();
    console.log(now_d)
    let sec_t = Math.floor(now_d.getTime() - pastime.getTime()) / 1000;
    console.log(sec_t)
    result(sec_t)
    sec_t = 0;
    past = 0;
    nowtime = 0;
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
