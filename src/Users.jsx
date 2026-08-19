import { useState } from "react";
import { useGetData } from "./getData";
import UserSearchFilter from "./UserSearchFilter";
import UserTable from "./UserTable";

const Users = () => {
    const { data, loading, error } = useGetData("https://jsonplaceholder.typicode.com/users");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = data
        ? data.filter((user) => {
              const term = searchTerm.toLowerCase();
              return Object.values(user).some((value) =>
                  String(value).toLowerCase().includes(term)
              );
          })
        : [];

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
                <UserTable users={filteredUsers} />
            )}
        </div>
    );
};

export default Users;