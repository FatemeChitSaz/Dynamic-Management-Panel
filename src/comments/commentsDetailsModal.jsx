import { XMarkIcon } from "@heroicons/react/24/outline";

const CommentDetailsModal = ({ comment, post, onClose }) => {
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
                    <h2 className="text-lg font-bold text-gray-900">جزئیات کامنت</h2>
                    <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100">
                        <XMarkIcon className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                    <span className="font-medium text-gray-900 text-sm">{comment.name}</span>
                    <span className="text-gray-400 text-xs">{comment.email}</span>
                </div>

                {post && (
                    <div className="mb-4">
                        <span className="text-xs text-gray-400">پست مرتبط</span>
                        <p className="text-sm text-gray-700 font-medium">{post.title}</p>
                    </div>
                )}

                <div>
                    <span className="text-xs text-gray-400">متن کامنت</span>
                    <p className="text-sm text-gray-700 leading-relaxed mt-1">{comment.body}</p>
                </div>
            </div>
        </div>
    );
};

export default CommentDetailsModal;