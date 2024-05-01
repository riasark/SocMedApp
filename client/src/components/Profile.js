import troy from "../icons/troy.jpg";
import Post from "./Post";
import greendale from "../icons/greendale-flag.jpg"
import art from "../hobbyIcons/art.jpg"
import gardening from "../hobbyIcons/gardening.jpg"
import movies from "../hobbyIcons/movies.jpg"
import music from "../hobbyIcons/music.jpg"
import rockclimbing from "../hobbyIcons/rockclimbing.jpg"
import sports from "../hobbyIcons/sports.jpg"
import stem from "../hobbyIcons/stem.jpg"
import annie from "../icons/annie.jpg"
import britta from "../icons/britta.jpg"
import man from "../icons/man.jpg"
import woman from "../icons/woman.jpg"
import boat from "../icons/boat.jpg"
import camera from "../icons/camera.jpg"
import coolgirl from "../icons/coolgirl.jpg"
import coolguy from "../icons/coolguy.jpg"
import astronomy from "../hobbyIcons/astronomy.jpg"
import birdwatching from "../hobbyIcons/birdwatching.jpg"
import cooking from "../hobbyIcons/cooking.jpg"
import fishing from "../hobbyIcons/fishing.jpg"
import mindfulness from "../hobbyIcons/mindfulness.jpg"
import photography from "../hobbyIcons/photography.jpg"
import traveling from "../hobbyIcons/traveling.jpg"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Profile(props) {
    // const hobbies = ["Art", "Gardening", "Stem"];

    const location = useLocation()
    // const [posts, setPosts] = useState([]);
    const [userPfp, setUserPfp] = useState('');
    const [username, setUsername] = useState([]);
    const [hobbies, setHobbies] = useState([]);

    let [userInfo, setUserInfo] = useState([]);
    let [userHobbies, setUserHobbies] = useState([]);
    let [userPosts, setUserPosts] = useState([]);
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
        else if (name === "Astronomy"){
            return astronomy
        }
        else if (name === "Birdwatching"){
            return birdwatching
        }
        else if (name === "Cooking"){
            return cooking
        }
        else if (name === "Fishing"){
            return fishing
        }
        else if (name === "Mindfulness"){
            return mindfulness
        }
        else if (name === "Photography"){
            return photography
        }
        else if (name === "Traveling"){
            return traveling
        }
    }

    const [filterHobby, setFilterHobby] = useState('');

    const filterBy = (hobby) => {
        filterHobby === hobby ? setFilterHobby('') : setFilterHobby(hobby);
    }


    useEffect(() => {
        const fetchHobbyFeed = async () => {
            try {
                const queryParams = new URLSearchParams(location.search);
                const userId = queryParams.get('userId');
    
                const [userInfoResponse, userHobbiesResponse, userPostsResponse, usersResponse, hobbiesResponse] = await Promise.all([
                    axios.get(`http://localhost:3030/users/${userId}/specific`),
                    axios.get(`http://localhost:3030/users/${userId}`),
                    axios.get(`http://localhost:3030/users/${userId}/feed`),
                    axios.get(`http://localhost:3030/users`),
                    axios.get(`http://localhost:3030/hobbies`)
                ]);
    
                setUserInfo(userInfoResponse.data);
                setUserHobbies(userHobbiesResponse.data);
    
                const filteredPosts = userPostsResponse.data.filter(post => {
                    const hobbyName = hobbiesResponse.data.find(hobby => hobby._id === post.hobby)?.name;
                    return hobbyName === filterHobby || filterHobby === "";
                });
    
                setUserPosts(filteredPosts);
                setUserPfp(userInfo.pfp);
                const uNames = [];
                const hNames = [];
    
                for (const post of filteredPosts) {
                    const user = usersResponse.data.find(user => user._id === post.author);
                    const hobby = hobbiesResponse.data.find(hobby => hobby._id === post.hobby);
                    if (user && hobby) {
                        uNames.push(user.username);
                        hNames.push(hobby.name);
                    }
                }
    
                setUsername(uNames);
                setHobbies(hNames);
            } catch (error) {
                console.error("Error fetching user hobbies:", error);
            }
        };
        fetchHobbyFeed();
    }, [location.search, filterHobby, userInfo.pfp]);
    
    const pfp = () => {
        if (userPfp === "troy"){
            return troy;
        }
        else if (userPfp === "annie"){
            return annie;
        }
        else if (userPfp === "boat"){
            return boat
        }
        else if (userPfp === "britta"){
            return britta
        }
        else if (userPfp === "camera"){
            return camera
        }
        else if (userPfp === "coolgirl"){
            return coolgirl
        }
        else if (userPfp === "coolguy"){
            return coolguy
        }
        else if (userPfp === "man"){
            return man
        }
        else if (userPfp === "woman"){
            return woman
        }
    }
    return (
        <div className="w-full lg:ps-64">
             <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 content-center">
                <div className="text-center">
                    <img className="inline-block size-[150px] rounded-full" src={pfp()} alt="User Profile" />
                    <h1 className="text-4xl font-extrabold dark:text-white">@{userInfo.username}</h1>
                    <h4 className="text-2xl font-bold dark:text-white">{userInfo.fname} {userInfo.lname}</h4>
                    <div className="flex flex-wrap mx-[250px] mt-5">
                        {userHobbies.map((hobby, index) => (
                            <div key={index} className={`p-2`} style={{ width: `${100 / userHobbies.length}%` }}>
                                <button onClick={() => filterBy(hobby)} className={"w-full rounded-full hover:bg-sky-200 " + (filterHobby === hobby ? 'bg-sky-200' : 'bg-sky-100')}>
                                    • {hobby}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {userPosts.map((post, index) => (
                    <Post
                        key={post._id} 
                        pfp={pfp()}
                        hobby_pic={getHobbyIcon(hobbies[index])}
                        username={'@' + userInfo.username}
                        hobby={hobbies[index]}
                        text={post.content}
                        time={post.timestamp}
                        comments={post.comments}
                        id={post._id}
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