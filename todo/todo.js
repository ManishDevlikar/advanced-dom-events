const todaDate = document.getElementById("date");
const todoRemark = document.getElementById("text");
const submitBtn = document.getElementById("submit");

let todos = [];

submitBtn.addEventListener("click", function () {
  let newTodo = {
    date: todaDate.value,
    remark: todoRemark.value,
  };
  if (newTodo.date && newTodo.remark) {
    todos.push(newTodo);
    displayTodos();
    clearInputs();
  } else {
    alert("Please fill out all fields");
  }
});

function displayTodos() {
  var todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("id", i);
    li.appendChild(
      document.createTextNode(todos[i].date + ": " + todos[i].remark)
    );
    let delButton = document.createElement("button");
    delButton.setAttribute("class", "delete");
    delButton.innerHTML = "Delete";
    delButton.onclick = function () {
      deleteTodo(this.parentElement.getAttribute("id"));
    };
    li.appendChild(delButton);
    todoList.appendChild(li);
  }
}

function deleteTodo(id) {
  todos.splice(id, 1);
  displayTodos();
}

function clearInputs() {
  todaDate.value = "";
  todoRemark.value = "";
}
