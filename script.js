let addTask = document.querySelector("input");
let displayTask = document.querySelector(".displayTask");
// console.log(displayTask) 
let btn = document.querySelector("button");

let count = 0;



function taskAdd () {
    let task = addTask.value.trim();
    if(task === ""){
        return;        // remove empty input submissions 
    }
    count++;

    let taskContainer = document.createElement("div");
    taskContainer.style.display = "flex";
    taskContainer.style.alignItems = "center";
    taskContainer.style.marginBottom = "5px"; // Spacing between tasks

    let taskText = document.createElement("span");
    taskText.innerText = `${count}. ${task}`;
    taskText.style.marginRight = "10px"; // Space between text and button


            
            

            let removeBtn = document.createElement("button");  // make a remove btn
            // displayTask.append(removeBtn);
            removeBtn.innerText = "x";
            removeBtn.style.backgroundColor = "red";
            removeBtn.style.borderRadius ="50%";
            removeBtn.style.marginRight = "1.5em";




            // Append elements to task container
    taskContainer.appendChild(removeBtn);
    taskContainer.appendChild(taskText);
    
    // Append task container to displayTask
    displayTask.appendChild(taskContainer);



    //  displayTask.innerHTML += count + ". " + task +"<br></br>" ;   // add more task with previous task also
    addTask.value = "";  //  Clears input after adding task
removeBtn.addEventListener("click", () => {
    taskContainer.remove();
});
   
}

btn.addEventListener("click", taskAdd);     

