import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const UserActions = ({ userId, onEdit, onDelete }) => {
    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => onEdit(userId)}
                className="p-2 rounded-lg hover:bg-blue-50 text-blue-600"
            >
                <PencilIcon className="w-4 h-4" />
            </button>
            <button
                onClick={() => onDelete(userId)}
                className="p-2 rounded-lg hover:bg-red-50 text-red-600"
            >
                <TrashIcon className="w-4 h-4" />
            </button>
        </div>
    );
};

export default UserActions;