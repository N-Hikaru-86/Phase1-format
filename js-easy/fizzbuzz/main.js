let i = 1
const appear = document.getElementById("num")
const fizzbuzz = document.getElementById("fizzbuzz")
const fizz = document.getElementById("fizz")
const buzz = document.getElementById("buzz")
const number = document.getElementById("number")
appear.textContent = i;

fizzbuzz.addEventListener(`click`, func = () => {
    i = i + 1
    if (i % 3 === 0 && i % 5 === 0) {
        appear.textContent = i;
    } else {
        alert("天誅");
        location.reload();
    }
})

fizz.addEventListener(`click`, func = () => {
    i = i + 1
    if (i % 3 === 0) {
        appear.textContent = i;
    } else {
        alert("天誅");
        location.reload();
    }
})

buzz.addEventListener(`click`, func = () => {
    i = i + 1
    if (i % 5 === 0) {
        appear.textContent = i;
    } else {
        alert("天誅");
        location.reload();
    }
})

number.addEventListener(`click`, func = () => {
    i = i + 1
    if (i === 0 || i % 3 !== 0 && i % 5 !== 0) {
        appear.textContent = i;
    } else {
        alert("天誅");
        location.reload();
    }
})