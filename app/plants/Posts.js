

export default function Posts({posts}){

    return (
        <div>
        { posts.map((post, index) => {
            return (
                <div key={index}>
                    <h3>{post.title}</h3>
                    <p>Start Date: {post.startDate}</p>
                </div>
            )
        })}
        </div>
    )
}