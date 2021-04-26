// let myHand = document.getElementById("myHand");
// let hand_m;
// const gameStart = document.getElementById("gameStart");
// let cpHand = document.getElementById("cpHand");
// let log = document.getElementById("log");
// let hand_c;
// cpHand.innerHTML = `相手の手：`;
// log.innerHTML = `結果：`;

// gameStart.addEventListener('click', function () {
//     hand_m = myHand.value;
//     hand_c = Math.floor(Math.random() * 3);
//     let cp;
//     if (hand_c === 0) {
//         cp = "グー"
//     } else if (hand_c === 1) {
//         cp = "チョキ"
//     } else {
//         cp = "パー"
//     }
//     cpHand.innerHTML = `相手の手：${cp}`
//     let result;
//     switch (hand_m) {
//         case '0':
//             if (hand_c === 1) {
//                 result = "勝ち";
//             } else if (hand_c === 0) {
//                 result = "引き分け";
//             } else {
//                 result = "負け";
//             }
//             break;
//         case '1':
//             if (hand_c === 2) {
//                 result = "勝ち";
//             } else if (hand_c === 1) {
//                 result = "引き分け";
//             } else {
//                 result = "負け";
//             }
//             break;
//         case '2':
//             if (hand_c === 0) {
//                 result = "勝ち";
//             } else if (hand_c === 2) {
//                 result = "引き分け";
//             } else {
//                 result = "負け";
//             }
//             break;
//         default:
//             result = "???";
//     }
//     log.innerHTML = `結果：${result}`;
// })


let playerHand = document.getElementById("playerHand");
let hand1;
let hand2;
let i = 0;

const player = document.getElementById("player");

const setHand = document.getElementById("setHand");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");
const log = document.getElementById("log");
log.innerHTML = `結果:`;
setHand.addEventListener("click", function () {
    if (i === 1) {
        hand2 = playerHand.value;
        player2Hand.textContent = "player2:セット完了"
        player.textContent = "両者セット完了"
    } else {
        hand1 = playerHand.value
        player1Hand.textContent = "player1:セット完了"
        player.textContent = "player2"
    }
    i += 1;
    console.log(i);
})

const gameStart = document.getElementById("gameStart");

gameStart.addEventListener("click", function () {
    let result;
    if (i >= 3) {
        alert("2回以上押さないでください。")
        i = 0;
        location.reload();
    }
    switch (hand1) {
        case '0':
            if (hand2 === '1') {
                result = "player1の勝ち";
            } else if (hand2 === '0') {
                result = "引き分け";
            } else {
                result = "player2の勝ち";
            }
            break;
        case '1':
            if (hand2 === '2') {
                result = "player1の勝ち";
            } else if (hand2 === '1') {
                result = "引き分け";
            } else {
                result = "player2の勝ち";
            }
            break;
        case '2':
            if (hand2 === 0) {
                result = "player1の勝ち";
            } else if (hand2 === 2) {
                result = "引き分け";
            } else {
                result = "player2の勝ち";
            }
            break;
        default:
            result = "???";
    }
    log.innerHTML = `結果：${result}`;
    player.textContent = "player1";
    playerHand.value = 0;
    player1Hand.textContent = "player1:"
    player2Hand.textContent = "player2:"
    hand1 = "";
    hand2 = "";
    reset = "";
    i = 0;
})
