let compare = Array.from(new Array(5), () => new Array(6).fill(0));;
let bingoNum = Array.from(new Array(5), () => new Array(6).fill(0));
let count = 75;
const random = (num) => {
    Math.ceil(Math.random() * 15) + num * 15;
}

for (let i = 1; i < 6; i++) {
    for (let k = 0; k < 5; k++) {
        compare[k][i] = random(k);
    }
    for (let j = 0; j < 5; j++) {
        for (let m = 0; m < i; m++) {
            if (compare[j][i] === compare[j][m]) {
                i -= 1;
            } else {

                for (let n = 1; n < 6; n++) {
                    bingoNum[0][n] = compare[0][n];
                    bingoNum[1][n] = compare[1][n];
                    bingoNum[2][n] = compare[2][n];
                    bingoNum[3][n] = compare[3][n];
                    bingoNum[4][n] = compare[4][n];
                }
            }
        }
    }
}


bingoNum[0][0] = "B";
bingoNum[1][0] = "I";
bingoNum[2][0] = "N";
bingoNum[3][0] = "G";
bingoNum[4][0] = "O";

bingoNum[2][3] = "free";

let view = document.getElementById("view");

for (let n = 0; n < 6; n++) {
    let newRow = document.createElement("tr");
    view.appendChild(newRow);
    for (let y = 0; y < 5; y++) {
        let newCeil = document.createElement("td");
        newRow.appendChild(newCeil);
        newCeil.textContent = bingoNum[y][n];
    }

}
