 
        //we determine parameter when we call function
        //Generates html
        const generateHtml = (tasks, rootElementId) => {
            let html = "";

    // i: The current index in the loop (a number).
    // tasks[i]: The actual value (or object) in the array at that index. 

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
                
            document.getElementById(rootElementId).innerHTML = html;
            }

            // second parameter: element where we want to load html.
            generateHtml(tasks, "tasks");

                                 //taskId represents index in taskArray
        const checkTaskStatus = (taskId) => {
            const task = tasks[taskId] // იმ ობიექტს გვაძლევს, რომელიც შენახულია ამ კონკრეტულ ინდექსზე
            task.active = !task.active; // თუ task.active == true; გახდება not true დაკლიკებისას, თუ faslea გახდება not false
            console.log(task);
            generateHtml(tasks, "tasks");
        }

        // delete a task 
        const deleteTask = (taskId) => {
            tasks.splice(taskId, 1) // remove the task from the array
            generateHtml(tasks, "tasks");
        }

        const editTask = (taskId) => {
            const checkbox = document.querySelector(`#task-${taskId}`);
            const taskElement = checkbox.parentElement;
            const currentText = tasks[taskId].name;
        
            // Change checkbox to a text input for editing
            checkbox.type = "text";
            checkbox.value = currentText;
            checkbox.classList.add("editInput");
            checkbox.focus();
        
            // Save changes on blur or Enter key
            const saveEdit = () => {
                const editedText = checkbox.value.trim();
                if (editedText) {
                    tasks[taskId].name = editedText;
                }
        
                // Restore the checkbox state
                checkbox.type = "checkbox";
                checkbox.checked = !tasks[taskId].active; // Maintain checked state
                checkbox.classList.remove("editInput");
        
                // Update the label
                const label = taskElement.querySelector("label");
                label.textContent = tasks[taskId].name;
            };
        
            // Save changes on blur
            checkbox.addEventListener("blur", saveEdit);
        
            // Save changes on Enter key
            checkbox.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    saveEdit();
                    checkbox.blur(); // Also blur to trigger cleanup
                }
            });
        };
        