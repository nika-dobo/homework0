const countDetector = document.getElementById("count");
const formTodo = document.getElementById("form-todo");
const todoItems = document.getElementById("todo-items");
const deleteAllBtn = document.getElementById("btn-delete-all");
const sort = document.getElementById("sort");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let doneTasks = 0;
let totalTasks = JSON.parse(localStorage.getItem("tasks"))?.length || 0;

function createToduItem(inpTxt, isCompleted) {
  isCompleted = isCompleted || false;

  let main_div = document.createElement("div");
  main_div.id = "item";

  let left = document.createElement("div");
  left.className = "left";

  let checkbox = document.createElement("button");
  checkbox.id = "todo_items_left";
  checkbox.addEventListener("click", () => {
    if (isCompleted) {
      checkbox.style.backgroundColor = "#0d0d0d";
      p.style.textDecoration = "none";
      p.style.color = "#ffffff";
      doneTasks--;
    } else {
      checkbox.style.backgroundColor = "#88ab33";
      p.style.textDecoration = "line-through";
      p.style.color = "#ffffff77";
      doneTasks++;
    }
    countDetector.textContent = `${doneTasks}/${totalTasks}`;
    isCompleted = !isCompleted;
    tasks.find((item) => {
      if (item.text === p.textContent) {
        item.isCompleted = isCompleted;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });


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

  function deleteItem() {
    main_div.remove();
    tasks = tasks.filter((task) => task !== p.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    totalTasks--;
    countDetector.textContent = `${doneTasks}/${totalTasks}`;
  }

  del.addEventListener("click", deleteItem);

  right.appendChild(edit);
  right.appendChild(del);
  main_div.appendChild(right);

  todoItems.appendChild(main_div);

  sort.addEventListener("change", () => {
    if (sort.value === "complited" && isCompleted) {
      main_div.style.display = "flex";
    } else if (sort.value === "not-complited" && !isCompleted) {
      main_div.style.display = "flex";
    } else if (sort.value === "all") {
      main_div.style.display = "flex";
    } else {
      main_div.style.display = "none";
    }
  });
}

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  let textInput = e.target.todo_item_text.value.trim();
  if (textInput === "" || tasks.includes(textInput)) return;
  e.target.todo_item_text.value = "";
  tasks.push({
    text: textInput,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  createToduItem(textInput);
  totalTasks++;
  countDetector.textContent = `${doneTasks}/${totalTasks}`;
});

deleteAllBtn.addEventListener("click", () => {
  todoItems.innerHTML = "";
  tasks = [];
  totalTasks = 0;
  doneTasks = 0;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  countDetector.textContent = `${doneTasks}/${totalTasks}`;
});

for (let i = 0; i < tasks.length; i++) {
  createToduItem(tasks[i].text, tasks[i].isCompleted);
  if (tasks[i].isCompleted) {
    doneTasks++;
  }
  countDetector.textContent = `${doneTasks}/${totalTasks}`;
}
