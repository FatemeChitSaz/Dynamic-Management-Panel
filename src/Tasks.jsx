import { useEffect, useState } from "react";
import { useGetData } from "./getData";
import { getTodos, getUsers } from "./API.js";
import TaskList from "./TasksList";
import UserDetailModal from "./UserDetailModal";

const Tasks = () => {
    const { data: todosData, loading: todosLoading, error: todosError } = useGetData(getTodos);
    const { data: usersData, loading: usersLoading, error: usersError } = useGetData(getUsers);
    const [tasks, setTasks] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

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

    const handleUserClick = (userId) => {
        const clickedUser = usersData?.find((user) => user.id === userId);
        setSelectedUser(clickedUser);
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {(todosLoading || usersLoading) && (
                <p className="text-center text-gray-400 py-8">در حال بارگذاری...</p>
            )}

            {(todosError || usersError) && (
                <p className="text-center text-red-500 py-8">خطا در دریافت اطلاعات</p>
            )}

            {selectedUser && (
                <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)}/>
            )}

            {!todosLoading && !usersLoading && !todosError && !usersError && (
                <TaskList tasks={tasks} users={usersData} onPriorityToggle={handlePriorityToggle} onUserClick={handleUserClick}/>
            )}
        </div>
    );
};

export default Tasks;