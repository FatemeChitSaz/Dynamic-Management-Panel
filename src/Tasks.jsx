import { useEffect, useState } from "react";
import { useGetData } from "./getData";
import TaskList from "./TasksList";

const Tasks = () => {
    const { data: todosData, loading: todosLoading, error: todosError } = useGetData("https://jsonplaceholder.typicode.com/todos");
    const { data: usersData, loading: usersLoading, error: usersError } = useGetData("https://jsonplaceholder.typicode.com/users");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (todosData) {
            const tasksWithPriority = todosData.map((task) => ({
                ...task,
                priority: "low",
            }));
            setTasks(tasksWithPriority);
        }
    }, [todosData]);

    const handlePriorityToggle = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, priority: task.priority === "low" ? "high" : "low" }
                    : task
            )
        );
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {(todosLoading || usersLoading) && (
                <p className="text-center text-gray-400 py-8">در حال بارگذاری...</p>
            )}

            {(todosError || usersError) && (
                <p className="text-center text-red-500 py-8">خطا در دریافت اطلاعات</p>
            )}

            {!todosLoading && !usersLoading && !todosError && !usersError && (
                <TaskList tasks={tasks} users={usersData} onPriorityToggle={handlePriorityToggle} />
            )}
        </div>
    );
};

export default Tasks;