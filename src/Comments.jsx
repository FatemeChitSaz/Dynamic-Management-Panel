import { useState } from "react";
import { useGetData } from "./getData";
import { getPosts, getUsers } from "./API.js";
import PostList from "./PostList";
import PostDetailModall from "./PostDetailsModall";

const Posts = () => {
    const { data: postsData, loading: postsLoading, error: postsError } = useGetData(getPosts);
    const { data: usersData, loading: usersLoading, error: usersError } = useGetData(getUsers);
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (postId) => {
        const clickedPost = postsData.find((post) => post.id === postId);
        setSelectedPost(clickedPost);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {(postsLoading || usersLoading) && (
                <p className="text-center text-gray-400 py-8">در حال بارگذاری...</p>
            )}

            {(postsError || usersError) && (
                <p className="text-center text-red-500 py-8">خطا در دریافت اطلاعات</p>
            )}

            {!postsLoading && !usersLoading && !postsError && !usersError && (
                <PostList posts={postsData} onPostClick={handlePostClick} />
            )}

            {selectedPost && (
                <PostDetailModall
                    post={selectedPost}
                    author={usersData?.find((user) => user.id === selectedPost.userId)}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
};

export default Posts;