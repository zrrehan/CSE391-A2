import { getTasks, createTask, updateTask } from "./db.js";

let taskHtml = "";

getTasks().map((singleTask) => {
    console.log(singleTask);
    if(!singleTask.deleted) {
        taskHtml += `
        <div class = "single-task" id = "${singleTask.id}">
            <input ${singleTask.completed && "checked"} class = "input-checkbox" type="checkbox" value = "${singleTask.id}">
            <p ${singleTask.completed && `style="text-decoration: line-through;"`}>${singleTask.title}</p>
            <button id = "delete-task-btn" class = "btn btn-red" value = "${singleTask.id}">Delete</button>
        </div>
    `
    }
})
document.querySelector(".all-tasks").innerHTML = taskHtml

document.querySelectorAll(".input-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        updateTask(checkbox.value, {
            completed: checkbox.checked
        })
     
        window.location.reload();

    })
})

document.querySelectorAll("#delete-task-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        updateTask(btn.value, {
            deleted: true
        })
        window.location.reload();
    })
    
})

document.querySelector("#add-task-btn").addEventListener("click", () => {
    const inputField = document.querySelector("#task-input").value;
    if(inputField === "") {
        alert("Input task first!");
        return
    }
    
    createTask({
        title: inputField, 
        completed: false,
        deleted: false
    })
    window.location.reload();
})