const addArea = document.getElementById("add-area");
const add_btn = document.getElementsByClassName("add-btn");
const addBtn = add_btn[0];
const todo = document.getElementById("todo");

addBtn.addEventListener("click", event => {
    let list = document.createElement('li');
    todo.appendChild(list)
    let text = document.createElement('p');
    let delBtn = document.createElement('button');
    text.textContent = addArea.value;
    delBtn.textContent = "削除する";
    list.appendChild(text);
    text.appendChild(delBtn);
    delBtn.addEventListener("click", event => {
        list.parentNode.removeChild(list);
    })
})