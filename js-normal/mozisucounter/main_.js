const textform = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");
const max = 400;

textCounter.innerHTML = `あと${max}文字`;
textform.addEventListener("keyup", event => {
    let m = textform.value.length;
    let n = 400;
    n -= m;
    textCounter.innerHTML = `あと${n}文字`;
});

resetBtn.addEventListener("click", event => {
    textform.value = "";
    textCounter.innerHTML = `あと${max}文字`;
})