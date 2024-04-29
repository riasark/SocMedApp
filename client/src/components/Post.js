import Comment from "./Comment";
import WriteComment from "./WriteComment";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


function Post(props) {

    const [account, setAccountUser] = useState('');

    const location = useLocation();
    
    const param = new URLSearchParams(location.search);
    const userId = param.get('userId');
    useEffect(() => {
        const findCurrUser = async () => {
            const info = await axios.get(`http://localhost:3030/users/${userId}/specific`);
            setAccountUser("@" + info.data.username);
            console.log(account, props.username)
        }
        findCurrUser();
    })

    const isCurrentUser = account === props.username;

    const date = new Date(props.time).toLocaleString();
    // date.toDateString();

    return (
    <div>
        <a class="group flex flex-col bg-white border rounded-xl transition dark:bg-neutral-900 dark:border-neutral-800" href="/">
        <div class="p-4 md:p-5 flex flex-wrap">
            <div class="pb-5 w-[80px]">
                <div class="relative inline-block">
                <img class="inline-block size-[46px] rounded-full" src={props.hobby_pic} alt="Hobby"></img>
                <span class=" absolute bottom-0 end-0 block p-2 rounded-full transform translate-y-1/2 translate-x-1/2 bg-white dark:bg-neutral-900 dark:ring-neutral-900">
                    <img class="inline-block size-[32px] rounded-full" src={props.pfp} alt="Profile"></img>
                </span>
                </div>
            </div>
            <div class="flex justify-between items-center">
            <div>
                <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                <ol class="flex items-center whitespace-nowrap">
                    <li class="inline-flex items-center">
                        <a class="flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
                        {props.username}
                        </a>
                        <svg class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </li>
                    <li class="inline-flex items-center">
                        <a class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
                        {props.hobby}
                        </a>
                    </li>
                    </ol>
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                {props.text}
                </p>
            </div>
            </div>
            <div class="ml-auto mt-auto flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">
                <h1>{date}</h1>
            </div>
            <div>
            {isCurrentUser && (
                 <div class="hs-dropdown relative inline-flex">
                    <button id="hs-dropdown-custom-icon-trigger" type="button" class="hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                        <svg class="flex-none size-4 text-gray-600 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                    </button>
                        
                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700" aria-labelledby="hs-dropdown-custom-icon-trigger">
                        <button class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                        Newsletter
                        </button>
                    </div>
                </div>
            )}
            </div>
        </div>
       
        </a>
        {props.comments.map((comment) => (
            <div>
            <Comment comment={comment}/>
            <br></br>
            </div>
        ))}
        <WriteComment pid={props.id}/>
        </div>
    )
}

export default Post;