import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, DocumentTextIcon, UsersIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const menuItem = [
        { name: "کاربران", icon: UsersIcon, path: "/users" },
        { name: "پست‌ها", icon: DocumentTextIcon, path: "/posts" },
        { name: "تسک‌ها", icon: ClipboardDocumentListIcon, path: "/tasks" },
        { name: "کامنت‌ها", icon: ChatBubbleLeftRightIcon, path: "/comments" },
    ];

    return (
        <div
            className={`fixed top-16 right-0 h-[calc(100%-4rem)] bg-white shadow-md transition-all duration-300 z-40 ${
                isOpen ? "w-64" : "w-20"
            }`}
        >
            {/* تغییر ۱: یه wrapper جدید دور دکمه اضافه شد با px-3 (هم‌تراز با آیتم‌های منو) و py-4 */}
            <div className="flex items-center px-3 py-4">
                {/* تغییر ۲: به خود دکمه padding (p-2) و افکت هاور اضافه شد */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <Bars3Icon className="w-6 h-6 text-gray-600" />
                </button>
            </div>

            {menuItem.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                        // تغییر ۳: py-6 به py-3 کم شد (فاصله‌ی عمودی آیتم‌ها کمتر و متناسب‌تر شد)
                        `flex items-center gap-3 px-3 py-3 ${
                            isActive ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`
                    }
                >
                    <item.icon className="w-6 h-6" />
                    {isOpen && <span>{item.name}</span>}
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;