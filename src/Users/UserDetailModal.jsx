import { XMarkIcon } from "@heroicons/react/24/outline";

const UserDetailModal = ({ user, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900">اطلاعات کاربر</h2>
                    <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100">
                        <XMarkIcon className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                        {user.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-900">{user.name}</span>
                        <span className="text-gray-400 text-sm">@{user.username}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400">ایمیل</span>
                        <span className="text-sm text-gray-700">{user.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailModal;