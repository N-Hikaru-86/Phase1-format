const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");


let showImg = document.getElementById("showImg");





const text = document.createElement('div')
showImg.appendChild(text);


setBtn.addEventListener("click", function () {
    for (let j = showImg.childNodes.length - 1; j >= 0; j--) {
        showImg.removeChild(showImg.childNodes[j])
    }
    let rand = Math.floor(Math.random() * 10);
    ransu(rand);
    console.log(rand)
})

function ransu(ra) {
    if (ra < 4) {
        const first = document.createElement('div');
        first.innerHTML = "<img src='img/evolution1.png' alt ='原人'/><p>原人</p>"
        showImg.appendChild(first);
    } else if (ra < 7) {
        const first = document.createElement('div');
        first.innerHTML = "<img src='img/evolution1.png' alt ='原人'/><p>原人</p>"
        showImg.appendChild(first);
        const second = document.createElement('div');
        second.innerHTML = "<img src='img/evolution2.png' alt ='旧人'/><p>旧人</p>"
        showImg.appendChild(second);
    } else if (ra < 9) {
        const first = document.createElement('div');
        first.innerHTML = "<img src='img/evolution1.png' alt ='原人'/><p>原人</p>"
        showImg.appendChild(first);
        const second = document.createElement('div');
        second.innerHTML = "<img src='img/evolution2.png' alt ='旧人'/><p>旧人</p>"
        showImg.appendChild(second);
        const third = document.createElement('div');
        third.innerHTML = "<img src='img/evolution3.png' alt ='新人'/><p>新人</p>"
        showImg.appendChild(third);
    } else {
        const first = document.createElement('div');
        first.innerHTML = "<img src='img/evolution1.png' alt ='原人'/><p>原人</p>"
        showImg.appendChild(first);
        const second = document.createElement('div');
        second.innerHTML = "<img src='img/evolution2.png' alt ='旧人'/><p>旧人</p>"
        showImg.appendChild(second);
        const third = document.createElement('div');
        third.innerHTML = "<img src='img/evolution3.png' alt ='新人'/><p>新人</p>"
        showImg.appendChild(third);
        const four = document.createElement('div');
        four.innerHTML = "<img src='img/evolution4.png' alt ='現代人'/><p>現代人</p>"
        showImg.appendChild(four);
    }
}





resetBtn.addEventListener('click', function () {
    for (let j = showImg.childNodes.length - 1; j >= 0; j--) {
        showImg.removeChild(showImg.childNodes[j])
    }
})