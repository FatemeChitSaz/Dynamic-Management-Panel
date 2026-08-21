import UserActions from "./UserAction";

const tableHeaders = ["#", "اطلاعات کاربر", "نام کاربری", "نویسنده", "وضعیت حساب", "وضعیت احراز هویت", "وضعیت ایمیل", "تاریخ ثبت‌نام", "عملیات"];


const UserTable = ({ users, onEdit, onDelete }) => {

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-right">
                <thead className="border-b border-gray-100">
                    <tr>
                        {tableHeaders.map((header) => (
                            <th key={header} className="text-sm font-medium text-gray-400 py-4 px-3">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan={tableHeaders.length} className="text-center text-gray-400 py-8">کاربری یافت نشد.</td>

                        </tr>
                    )
                        :
                        (
                            users.map((user) => (
                                <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50">
                                    <td className="py-4 px-3 text-sm text-gray-700">#{user.id}</td>

                                    <td className="py-4 px-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-gray-900 text-sm">{user.name}</span>
                                                <span className="text-gray-400 text-xs">{user.email}</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="py-4 px-3 text-sm text-gray-700">@{user.username}</td>

                                    <td className="py-4 px-3">
                                        <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600">
                                            {user.author || "YES"}
                                        </span>
                                    </td>

                                    <td className="py-4 px-3">
                                        <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600">
                                            Active
                                        </span>
                                    </td>

                                    <td className="py-4 px-3">
                                        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500">
                                            Unverified
                                        </span>
                                    </td>

                                    <td className="py-4 px-3">
                                        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500">
                                            Unverified
                                        </span>
                                    </td>

                                    <td className="py-4 px-3 text-sm text-gray-700">
                                        {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                                    </td>

                                    <td className="py-4 px-3 text-sm text-gray-400">
                                        <UserActions userId={user.id} onEdit={onEdit} onDelete={onDelete}/>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;