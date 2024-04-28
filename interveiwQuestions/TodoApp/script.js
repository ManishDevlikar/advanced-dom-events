let inputDate = document.querySelector("#date");
let inputText = document.querySelector("#text");

let saveBtn = document.querySelector("#save-btn");
// let clearBtn = document.querySelector('#clear-btn');

let notes = [];

saveBtn.addEventListener("click", function (e) {
  let newNote = {
    date: inputDate.value,
    text: inputText.value,
  };
  if (newNote.date && newNote.text) {
    notes.push(newNote);
    showInTable();
  } else {
    alert("Enter date and note");
  }
});

function deleteNote(id) {
  notes.splice(id, 1);
  showInTable();
}

function showNotes() {
  let noteList = document.querySelector("#notes");
  noteList.innerHTML = "";
  for (let i = 0; i <= notes.length - 1; i++) {
    let li = document.createElement("li");
    let textNode = document.createTextNode(
      `Date: ${notes[i].date} : Task: ${notes[i].text}`
    );
    li.appendChild(textNode);
    li.setAttribute("id", i);
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "delete";
    deleteBtn.onclick = function () {
      deleteNote(li.getAttribute("id"));
    };
    li.appendChild(deleteBtn);
    noteList.appendChild(li);
  }
}

// -------------------------------- In table format ----------------------------------------

function showInTable() {
  let table = document.getElementById("show-table");
  table.innerHTML = "";
  let tableHeader = document.createElement("tr");
  let srHeader = document.createElement("th");
  srHeader.innerText = "Sr.";
  tableHeader.appendChild(srHeader);
  let dateHeader = document.createElement("th");
  dateHeader.innerText = "Date";
  tableHeader.appendChild(dateHeader);
  let taskHeader = document.createElement("th");
  taskHeader.innerText = "Task";
  tableHeader.appendChild(taskHeader);
  let deleteHeader = document.createElement("th");
  deleteHeader.innerText = "delete";
  tableHeader.appendChild(deleteHeader);
  table.appendChild(tableHeader);

  for (let i = 0; i <= notes.length - 1; i++) {
    let note = notes[i];
    let row = document.createElement("tr");
    let srCell = document.createElement("td");
    srCell.innerText = `${i + 1}`;
    let dateCell = document.createElement("td");
    dateCell.innerText = note.date;
    let taskCell = document.createElement("td");
    taskCell.innerText = note.text;
    let deleteCell = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
      deleteNote(i);
    };
    deleteCell.appendChild(deleteBtn);
    row.appendChild(srCell);
    row.appendChild(dateCell);
    row.appendChild(taskCell);
    row.appendChild(deleteCell);
    table.appendChild(row);
  }
}
