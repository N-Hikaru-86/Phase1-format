let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let rand = [];
let randNum;
let n = 0;
let max = 3;
for (let i = 0; i < max; i++) {
    randNum = Math.floor(Math.random() * 10);
    for (let j = 0; j <= number.length; j++) {
        if (number[j] === randNum) {
            rand[i] = number[j];
            number.splice(j, 1);
        }
    } if (rand[i] === undefined) {
        i -= 1;
    }
    console.log(rand);
}

const numCheck = document.getElementById("numCheck");
numCheck.disabled = false;
const remainTurn = document.getElementById("remainTurn")
let remain = 10;
remainTurn.textContent = `あと残り${remain}回です`
let turn = 0;
let duplicate = [];

numCheck.addEventListener('click', function () {
    turn += 1
    let eat = 0;
    let bite = 0;
    const answerNum = document.getElementById("answerNum");
    let answNum = answerNum.value;
    if (answNum === "") {
        alert("何か入力してください");
        answerNum.value = "";
        turn -= 1;
        return 0;
    }
    let ansArr = answNum.split('');
    let ansArray = ansArr.map(Number);
    duplicate = new Set(ansArray);
    if (duplicate.size !== ansArray.length) {
        alert("同じ数字を入れないでください！");
        answerNum.value = "";
        turn -= 1;
        return 0;
    } else if (ansArray.length >= 4 || ansArray.length < 3) {
        alert("3文字にしてください");
        answerNum.value = "";
        turn -= 1;
        return 0;
    }
    for (let q = 0; q < 3; q++) {
        for (let p = 0; p < 3; p++) {
            if (rand[q] === ansArray[p]) {
                if (q === p) {
                    eat += 1;
                } else {
                    bite += 1;
                }
            }
        }
    }
    if (eat === 3) {
        alert("正解です！");
        turnResult(turn);
        reset();

    } else {
        answerNum.value = "";
        remain -= 1;
        console.log(turn);
        console.log(remain)
        remainTurn.textContent = `あと残り${remain}回です`
        alert(`${eat} EAT   ${bite} BITE`);
        if (remain <= 0) {
            remainTurn.textContent = `終了です。答えは${rand.join("")}でした。`
            setTimeout(() => {
                reset();
            }, 1000);
        } else if (remain <= 3) {
            remainTurn.style.color = "red";
        }
    }
})


function turnResult(m) {
    if (m < 3) {
        alert(`${m}回目でクリア\n秀。何があった。`);
    } else if (m < 5) {
        alert(`${m}回目でクリア\n優。`);
    } else if (m <= 10) {
        alert(`${m}回目でクリア\n並。規定通り。`)
    }

    // if (t < 6) {
    //     alert(`${t}回目でクリア\nどうかしている。`);
    // } else if (t < 11) {
    //     alert(`${t}回目でクリア\n普通に凄い。`);
    // } else if (t < 26) {
    //     alert(`${t}回目でクリア\n普通なのか？`);
    // } else {
    //     alert(`${t}回目でクリア\n今日も1日頑張るぞい。`);

    // }
}

function reset() {
    const con = confirm("またやりますか？");
    if (con === true) {
        remain = 10;
        turn = 0;
        answerNum.value = "";
        remainTurn.style.color = "#000";
        location.reload();
    } else {
        answerNum.value = "";
        numCheck.disabled = true;
        remainTurn.textContent = "もう一度遊ぶ場合はReload"
        remainTurn.style.color = "#000";
    }
}