 
        //we determine parameter when we call function
        //Generates html
        const generateHtml = (tasks, rootElementId) => {
            let html = "";

            // loop generates html for each task
            for (let i = 0; i < tasks.length; i++) {
                let task = tasks[i]; // individual object
                html = html +
                    `<li class="task">
                <input id=task-${i} type="checkbox" name="completed" ${task.active ? "" : "checked"} onchange="checkTaskStatus(${i})"}>
                <label for="task-${i}">${task.name}</label>
                <button class="deleteBtn" onclick="deleteTask(${i})">Delete</button>
                <button class="editBtn" onclick="editTask(${i})">Edit</button>
            </li>`
            }

            // <ul id="task"></ul> parent element of task lists
           document.getElementById(rootElementId).innerHTML = html;
        }

        // second parameter: element where we want to load html.
        generateHtml(tasks, "tasks");

        const checkTaskStatus = (taskId) => {
            const task = tasks[taskId]; //i object
            task.active = !task.active;
            console.log(task);
            generateHtml(tasks, "tasks");
        }

        // delete a task 
        const deleteTask = (taskId) => {
            tasks.splice(taskId, 1) // remove the task from the array
            generateHtml(tasks, "tasks");
        }
   

    