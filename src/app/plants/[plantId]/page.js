"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PostForm from "./Form";
import Posts from "./Posts";
import { fetchPosts, createPost } from "../../api";

export default function Page(props) {
  const router = useRouter();
  const { plantId } = router.query;

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  //display date .toLocaleString('en-US')
  useEffect(() => {
    setPosts(fetchPosts(plantId));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    //createPost(post);
    setPosts([...posts, post])
    setPost({});
    //setPosts(fetchPosts());
  };

  return (
    <div>
      <PostForm
        handleInputChange={handleInputChange}
        post={post}
        handleSubmitPost={handleSubmitPost}
      />
      <Posts posts={posts} />
    </div>
  );
}