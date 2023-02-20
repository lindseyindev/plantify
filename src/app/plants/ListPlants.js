import PostImages from "./PostImages";

export default function ListPlants({ posts }) {

  console.log({posts})
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <PostImages images={post.images} />
          </div>
        );
      })}
    </div>
  );
}
