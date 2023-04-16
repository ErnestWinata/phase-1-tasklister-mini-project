const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const input = document.getElementById("new-task-description");
  const priority = document.getElementById("priority-level").value;
  const newTask = document.createElement("li");
  newTask.innerText = input.value;
  newTask.style.fontSize = "26px";

  if (priority === "high") {
    newTask.style.color = "fushsia";
  } else if (priority === "medium") {
    newTask.style.color = "blue";
  } else {
    newTask.style.color = "green";
  }

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Maybe Later";
  deleteButton.classList.add("delete-button");
  deleteButton.style.padding = "5px 10px";
  newTask.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    const taskItem = event.target.parentNode;
    taskItem.remove();
  });

  taskList.appendChild(newTask);
  form.reset();
});