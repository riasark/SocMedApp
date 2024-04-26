import troy from "../icons/troy.jpg";
import Post from "./Post";
import greendale from "../icons/greendale-flag.jpg"
import annie from "../icons/annie.jpg"
import britta from "../icons/britta.jpg"
import man from "../icons/man.jpg"
import woman from "../icons/woman.jpg"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Profile(props) {
    // const hobbies = ["Art", "Gardening", "Stem"];

    const location = useLocation()
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState([]);
    const [hobbies, setHobbies] = useState([]);

    

    let [userInfo, setUserInfo] = useState([]);
    let [userHobbies, setUserHobbies] = useState([]);
    let [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchHobbyFeed = async () => {
        const uName = [];
        const h = [];
        try {
            const queryParams = new URLSearchParams(location.search);
            const userId = queryParams.get('userId');
            const response = await axios.get(`http://localhost:3030/users/${userId}/specific`); 
            setUserInfo(response.data);

            const response2 = await axios.get(`http://localhost:3030/users/${userId}`);
            setUserHobbies(response2.data);

            const response3 = await axios.get(`http://localhost:3030/users/${userId}/feed`);
            setUserPosts(response3.data);

            const users = await axios.get(`http://localhost:3030/users`);

            if(Array.isArray(response3.data)){
            setPosts(response3.data);
            for(const post of posts){
                for(const user of users.data){
                    if (user._id === post.author){
                        const hobbies = await axios.get(`http://localhost:3030/hobbies`)
                        for(const hobby of hobbies.data){
                            if(hobby._id === post.hobby){
                                uName.push(user.username);
                                h.push(hobby.name);
                            }
                        }
                    }
                }
            }

            setUsername(uName);
            setHobbies(h);
            }  
            else{
            console.log(response.data)
            }
        } catch (error) {
            console.error("Error fetching user hobbies:", error);
        }
    };
    fetchHobbyFeed();
  }, 
  [location.search, posts]);

    return (
        <div class="w-full lg:ps-64">
             <div class="p-4 sm:p-6 space-y-4 sm:space-y-6 content-center">
                <div class="text-center">
                    <img class="inline-block size-[150px] rounded-full" src={troy} alt="" />
                    <h1 class="text-4xl font-extrabold dark:text-white">@{userInfo.username}</h1>
                    <h4 class="text-2xl font-bold dark:text-white">{userInfo.fname} {userInfo.lname}</h4>
                    <div className="flex flex-wrap mx-[250px] mt-5">
                        {userHobbies.map((hobby) => (
                            <div className={`p-2`} style={{ width: `${100 / userHobbies.length}%` }}>
                                <button className={`w-full rounded-full bg-red-100 hover:bg-red-200`}>
                                    • {hobby}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {posts.map((post, index) => (
                    <Post
                        key={post._id} 
                        pfp={troy}
                        hobby_pic={greendale}
                        username={'@' + userInfo.username}
                        hobby={hobbies[index]}
                        text={post.content}
                    />
                ))}
                {/* <div class="max-w-[85rem] p-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-6">
                        <h1>hi</h1>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Profile;