var form = document.getElementById("addForm");
var taskList = document.getElementById("items");
//Form add event

form.addEventListener("submit", addTask);

// Add Task
function addTask(e) {
  e.preventDefault();

  // Get input value
  var newTask = document.getElementById("new_task").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "task-item";
  // Add li to ul
  taskList.appendChild(li);
  // Add text node with input value
  li.appendChild(document.createTextNode(newTask));
}
