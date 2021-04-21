const startDel = document.getElementById("iniDel");
const finalDel = document.getElementById("endDel");
let textform = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");
const max = 400;
let textarea;


textCounter.innerHTML = `あと${max}文字`;

textform.addEventListener("keyup", event => {
    let m = textform.value.length;
    let n = max;
    n -= m;
    textarea = textform.value;
    textCounter.innerHTML = `あと${n}文字`;
});

resetBtn.addEventListener("click", event => {
    textform.value = "";
    textCounter.innerHTML = `あと${max}文字`;
})

startDel.addEventListener("click", event => {
    textarea = textarea.slice(1);
    textform.value = textarea;
    n = n - textform.value.length;
    textCounter.innerHTML = `あと${n}文字`;
})

finalDel.addEventListener("click", event => {
    textarea = textarea.slice(0, -1);
    textform.value = textarea;
    n = n - textform.value.length;
    textCounter.innerHTML = `あと${n}文字`;
})