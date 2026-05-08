const count = document.getElementById("count");
const formTodo = document.getElementById("form-todo");
const todoItems = document.getElementById("todo-items");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function createToduItem(inpTxt) {
  let main_div = document.createElement("div");
  main_div.id = "item";

  let left = document.createElement("div");
  left.className = "left";

  let checkbox = document.createElement("button");
  checkbox.id = "todo_items_left";

  let p = document.createElement("p");
  p.id = "text-todo";
  p.textContent = inpTxt;

  left.appendChild(checkbox);
  left.appendChild(p);
  main_div.appendChild(left);

  let right = document.createElement("div");
  right.className = "right";

  let edit = document.createElement("img");
  edit.src = "img/edit.svg";
  edit.id = "edit";

  let del = document.createElement("img");
  del.src = "img/delete.svg";
  del.id = "delete";

  right.appendChild(edit);
  right.appendChild(del);
  main_div.appendChild(right);

  todoItems.appendChild(main_div);
}

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  let textInput = e.target.todo_item_text.value;
  tasks.push(textInput);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  createToduItem(textInput);
});

for (let i = 0; i < tasks.length; i++) {
  createToduItem(tasks[i]);
}
