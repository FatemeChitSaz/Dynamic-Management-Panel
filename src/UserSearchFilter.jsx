import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";

const UserSearchFilter = ({ onSearchChange }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 relative">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 right-4" />
                <input
                    type="text"
                    placeholder="جست‌وجو"
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
                />
            </div>
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <FunnelIcon className="w-5 h-5" />
                فیلتر
            </button>
        </div>
    );
};

export default UserSearchFilter;