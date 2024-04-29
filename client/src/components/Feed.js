import Post from "./Post"
import art from "../hobbyIcons/art.jpg"
import gardening from "../hobbyIcons/gardening.jpg"
import movies from "../hobbyIcons/movies.jpg"
import music from "../hobbyIcons/music.jpg"
import rockclimbing from "../hobbyIcons/rockclimbing.jpg"
import sports from "../hobbyIcons/sports.jpg"
import stem from "../hobbyIcons/stem.jpg"
import troy from "../icons/troy.jpg"
import annie from "../icons/annie.jpg"
import britta from "../icons/britta.jpg"
import man from "../icons/man.jpg"
import woman from "../icons/woman.jpg"
import boat from "../icons/boat.jpg"
import camera from "../icons/camera.jpg"
import coolgirl from "../icons/coolgirl.jpg"
import coolguy from "../icons/coolguy.jpg"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
function Feed() {
    // IDEA FOR ICONS: CHANGE DATABASE TO STORE THE NAME OF THE ICON THAT EACH USER IS ASSIGNED UPON
    // SIGNING UP, AND WHEN THE USER IS REETRIEVED, WE JUST PARSE WHAT NAME IT IS, AND THEN WE RETURN THAT
    const location = useLocation()
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [pfps, setPFPS] = useState([]);
    const getHobbyIcon = (name) => {
        if (name === "Art"){
            return art;
        }
        else if (name === "Gardening"){
            return gardening;
        }
        else if (name === "Movies"){
            return movies
        }
        else if (name === "Music"){
            return music
        }
        else if (name === "Sports"){
            return sports
        }
        else if (name === "Rock Climbing"){
            return rockclimbing
        }
        else if (name === "Stem"){
            return stem
        }
    }

    useEffect(() => {
        const fetchHobbyFeed = async () => {
        const uName = [];
        const h = [];
        const p = [];
        const hI = [];
        try {
            const queryParams = new URLSearchParams(location.search);
            const userId = queryParams.get('userId');
            const response = await axios.get(`http://localhost:3030/users/${userId}/hobbyfeed`); 
            const users = await axios.get(`http://localhost:3030/users`);

            if(Array.isArray(response.data)){
                response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                setPosts(response.data);
                for(const post of posts){
                    for(const user of users.data){
                        if (user._id === post.author){
                            p.push(user.pfp);
                            const hobbies = await axios.get(`http://localhost:3030/hobbies`)
                            for(const hobby of hobbies.data){
                                if(hobby._id === post.hobby){
                                    uName.push(user.username);
                                    h.push(hobby.name);;
                                }
                            }
                        }
                    }
                }
                setPFPS(p);
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
  }, [location.search, posts]);

  const getPfp = (pic) => {
    if (pic === "troy"){
        return troy;
    }
    else if (pic === "annie"){
        return annie;
    }
    else if (pic === "boat"){
        return boat
    }
    else if (pic === "britta"){
        return britta
    }
    else if (pic === "camera"){
        return camera
    }
    else if (pic === "coolgirl"){
        return coolgirl
    }
    else if (pic === "coolguy"){
        return coolguy
    }
    else if (pic === "man"){
        return man
    }
    else if (pic === "woman"){
        return woman
    }
}

    return (
        <div class="w-full lg:ps-64">
             <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="max-w-[85rem] p-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-6">
                    {posts.map((post, index) => (
                        <Post
                            key={post._id} 
                            pfp={getPfp(pfps[index])}
                            hobby_pic={getHobbyIcon(hobbies[index])}
                            username={'@' + username[index]}
                            hobby={hobbies[index]}
                            text={post.content}
                            time={post.timestamp}
                            comments={post.comments}
                            id={post._id}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;