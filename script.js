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
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

updateTaskList();

function updateClockAndDate() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Mês começa em 0, então somamos 1
    var year = now.getFullYear();

    var clockElement = document.getElementById("clock");
    var dateElement = document.getElementById("date");

    clockElement.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    dateElement.innerHTML = `${formatTime(day)}/${formatTime(month)}/${year}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClockAndDate, 1000);
updateClockAndDate();
