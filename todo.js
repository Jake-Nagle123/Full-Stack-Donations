let todoItems = [];
let count = 0;

function addTodo() {
  count++;
  const todoText = document.getElementById("id-todo").value;
  console.log(`Add todo call ${count}: ${todoText}`) // JavaScript Template Strings ie ``

  const table = document.getElementById("todo-table");
  const row = table.insertRow(-1);
  const textCell = row.insertCell(0);
  textCell.innerText = todoText;
}