const body = document.querySelector("body");
const dice1 = document.getElementById("diceBtn1");
const dice2 = document.getElementById("diceBtn2");

const result_img1 = document.createElement('img');
const result_img2 = document.createElement('img');
body.appendChild(result_img1);
body.appendChild(result_img2);
result_img1.style.width = '100px';
result_img2.style.width = '100px';
result_img1.style.height = '100px';
result_img2.style.height = '100px';
var first_random = 1;
var second_random = 1;
let imgpass1 = `./img/saikoro${first_random}.png`;
let imgpass2 = `./img/saikoro${second_random}.png`;
result_img1.setAttribute('src', imgpass1);
result_img2.setAttribute('src', imgpass2);
turn = 2;
const txt = document.getElementById("result_txt");

const ran_first1 = function () {
    first_random = Math.ceil(Math.random() * 6)
    let random_res = `./img/saikoro${first_random}.png`;
    result_img1.setAttribute('src', random_res)
}
let loop_loop1;

dice1.addEventListener('click', function () {
    clearInterval(loop_loop1);
    loop_loop1 = setInterval('ran_first1()', 100);
    dice1.disabled = true;
    async_re1();
})

const async_re1 = async () => {
    const result1p = function () {
        return new Promise(function (resolve) {
            txt.innerHTML = "???";
            result1 = setTimeout(() => {
                clearInterval(loop_loop1);
                resolve();
            }, 3000);
        })
    }
    await result1p();
    turn = turn - 1;
    hikaku();
}

const ran_first2 = function () {
    second_random = Math.ceil(Math.random() * 6)
    let random_res = `./img/saikoro${second_random}.png`;
    result_img2.setAttribute('src', random_res)
}
let loop_loop2;

dice2.addEventListener('click', function () {
    clearInterval(loop_loop2);
    loop_loop2 = setInterval('ran_first2()', 100);
    dice2.disabled = true;
    async_re2();
})
const async_re2 = async function () {
    const result2p = function () {
        return new Promise(function (resolve) {
            txt.innerHTML = "???"
            result2 = setTimeout(() => {
                clearInterval(loop_loop2);
                resolve();
            }, 3000);
        })
    }
    await result2p();
    turn = turn - 1;
    hikaku();
}


const hikaku = function () {
    if (turn !== 0) {
        return;
    }
    if (first_random > second_random) {
        txt.textContent = "プレイヤー1の勝ち"
        Location.reload();
    } else if (first_random === second_random) {
        txt.textContent = "引き分け"
    } else {
        txt.textContent = "プレイヤー2の勝ち"
        Location.reload();
    }

    dice1.disabled = false;
    dice2.disabled = false;
    turn = 2;
}