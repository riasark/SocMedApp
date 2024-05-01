import Comment from "./Comment";
import WriteComment from "./WriteComment";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


function Post(props) {

    const [account, setAccountUser] = useState('');
   // const nav = useNavigate();
    const location = useLocation();

    const [liked, like] = useState(false);

    const toggleLike = () => {
      like(!liked);
      // logic to send to backend
    }
    
    const param = new URLSearchParams(location.search);
    const userId = param.get('userId');
    useEffect(() => {
        const findCurrUser = async () => {
            const info = await axios.get(`http://localhost:3030/users/${userId}/specific`);
            setAccountUser("@" + info.data.username);
            // console.log(account, props.username)
        }
        findCurrUser();
    });

    const isCurrentUser = account === props.username;

    const date = new Date(props.time).toLocaleString();
    // date.toDateString();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const deletePost = async () => {
        // delete post logic send to backend
        await axios.delete(`http://localhost:3030/posts/delete`, { data: { id: props.id }});
        window.location.reload();
        closeModal();

    }

    return (
    <div>
        <div class="group flex flex-col bg-white border rounded-xl transition dark:bg-neutral-900 dark:border-neutral-800" href="/">
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
            <div class="relative inline-flex">
                    <button type="button" onClick={openModal} class={`${isCurrentUser ? "" : "disabled opacity-0"} hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 bg-red-600 hover:bg-red-700 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button> 
                </div>
              <div class="relative inline-flex">
                    <p className={`${!isCurrentUser ? "" : "disabled opacity-0"} mr-2 mt-1.5`}>{props.likes}</p>
                    <button type="button" onClick={toggleLike} class={`${!isCurrentUser ? "" : "disabled opacity-0"} rounded-full hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold border border-gray-200 ${liked ? "bg-pink-400 hover:bg-pink-500" : "bg-blue-600 hover:bg-blue-700"} text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`} >
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                    </button> 
              </div>
            </div>
            
        </div>
       
        </div>
        {props.comments.map((comment) => (
            <div>
            <Comment comment={comment}/>
            <br></br>
            </div>
        ))}
        <WriteComment pid={props.id}/>
        <div id="hs-slide-down-animation-modal" class={`hs-overlay ${isModalOpen ? '' : "hidden"} mt-4 size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none`}>
                    <div class={`hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 ${isModalOpen ? "" : "opacity-0"} ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto`}>
                      <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                          <h3 class="font-bold text-gray-800 dark:text-white">
                            Delete Post
                          </h3>
                          <button type="button" onClick={closeModal} class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-slide-down-animation-modal">
                            <span class="sr-only">Close</span>
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </button>
                        </div>
                        <div class="p-4 overflow-y-auto">
                          <p class="mt-1 text-gray-800 dark:text-neutral-400">
                            Are you sure you want to delete this post? This action can not be reverted.
                          </p>
                        </div>
                        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                          <button type="button" onClick={closeModal} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-slide-down-animation-modal">
                            Cancel
                          </button>
                          <button type="button" onClick={deletePost} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            Delete Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
    )
}

export default Post;