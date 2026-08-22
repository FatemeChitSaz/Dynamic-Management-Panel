import { XMarkIcon } from "@heroicons/react/24/outline";

const PostDetailModall = ({ post, author, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-900">{post.title}</h2>
                    <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100">
                        <XMarkIcon className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                        {author ? author.name.charAt(0) : "?"}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-900 text-sm">
                            {author ? author.name : "در حال بارگذاری..."}
                        </span>
                        <span className="text-gray-400 text-xs">
                            {author ? `@${author.username}` : ""}
                        </span>
                    </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">{post.body}</p>
            </div>
        </div>
    );
};

export default PostDetailModall;