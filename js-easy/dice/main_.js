const dice1 = document.getElementById("diceBtn1")
const dice2 = document.getElementById("diceBtn2")
const result_img1 = document.getElementById("result_img1")
const result_img2 = document.getElementById("result_img2")
const dice_img = ["img/saikoro1.png",
    "img/saikoro2.png",
    "img/saikoro3.png",
    "img/saikoro4.png",
    "img/saikoro5.png",
    "img/saikoro6.png"];
const txt = document.getElementById("result_txt")
let i = 0;
let count = dice_img.length
let loop_loop1;
let loop_loop2;
let result_3sec_1;
let result_3sec_2;
let turn = 2;
var loop_turn1 = 0;
var loop_turn2 = 0;

dice1.addEventListener('click', function first() {
    clearInterval(loop_loop1)
    clearTimeout(result_3sec_1)
    let number1 = player1 - 1;
    loop_loop1 = setInterval(loop1, 100);
    result_3sec_1 = setTimeout(function result1() {
        clearInterval(loop_loop1);
        result_img1.src = dice_img[number1];
    }, 3000);
})
dice2.addEventListener('click', function second() {
    clearInterval(loop_loop2)
    clearTimeout(result_3sec_2)
    let number2 = player2 - 1;
    loop_loop2 = setInterval(loop2, 100);

    result_3sec_2 = setTimeout(function result2() {
        clearInterval(loop_loop2);
        result_img2.src = dice_img[number2];
    }, 3000);
})


let player1 = Math.ceil(Math.random() * 6);
let player2 = Math.ceil(Math.random() * 6);


if (loop_turn1 !== 0 && loop_turn2 !== 0) {
    if (player1 > player2) {
        txt.textContent = "プレイヤー1の勝ち"
    } else if (player2 > player1) {
        txt.textContent = "プレイヤー2の勝ち"
    } else {
        txt.textContent = "引き分け"
    }
}


function loop1() {
    loop_turn1 += 1;
    result_img1.src = dice_img[i];
    if (i === count - 1) {
        i = 0;
    }
    i += 1;
}

function loop2() {
    loop_turn2 += 1;
    result_img2.src = dice_img[i];
    if (i === count - 1) {
        i = 0;
    }
    i += 1;
}
