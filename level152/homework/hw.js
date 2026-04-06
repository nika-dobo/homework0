class ToDoList {
  constructor() {
    this.number = document.getElementById("number");
    this.ul = document.getElementById("todo-list");

    this.button = document.getElementById("add-task-btn");
    this.button.addEventListener("click", () => {
      this.listAdd();
    });

    this.inp = document.getElementById("task-input");

    this.count = 0;
  }

  listAdd() {
    let li = document.createElement("li");
    li.classList = "todo-item";

    let lable = document.createElement("label");
    lable.classList = "checkbox-container";
    let input = document.createElement("input");
    input.type = "checkbox";
    let span = document.createElement("span");
    span.classList = "checkmark";
    lable.append(input, span);
    li.appendChild(lable);

    let text = document.createElement("span");
    text.classList = "task-text";
    text.textContent = this.inp.value;
    li.appendChild(text);

    let editBtn = document.createElement("button");
    editBtn.classList = "edit-btn";
    let editIcon = document.createElement("ion-icon");
    editIcon.name = "create-outline";
    editBtn.appendChild(editIcon);
    li.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
      let inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = text.textContent;
      inputField.classList = "edit-input";

      li.replaceChild(inputField, text);

      let isEditing = true;

      const saveEdit = () => {
        if (isEditing) {
          if (inputField.value !== "") {
            text.textContent = inputField.value;
          }
          li.replaceChild(text, inputField);
          isEditing = false;
        }
      };

      inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          saveEdit();
        }
      });
    });

    let btn = document.createElement("button");
    btn.classList = "delete-btn";

    let icon = document.createElement("ion-icon");
    icon.name = "trash-outline";
    icon.addEventListener("click", (e) => {
      this.count--;
      this.number.textContent = this.count;
      e.target.parentElement.parentElement.remove();
      if (this.count < 0) {
        this.number.textContent = 0;
        this.count = 0;
      }
    });

    btn.appendChild(icon);
    li.appendChild(btn);

    input.addEventListener("change", () => {
      if (input.checked) {
        console.log("hi");

        text.style.textDecoration = "line-through";
        text.style.color = "rgba(255, 255, 255, 0.5)";
        this.count--;
        this.number.textContent = this.count;
        if (this.count < 0) {
          this.number.textContent = 0;
          this.count = 0;
        }
      } else {
        text.style.color = "#ffffff";
        text.style.textDecoration = "none";
        this.count++;
        this.number.textContent = this.count;
      }
    });

    if (this.inp.value === "") {
      return;
    }

    this.inp.value = "";
    this.count++;
    this.number.textContent = this.count;

    this.ul.appendChild(li);
  }
}

const toDo = new ToDoList();
