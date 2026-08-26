const PostList = ({posts, onPostClick}) => {

    return (
        <div className="flex flex-col gap-4">
            {posts.length === 0 ? (
                <p className="text-center text-gray-400 py-8">پستی یافت نشد.</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} onClick={() => onPostClick(post.id)} className="bg-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{post.body}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostList;