"use client";
import { useState, useEffect } from "react";
import PostForm from "./Form";
import ListPlants from "./ListPlants";
import { fetchPosts } from "../../api";

export default function Plants(props) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  //display date .toLocaleString('en-US')
  useEffect(() => {
    fetchPosts(4).then((data) => {
      setPosts(data)
    })
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    //createPost(post);
    setPosts([...posts, post]);
    setPost({});
    //setPosts(fetchPosts());
  };

  return (
    <div className="list-plants">
        YES LIST PLANTS
      <ListPlants posts={posts} />
    </div>
  );
}
