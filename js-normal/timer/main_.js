let change = document.getElementById("setTime");
let start = document.getElementById("startTimer");
let stop = document.getElementById("stopTimer");
let text = document.getElementById("nowTime");

let number = 10;//初期値
change.addEventListener('click', function () {
    number = document.getElementById("inputTime").value;
    text.innerHTML = `${number}：セット完了です`
});



let loop;

start.addEventListener('click', function () {
    clearInterval(loop);
    loop = setInterval(function () {
        number -= 1
        text.innerHTML = number;
        if (number === 0) {
            clearInterval(loop);
            alert('終了')
        }
    }, 1000)
});

stop.addEventListener('click', function () {
    clearInterval(loop);
    text.innerHTML = `${number}：停止中です`
})