'use client'
import { useState, useEffect } from 'react'
import PostForm from "./Form"
import Posts from "./Posts"
import {
	fetchPosts,
    createPost
} from '../api';

export default function Page(props) {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})

    useEffect(() => {
        setPosts(fetchPosts)
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost({...post, [name]: value});
    }

    const handleSubmitPost = (e) => {
        e.preventDefault()
        createPost(post)
        setPost({})
        setPosts(fetchPosts());
    }

    return (
        <div>
        <PostForm 
            handleInputChange={handleInputChange}
            post={post}
            handleSubmitPost={handleSubmitPost}
        />
        <Posts
            posts={posts}
        />
        </div>
    )
}

//use fetch server props and api calls 