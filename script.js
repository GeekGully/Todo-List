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

<<<<<<< HEAD
  // Create an <i> element for arrow down
  var iElement = document.createElement("i");

  // Add material icon class to it
  iElement.className = "material-icons down";

  // Add content to <i> tag so that it can dispaly icon
  iElement.innerHTML = "keyboard_arrow_down";

  // Append to li elements
  li.appendChild(iElement);

  // Moved the del button to bottom so that it can be appended after <span>
  // Create del button element
  var deleteBtn = document.createElement("button");
=======
  
  // Create an arrow down Element or <span> element that hold the icon (arrow down)
  var spanElement = document.createElement("span");

  // Create an <i> element.
  var iElement = document.createElement("i");
>>>>>>> 70aebc2d3fd5ad156cdda4cb0b144975df30e88e

  // Add material icon class to it
  iElement.className = "material-icons";

<<<<<<< HEAD
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
=======
  // Add content to <i> tag so that it can dispaly icon
  iElement.innerHTML = "keyboard_arrow_down";

  // Add <i> element to <span> element
  spanElement.appendChild(iElement);
>>>>>>> 70aebc2d3fd5ad156cdda4cb0b144975df30e88e


<<<<<<< HEAD
=======
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

>>>>>>> 70aebc2d3fd5ad156cdda4cb0b144975df30e88e
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

window.onload = function() {
  var downArrow = document.querySelectorAll(".down");

  for (var i = 0; i < downArrow.length; i++) {
    downArrow[i].addEventListener("click", function() {
      var addDown = this.parentElement;

      if (addDown.nextElementSibling)
        addDown.parentNode.insertBefore(addDown.nextElementSibling, addDown);
    });
  }
};
