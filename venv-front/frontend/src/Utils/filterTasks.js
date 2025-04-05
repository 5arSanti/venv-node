const filterTasks = (tasks) => {
	if(!tasks) return { toDoTasks: [], processTasks: [], doneTasks: [] };

    const toDoTasks = tasks.filter(task => task.ID_Estado_Tarea === 1);
    const processTasks = tasks.filter(task => task.ID_Estado_Tarea === 2);
    const doneTasks = tasks.filter(task => task.ID_Estado_Tarea === 3);

    return { toDoTasks, processTasks, doneTasks };
};

export { filterTasks };