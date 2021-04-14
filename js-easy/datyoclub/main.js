let count = 0;

function reckon() {
    count += 1;
}

function finish() {
    const result = 'どうぞどうぞ'
    let reString = Array(count + 1).join(result);
    alert(reString);
    count = 0;
}

function unOwen() {
    count -= 1;
    if (count < 0) {
        alert("もう誰もいない、、、")
        count = 0;
    }
}
