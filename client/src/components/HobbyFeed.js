import Post from "./Post"
import greendale from "../icons/greendale-flag.jpg"
import troy from "../icons/troy.jpg"
import annie from "../icons/annie.jpg"
import britta from "../icons/britta.jpg"
import man from "../icons/man.jpg"
import woman from "../icons/woman.jpg"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
function HobbyFeed() {
    // IDEA FOR ICONS: CHANGE DATABASE TO STORE THE NAME OF THE ICON THAT EACH USER IS ASSIGNED UPON
    // SIGNING UP, AND WHEN THE USER IS REETRIEVED, WE JUST PARSE WHAT NAME IT IS, AND THEN WE RETURN THAT
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const hobbyId = queryParams.get('hobbyId');
    const userId = queryParams.get('userId');
    const nav = useNavigate();
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState([]);
    const [uh, setUHs] = useState([]);
    const [currHobby, setCurrHobby] = useState('');

    useEffect(() => {
        const fetchHobbyFeed = async () => {
        const uName = [];
        const h = [];
        try {
            const response = await axios.get(`http://localhost:3030/hobbies/${hobbyId}`); 
            const users = await axios.get(`http://localhost:3030/users`);
            const currHob = await axios.get(`http://localhost:3030/hobbies/${hobbyId}/info`);
            if(Array.isArray(response.data)){
            setPosts(response.data);
            setCurrHobby(currHob.data);
            for(const post of posts){
                for(const user of users.data){
                    if (user._id === post.author){
                        uName.push(user.username);
                    }
                }
            }
            const userHobbies = await axios.get(`http://localhost:3030/users/${userId}`);
            setUHs(userHobbies.data);
            setUsername(uName);
            }  
            else{
            console.log(response.data)
            }
        } catch (error) {
            console.error("Error fetching user hobbies:", error);
        }
    };
    fetchHobbyFeed();
  }, [hobbyId, location.search, posts, userId]);

    const joinHobby = async () => {
    try {
        if(isAlreadyJoined() === "Join Hobby"){
            //send hobbyId and userId to backend, a route that adds the user to the hobby
            const isSuccess = await axios.post(`http://localhost:3030/hobbies/${userId}/${hobbyId}`);
            console.log(isSuccess);
            /*
            if(isSuccess[0]){
                console.log(isSuccess[1]);
                nav(`/hobby?userId=${userId}&hobbyId=${hobbyId}`);
            }
            */
        }
        else{
            // Maybe have a modal pop up that says they've already joined?
        }
        

    } catch (error) {
        console.error("Error sending message to backend", error);
    }
  }
  
    const isAlreadyJoined  = () => {
        if (uh.includes(currHobby)) {
            return "Already Joined";
        } else {
            return "Join Hobby";
        }
        
  }

    return (
        <div class="w-full lg:ps-64">
             <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="max-w-[85rem] p-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-6">
                        <div class="flex flex-wrap">
                            <img class=" mx-4 inline-block size-[62px] rounded-full" src={greendale} alt="Image Description"></img>
                            <h2 class="mt-2 text-4xl font-extrabold dark:text-white">{currHobby}</h2>
                            <div class="ml-5 mt-3.5">
                                <button onClick={joinHobby}  class="h-[35px] y-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 cursor-pointer" data-hs-overlay="#hs-notifications">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    { isAlreadyJoined() }
                                </button>
                            </div>
                        </div>
                    

                    {posts.map((post, index) => (
                        <Post
                            key={post._id} 
                            pfp={troy}
                            hobby_pic={greendale}
                            username={'@' + username[index]}
                            hobby={currHobby}
                            text={post.content}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HobbyFeed;