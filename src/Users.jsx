import { useEffect, useState } from "react";
import { useGetData } from "./getData";
import UserSearchFilter from "./UserSearchFilter";
import UserTable from "./UserTable";
import EditUserModal from "./EditUserModal";

const Users = () => {
    const { data, loading, error } = useGetData("https://jsonplaceholder.typicode.com/users");
    const [searchTerm, setSearchTerm] = useState("")
    const [users, setUsers] = useState([]);;
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        if (data) {
            setUsers(data);
        }
    }, [data])

    const filteredUsers = users.filter((user) => {
        const term = searchTerm.toLowerCase();
        return Object.values(user).some((value) =>
            String(value).toLowerCase().includes(term)
        );
    });


    const handleDelete = (userId) => {
        setUsers((prevData) => prevData.filter((user) => user.id !== userId));
    }

    const handleEdit = (userId) => {
        const userToEdit = users.find((user) => user.id === userId);
        setEditingUser(userToEdit);
    }

    const handleSaveEdit = (updatedUser) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );
        setEditingUser(null);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <UserSearchFilter onSearchChange={setSearchTerm} />

            {loading && (
                <p className="text-center text-gray-400 py-8">در حال بارگذاری...</p>
            )}

            {error && (
                <p className="text-center text-red-500 py-8">خطا در دریافت اطلاعات</p>
            )}

            {!loading && !error && (
                <UserTable users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
            )}

            {editingUser && (
                <EditUserModal
                    user={editingUser}
                    onSave={handleSaveEdit}
                    onClose={() => setEditingUser(null)}
                />
            )}
        </div>
    );
};

export default Users;