export function getTasks(tasks, filters = {}) {
<<<<<<< HEAD
    let filteredTasks = [...tasks];

    // TODO: Apply filters here based on the filters object
    // Developers will add priority, search, status, and assignee filters here.

    return filteredTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
=======
    const validPriorities = ["Low", "Medium", "High"];

    const filteredTasks = tasks.map((task) => ({
        ...task,
        priority: validPriorities.includes(task.priority)
            ? task.priority
            : "Medium"
    }));

    return filteredTasks.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
>>>>>>> 531d398efb1a17f74035e8ff2153ae5c8183a57f
}

export function createTask(taskData, existingTasks) {
    // Basic validation
    if (!taskData.title) {
        throw new Error("Task title is required");
    }

    // TODO: Add more validation logic here (e.g. project validation, duplicate validation)

<<<<<<< HEAD
    const newTask = {
        id: `T-${Date.now()}`,
        ...taskData,
        status: taskData.status || "Active",
        createdAt: new Date().toISOString()
    };
    
=======
const validPriorities = ["Low", "Medium", "High"];

const newTask = {
    id: `T-${Date.now()}`,
    ...taskData,
    priority: validPriorities.includes(taskData.priority)
        ? taskData.priority
        : "Medium",
    status: taskData.status || "Active",
    createdAt: new Date().toISOString()
};
>>>>>>> 531d398efb1a17f74035e8ff2153ae5c8183a57f
    // TODO: Add side effects here (e.g. trigger notifications)

    return [...existingTasks, newTask];
}
