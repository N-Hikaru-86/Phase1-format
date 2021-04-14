const pattern1 = "ぺっぺっぺ～"
const pattern2 = "斉藤さんだぞぉ～↑"

function setBtn() {
    const random = Math.random() * 10;
    if (random > 5) {
        const result1 = window.confirm(pattern1)
        if (result1 === true) {
            alert(pattern1)
        } else {
            alert(pattern2)
        }
    }
    if (random <= 5 && random > 10) {
        const result2 = window.confirm(pattern2)
        if (result2 === true) {
            if (pattern2 === true) {
                alert(pattern2)
            } else {
                alert(pattern1)
            }
        }
    }
};

