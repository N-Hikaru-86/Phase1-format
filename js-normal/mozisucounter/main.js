let textform = document.getElementById("sampleForm").value;
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");
let n = 400;
textCounter.innerHTML = `あと${n}文字`;
textform.addEventlistener('onkeyup', KeyUp);

function KeyUp() {
    n -= 1;
    textCounter.innerHTML = `あと${n}文字`;
}