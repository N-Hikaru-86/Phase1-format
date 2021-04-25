const nowPassword = document.getElementById("nowPassword");
let pass = 'aaaaa'
let com = /^\d{3}-?\d{4}$/g;
nowPassword.innerHTML = `現在のパスワードは${pass}`


const confirmPassword = document.getElementById("confirmPassword");


const newPassword = document.getElementById("newPassword");
const setPassword = document.getElementById("setPassword");

setPassword.addEventListener("click", function () {
    let cPass = confirmPassword.value;
    console.log(cPass);
    let newPass = newPassword.value;
    console.log(newPass);
    if (newPass.match(com) === null) {
        alert("xxx-yyyyの形式で入力してください！");
        return;
    } else if (newPass.match(/(.)\1[2,]/) === null) {
        alert("連続しない文字にしてください");
        return;
    } else if (newPass.match(/^abc$/) !== null) {
        alert("abcは禁止です");
        return;
    } else if (newPass.length <= 7) {
        alert("短いです！セキュリティ上危険なので8文字以上にしてください！")
        return;
    } else if (cPass !== pass) {
        alert("現在のパスワードが違います！");
        return;
    } else if (newPass === pass) {
        alert("現在のパスワードと同じです！");
        return;
    } else {
        pass = newPass;
        alert(`新しいパスワードは${newPass}です。`)
        nowPassword.innerHTML = `現在のパスワードは${pass}`
    }
})