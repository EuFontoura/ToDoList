function addTask(){
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if(taskText !== ""){
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");

        listItem.appendChild(document.createTextNode(taskText));
            listItem.innerHTML += '<button onclick="deleteTask(this)" class="btn btn-outline-warning">Excluir</button>';
            taskList.appendChild(listItem);
            taskInput.value = "";
    }
}

function deleteTask(button) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}