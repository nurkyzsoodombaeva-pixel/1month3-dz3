// <li class="task">
//    <input type="checkbox" />
//    <span>name</span>
//    <button>x</button>
// </li>;

// <li class="task">
//   <input type="checkbox" />
//   <span>name</span>
//   <button></button>
// </li>

const inputCreateElement = document.querySelector("#todo-input");
const buttonCreateElement = document.querySelector("#todo-form button");
const todoListElement = document.querySelector("#todo-list");

buttonCreateElement.addEventListener("click", (event) => {
  event.preventDefault();

  const taskElement = document.createElement("li");
  todoListElement.append(taskElement);
  taskElement.setAttribute("class", "task");

  const checkboxElement = document.createElement("input");
  taskElement.append(checkboxElement);
  checkboxElement.setAttribute("type", "checkbox");

  const nameElement = document.createElement("span");
  taskElement.append(nameElement);
  nameElement.innerText = inputCreateElement.value;

  // const deleteElement = document.createElement("button");
  // deleteElement.setAttribute("class", "del");
  // taskElement.append(deleteElement);
  // deleteElement.addEventListener("click", () => {
  //   taskElement.remove();
  // });
  // deleteElement.innerText = "x";

  const deleteElement = document.createElement("button");
  deleteElement.innerText = "x";
  taskElement.append(deleteElement);

  checkboxElement.addEventListener("click", () => {
    if (checkboxElement.checked) {
      taskElement.classList.add("completed");
      alert(`Задача "${nameElement.innerText}" успешно выполнена`);
    } else {
      taskElement.classList.remove("completed");
    }
  })
  deleteElement.addEventListener("click", () => {
    return taskElement.remove();
  })
  
});


