const addArea = document.getElementById("add-area");
const add_btn = document.getElementsByClassName("add-btn");
const addBtn = add_btn[0];
const todo = document.getElementById("todo");
const todo_app = document.getElementById("todo-app");
console.log(addArea.length)

addBtn.addEventListener("click", event => {
    if (addArea.length === undefined) {
        alert("空です！");
        return 0;
    }
    let list = document.createElement('li');
    todo.appendChild(list)
    let text = document.createElement('p');
    let delBtn = document.createElement('button');
    text.textContent = addArea.value;
    delBtn.textContent = "削除する";
    list.appendChild(text);
    text.appendChild(delBtn);
    // let reborn = text;
    delBtn.addEventListener("click", event => {
        list.parentNode.removeChild(list);
        // let rebBtn = document.createElement('button');
        // rebBtn.textContent = "復活する";
        // todo_app.appendChild(rebBtn);
        // rebBtn.addEventListener("click", event => {
        //     list = reborn;
    })
})
// })