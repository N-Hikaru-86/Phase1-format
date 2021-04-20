let change = document.getElementById("setTime");
let start = document.getElementById("startTimer");
let stop = document.getElementById("stopTimer");
let text = document.getElementById("nowTime");

let number = 10;//初期値

change.addEventListener('click', function () {
    number = document.getElementById("inputTime").value;
    let h = Math.floor(number / 3600);
    let m = Math.floor((number % 3600) / 60);
    let s = Math.floor(number % 60);
    text.innerHTML = `残り${h}時間${m}分${s}秒：セット完了です`
});



let loop;

start.addEventListener('click', function () {
    clearInterval(loop);
    loop = setInterval(function () {
        number -= 1
        let h = Math.floor(number / 3600);
        let m = Math.floor((number % 3600) / 60);
        let s = Math.floor(number % 60);
        text.innerHTML = `残り${h}時間${m}分${s}秒`
        if (number === 0) {
            clearInterval(loop);
            alert('終了')
        }
    }, 1000)
});

stop.addEventListener('click', function () {
    clearInterval(loop);
    let h = Math.floor(number / 3600);
    let m = Math.floor((number % 3600) / 60);
    let s = Math.floor(number % 60);
    text.innerHTML = `残り${h}時間${m}分${s}秒でストップしました`
})
