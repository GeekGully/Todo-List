var form = document.getElementById("addForm");
var taskList = document.getElementById("items");
var input = document.getElementById("new_task");

//Form add event
form.addEventListener("submit", addTask);

// Delete event
taskList.addEventListener("click", removeItem);

// Add Task
function addTask(e) {
  e.preventDefault();

  // Get input value
  var newTask = document.getElementById("new_task").value;

  // Create new li element
  var li = document.createElement("li");

  // Add class
  li.className = "task-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newTask));

  
  // Create an arrow down Element or <span> element that hold the icon (arrow down)
  var spanElement = document.createElement("span");

  // Create an <i> element.
  var iElement = document.createElement("i");

  // Add material icon class to it
  iElement.className = "material-icons";

  // Add content to <i> tag so that it can dispaly icon
  iElement.innerHTML = "keyboard_arrow_down";

  // Add <i> element to <span> element
  spanElement.appendChild(iElement);


  // Append to li elements
  li.appendChild(spanElement);


  // Moved the del button to bottom so that it can be appended after <span>
  // Create del button element
  var deleteBtn = document.createElement("button");

  // ADD Class to del button
  deleteBtn.className = "btn-danger";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Add li to ul
  taskList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("btn-danger")) {
    var li = e.target.parentElement;
    taskList.removeChild(li);
    // li.style.opacity = "0";
    // setTimeout(function() {
    //   // fade out function for delete button
    //   taskList.removeChild(li);
    // }, 1000);
  }
}
