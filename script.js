function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task !== "") {
    let li = document.createElement("li");
    li.textContent = task;

    // Add delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}
