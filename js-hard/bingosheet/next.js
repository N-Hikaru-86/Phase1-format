const hitNum = document.getElementById("hitNum");
let arrayN = Array.from(new Array(6), () => new Array(5).fill(0));;
for (let r = 0; r < 5; r++) {
    for (let s = 0; s < 6; s++) {
        arrayN[s][r] = bingoNum[r][s];
    }
}
arrayN = arrayN.flat();
let tdTag = document.getElementsByTagName("td");
tdTag[17].classList.add("hit-num");
let randomNum = [];
for (let u = 0; u < 74; u++) {
    randomNum[u] = u + 1;
}


hitNum.addEventListener("click", function () {
    let random = Math.ceil(Math.random() * 75);
    for (let v = 0; v < randomNum.length; v++) {
        if (random === randomNum[v]) {
            count -= 1;
            console.log(random);
            alert(`番号は${random}番です！\n\n残り数字${count}コ`);
            randomNum.splice(v, 1);
        }
    }
    for (let o = 0; o < 5; o++) {
        for (let p = 1; p < 6; p++) {
            if (bingoNum[o][p] === random) {
                console.log(bingoNum[o][p])
                for (let q = 0; q < arrayN.length; q++) {
                    if (arrayN[q] === bingoNum[o][p]) {
                        tdTag[q].classList.add("hit-num");
                        // hitWay(q);
                    }
                }
            }
        }
    }
})

// function hitWay(num) {
//     let hit = [];
//     let hitCount = 0;
//     hit[hitCount] = num;
//     hitCount += 1;
//     let height = 0;
//     let width = 0;
//     for (let num = 0; num < hit.length; num++) {
//         if (hit[num] > hit[num + 1]) {
//             hit[num] = hit[num + 1];
//         } else {
//             hit[num + 1] = hit[num];
//         }
//     }
//     console.log(hit);
//     for (let t = 0; t < hitCount - 1; t++) {
//         for (let u = 1; u < hitCount; u++) {
//             if (hit[t] - hit[u] === 5) {
//                 if (hit[t] === 5 && hit[t] === 25 || hit[t] === 6 && hit[t] === 26 || hit[t] === 7 && hit[t] === 27 || hit[t] === 8 && hit[t] === 28 || hit[t] === 9 && hit[t] === 29) {
//                     height += 1;
//                     if (height === 5) {
//                         alert("縦ビンゴ");
//                     }
//                 }
//             } else if (hit[t] - hit[u] === 1) {
//                 if (hit[t] === 5 && hit[t] === 9 || hit[t] === 10 && hit[t] === 14 || hit[t] === 15 && hit[t] === 19 || hit[t] === 20 && hit[t] === 24 || hit[t] === 25 && hit[t] === 29) {
//                     width += 1;
//                     if (width === 5) {
//                         alert("横ビンゴ");
//                     }
//                 }
//             } else if (hit[t] === 5 && hit[t] === 11 && hit[t] === 17 && hit[t] === 23 && hit[t] === 29) {
//                 alert("斜めビンゴ");
//             } else if (hit[t] === 9 && hit[t] === 13 && hit[t] === 17 && hit[t] === 21 && hit[t] === 25) {

//             }
//         }
//     }
//     console.log(height);
//     console.log(width);
//     console.log(hit);
// }

// /*
//   0  1  2  3  4
//   5  6  7  8  9
//  10 11 12 13 14
//  15 16 17 18 19
//  20 21 22 23 24
//  25 26 27 28 29
// */