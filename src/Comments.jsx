import { useEffect, useState } from "react";
import { useGetData } from "./getData";
import CommentList from "./CommentList";
import CommentDetailsModal from "./commentsDetailsModal";


const Comments = () => {
    const { data: commentsData, loading: commentsLoading, error: commentsError } = useGetData("https://jsonplaceholder.typicode.com/comments");
    const { data: postsData, loading: postsLoading, error: postsError } = useGetData("https://jsonplaceholder.typicode.com/posts");
    const [comments, setComments] = useState([]);
    const [selectedComments, setSelectedComments] = useState(null);

    useEffect(() => {
        if (commentsData) {
            setComments(commentsData);
        }
    }, [commentsData]);

    const handleCommentClick = (commentId) => {
        const clikedComment = comments.find((comment) => comment.id === commentId);
        setSelectedComments(clikedComment);
    }

    const handleDelete = (commentId) => {
        setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    }



    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {(commentsLoading || postsLoading) && (
                <p className="text-center text-gray-400 py-8">در حال بارگذاری...</p>
            )}

            {(commentsError || postsError) && (
                <p className="text-center text-red-500 py-8">خطا در دریافت اطلاعات</p>
            )}

            {!commentsLoading && !postsLoading && !commentsError && !postsError && (
                <CommentList
                    comments={comments}
                    posts={postsData}
                    onCommentClick={handleCommentClick}
                    onDelete={handleDelete}
                />
            )}

            {selectedComments && (
                <CommentDetailsModal
                    comment={selectedComments}
                    post={postsData?.find((post) => post.id === selectedComments.postId)}
                    onClose={() => setSelectedComments(null)}
                />
            )}
        </div>
    );
}

export default Comments;