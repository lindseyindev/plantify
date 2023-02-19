
import { supabase } from "./client"

export async function fetchPosts() {
	const { data } = await supabase.from('posts').select()
	console.log("post data: ", data)
	return data
	// setPosts(data)
}

export async function createPost(post) {
	return await supabase.from('posts').insert([post]).single()
	// setPost({})
	// fetchPosts()
}