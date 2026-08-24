const TaskList = ({ tasks, users, onPriorityToggle, onUserClick }) => {
    return (
        <div className="flex flex-col gap-4">
            {tasks.length === 0 ? (
                <p className="text-center text-gray-400 py-8">تسکی یافت نشد.</p>
            ) : (
                tasks.map((task) => {
                    const taskUser = users?.find((user) => user.id === task.userId);

                    return (
                        <div
                            key={task.id}
                            className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between"
                        >
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-gray-900">{task.title}</h3>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`text-xs px-3 py-1 rounded-full ${task.completed
                                                ? "bg-green-50 text-green-600"
                                                : "bg-gray-100 text-gray-500"
                                            }`}
                                    >
                                        {task.completed ? "انجام شده" : "انجام‌نشده"}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => onPriorityToggle(task.id)}
                                    className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${task.priority === "high"
                                            ? "bg-red-50 text-red-600"
                                            : "bg-blue-50 text-blue-600"
                                        }`}
                                >
                                    {task.priority === "high" ? "زیاد" : "کم"}
                                </button>

                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold cursor-pointer hover:ring-2 hover:ring-blue-300 hover:scale-105 transiition-all"
                                    title="مشاهده اطلاعات کاربر"
                                    onClick={() => onUserClick(taskUser.id)}>
                                    {taskUser ? taskUser.name.charAt(0) : "?"}
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default TaskList;