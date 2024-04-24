import Post from "./Post"
import greendale from "../icons/greendale-flag.jpg"
import troy from "../icons/troy.jpg"
import annie from "../icons/annie.jpg"
import britta from "../icons/britta.jpg"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
function Feed() {

  const location = useLocation()
  const [posts, setPosts] = useState([]);
  const userToIdMap = [];

  useEffect(() => {
    const fetchHobbyFeed = async () => {
      try {
        const queryParams = new URLSearchParams(location.search)
        const userId = queryParams.get('userId');
        const response = await axios.get(`http://localhost:3030/users/${userId}/hobbyfeed`); 
        if(Array.isArray(response.data)){
          setPosts(response.data);
          for(const post of posts){
            
          }
        }  
        else{
          console.log(response.data)
        }
      } catch (error) {
        console.error("Error fetching user hobbies:", error);
      }
    };

    fetchHobbyFeed();
  }, [location.search]);

    return (
        <div class="w-full lg:ps-64">
             <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="max-w-[85rem] p-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-6">
                    {posts.map((post) => (
                        <Post
                            key={post._id} 
                            pfp={troy}
                            hobby_pic={greendale}
                            username={post.author}
                            hobby={post.hobby}
                            text={post.content}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;