// Add Validiation for empty input feild
document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  }
  // Adding a new task
  else {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
           <span id='taskname'>
               ${document.querySelector("#newtask input").value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
    </div>
    `;
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    // crossing off a completed tasks
    var complete_task = document.querySelectorAll(".task");
    for (var i = 0; i < complete_task.length; i++) {
      complete_task[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    // clearing the input feild after each entry
    document.querySelector("#newtask input").value = "";
  }
};
