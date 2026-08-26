import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const EditUserModal = ({ user, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        username: user.username,
        email: user.email,
        author: user.author,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...user, ...formData });
    };

    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900">ویرایش کاربر</h2>
                    <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100">
                        <XMarkIcon className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">نام</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">نام کاربری</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">ایمیل</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">نویسنده</label>
                        <select
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
                        >
                            <option value="Yes">بله</option>
                            <option value="No">خیر</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                        >
                            انصراف
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        >
                            ذخیره
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;