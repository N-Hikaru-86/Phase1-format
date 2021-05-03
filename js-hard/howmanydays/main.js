const dateSearch = document.getElementById("dateSearch");
let diffTime = document.getElementById("diffTime");

let mmnt;

dateSearch.addEventListener('click', function () {
    const dateSet = document.getElementById("dateSet").value;
    let time = moment(dateSet, 'YYYY-MM-DD HH:mm:ss')
    Timer(dateSet, time);
})

let timerSet;

function Timer(setting, setTime) {
    clearInterval(timerSet); //setIntervalで動いていたidを指定して一旦止める(何もない場合は動作しない)
    timerSet = setInterval(function () {
        mmnt = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log(setTime.diff(mmnt));
        let years = setTime.diff(mmnt, 'year');
        let days = setTime.diff(mmnt, 'day') % 365;
        let hours = setTime.diff(mmnt, 'hour') % 24;
        let min = setTime.diff(mmnt, 'minute') % 60;
        let sec = setTime.diff(mmnt, 'second') % 60;
        if (years === 0) {
            diffTime.textContent = `${setting}まであと${days}日${hours}時間${min}分${sec}秒`;
        } else {
            diffTime.textContent = `${setting}まであと${years}年${days}日${hours}時間${min}分${sec}秒`;
        }
    }, 1000)
    console.log(timerSet);
}

// const body = document.getElementsByTagName("body");
// const date = document.createElement("p");
// document.body.appendChild(date);

// let mmnt;
// const hpb = moment('2112-09-03 00:00:00');
// setInterval(function () {
//     mmnt = moment().format('YYYY-MM-DD HH:mm:ss');
//     let years = hpb.diff(mmnt, 'year');
//     let days = hpb.diff(mmnt, 'day') - years * 365;
//     let hours = hpb.diff(mmnt, 'hour') - days * 24;
//     let min = hpb.diff(mmnt, 'minute') - hpb.diff(mmnt, 'hour') * 60;
//     let sec = hpb.diff(mmnt, 'second') - hpb.diff(mmnt, 'minute') * 60;
//     date.textContent = `ドラえもんが生まれるまであと${years}年${days}日${hours}時間${min}分${sec}秒`;
// }, 1000)