const STORAGE_KEY = "tasks";

export function getTasks() {
    const tasksJSON = localStorage.getItem(STORAGE_KEY);
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

export function createTask(taskData) {

    if (!taskData || typeof taskData !== "object") {
        console.error("Invalid task data");
        return;
    }

    const tasks = getTasks();

    const newTask = {
        id: Date.now(), 
        ...taskData
    };

    tasks.push(newTask);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return newTask;
}

export function updateTask(id, taskData) {
    console.log("RUN")
    if (!id) {
        console.error("Task ID is required");
        return;
    }
    if (!taskData || typeof taskData !== "object") {
        console.error("Invalid task data");
        return;
    }

    const tasks = getTasks();

    // Find task by id
    const taskIndex = tasks.findIndex(task => task.id == id);

    if (taskIndex === -1) {
        console.error("Task not found");
        return;
    }

    // Update only the provided properties
    tasks[taskIndex] = { ...tasks[taskIndex], ...taskData };

    // Save back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

    return tasks[taskIndex];
}