const body = document.getElementsByTagName("body");
const date = document.createElement("p");
document.body.appendChild(date);

let mmnt;
const hpb = moment('2112-09-03 00:00:00');
setInterval(function () {
    mmnt = moment().format('YYYY-MM-DD HH:mm:ss');
    let days = hpb.diff(mmnt, 'day');
    let hours = hpb.diff(mmnt, 'hour') - days * 24;
    let min = hpb.diff(mmnt, 'minute') - hpb.diff(mmnt, 'hour') * 60;
    let sec = hpb.diff(mmnt, 'second') - hpb.diff(mmnt, 'minute') * 60;
    date.textContent = `ドラえもんが生まれるまであと${days}日${hours}時間${min}分${sec}秒`;
}, 1000)
