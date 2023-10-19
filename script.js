function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        tasks.push(taskText);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        updateTaskList();

        taskInput.value = "";
    }
}

function updateTaskList() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (taskText) {
        var listItem = document.createElement("li");
        listItem.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.className = "btn btn-outline-warning";

        deleteButton.onclick = function () {
            deleteTask(taskText);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

function deleteTask(taskText) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    var index = tasks.indexOf(taskText);
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    updateTaskList();
}

updateTaskList();
