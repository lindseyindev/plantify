//import { supabase } from "./client";
import { testUser, testPlantData, testPostsData } from "./helpers.js";

export async function fetchPosts(plantId) {
  //const { data } = await supabase.from('posts').select()
  const data = testPostsData;
  console.log("post data: ", data, { plantId });
  return data;
  // setPosts(data)
}

export async function fetchUser() {
  const data = testUser;
  return data;
}

export async function fetchPlant() {
  const data = testPlantData;
  return data;
}

export async function createPost(post) {
  //return await supabase.from('posts').insert([post]).single()
  // setPost({})
  // fetchPosts()
}
