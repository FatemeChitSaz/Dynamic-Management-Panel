import { TrashIcon } from "@heroicons/react/24/outline";

const CommentList = ({ comments, posts, onCommentClick, onDelete }) => {
    return (
        <div className="flex flex-col gap-4">
            {comments.length === 0 ? (
                <p className="text-center text-gray-400 py-8">کامنتی یافت نشد.</p>
            ) : (
                comments.map((comment) => {
                    const relatedPost = posts?.find((post) => post.id === comment.postId);

                    return (
                        <div
                            key={comment.id}
                            onClick={() => onCommentClick(comment.id)}
                            title="مشاهده جزئیات کامنت"
                            className="group relative bg-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all"
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(comment.id);
                                }}
                                title="حذف کامنت"
                                className="absolute top-3 left-3 p-2 rounded-lg text-gray-300 hover:bg-red-50 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
                            >
                                <TrashIcon className="w-4 h-4" />
                            </button>

                            <div className="flex flex-col mb-2">
                                <span className="font-bold text-gray-900 text-sm">{comment.name}</span>
                                <span className="text-gray-400 text-xs">{comment.email}</span>
                            </div>

                            {relatedPost && (
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 inline-block mb-2">
                                    {relatedPost.title}
                                </span>
                            )}

                            <p className="text-sm text-gray-500 line-clamp-2">{comment.body}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default CommentList;