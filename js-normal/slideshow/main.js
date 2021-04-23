const viewImg = document.getElementById("viewImg")


const season4 = [
    { img: 'img/slide1.png', text: `春へ` },
    { img: 'img/slide2.png', text: `夏へ` },
    { img: 'img/slide3.png', text: `秋へ` },
    { img: 'img/slide4.png', text: `冬へ` },
];

viewImg.src = season4[0].img;

const pushBtn = document.getElementById("pushBtn");
pushBtn.textContent = season4[0].text;
let n = 0;

pushBtn.addEventListener('click', event => {
    if (n === 3) {
        n = 0;
    } else {
        n += 1;
    }
    pushBtn.textContent = season4[n].text;
    viewImg.src = season4[n].img;
    console.log(n)
})

const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener('click', event => {
    const seasonNum = document.getElementById("seasonNum").value;
    number = parseInt(seasonNum);
    num(number);
})

function num(m) {
    if (m === 0) {
        viewImg.src = season4[0].img
        pushBtn.textContent = season4[0].text;
    } else if (m === 1) {
        viewImg.src = season4[1].img
        pushBtn.textContent = season4[1].text;
    } else if (m === 2) {
        viewImg.src = season4[2].img
        pushBtn.textContent = season4[2].text;
    } else {
        viewImg.src = season4[3].img
        pushBtn.textContent = season4[3].text;
    }
}
