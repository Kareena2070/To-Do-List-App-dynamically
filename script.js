let addTask = document.querySelector("input");
let btn = document.querySelector("button");
let displayTask = document.querySelector(".displayTask");

let listTask = document.createElement("ol")
displayTask.append(listTask)


function addNewtask(){
    if(addTask.value.trim() !==""){
        let task = document.createElement("li")
        let taskText = document.createElement("span")
        taskText.textContent = addTask.value
        task.append(taskText);
        let doneBtn = document.createElement("button")
        doneBtn.textContent = "✅"
        doneBtn.classList.add("done")
        doneBtn.addEventListener("click", ()=>{
            taskText.classList.toggle("completed");
            if (taskText.classList.contains("completed")) {
                doneBtn.textContent = "↩️";
            } else {
                doneBtn.textContent = "✅";
            }
        
        })
        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "🗑️"
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.addEventListener("click", ()=>{
            task.remove()
        })
        task.append( doneBtn, deleteBtn)
        listTask.append(task)
        addTask.value = "" 
    }
}


btn.addEventListener("click", addNewtask);
addTask.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        addNewtask();
    }
})




