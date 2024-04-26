const todoDate = document.getElementById("date");
const todoRemark = document.getElementById("text");
const submitBtn = document.getElementById("submit");

let todos = [];

submitBtn.addEventListener("click", () => {
  let todo = {
    date: todoDate.value,
    remark: todoRemark.value,
  };
  if (todo.date && todo.remark) {
    todos.push(todo);
    displayTodo();
    clearInputs();
  } else {
    alert("date or remark field is empty");
  }
});

function displayTodo() {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("id", i);
    let textNode = document.createTextNode(
      todos[i].date + ":" + todos[i].remark
    );
    li.appendChild(textNode);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.innerHTML = "delete";

    deleteBtn.onclick = function () {
      deleteTodo(this.parentElement.getAttribute("id"));
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}

function clearInputs() {
  todoDate.value = "";
  todoRemark.value = "";
}

function deleteTodo(id) {
  todos.splice(id, 1);
  displayTodo();
}
