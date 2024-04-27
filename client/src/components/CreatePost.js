import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


const CreatePost = ({ onCloseModal }) => {

  const location = useLocation()
  const [hobbies, setHobbies] = useState([]);
  const [hid, setHid] = useState('');
  const [content, setContent] = useState('');
  const nav = useNavigate();

    const submitPost = async () => {
        console.log(`hid: ${hid}`);
        console.log(`content: ${content}`);
        // axios call to send info to backend
        try {
          const queryParams = new URLSearchParams(location.search);
          const userId = queryParams.get('userId');
          const response = await axios.post(`http://localhost:3030/posts/${userId}/newpost`, { hid, content });
          console.log(response.data);
          nav(`/home?userId=${userId}`);
        }catch(err){
          console.log(err);
        }
        onCloseModal();
    }

  useEffect(() => {
    const fetchUserHobbies = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const userId = queryParams.get('userId');
        const response = await axios.get(`http://localhost:3030/users/${userId}`); 
        if(Array.isArray(response.data)){
          setHobbies(response.data);
          console.log(`hobbies: ${JSON.stringify(response.data)}`)
        }  
        else{
          console.log(response.data)
        }
      } catch (error) {
        console.error("Error fetching user hobbies:", error);
      }
    };

    fetchUserHobbies();
  }, [location.search]);

    return (
        <div id="hs-notifications" class={`hs-overlay size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto`}>
          <div class="mt-[100px] hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div class="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-800">
              <div class="absolute top-2 end-2">
                <button onClick={onCloseModal} type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700" data-hs-overlay="#hs-notifications">
                  <span class="sr-only">Close</span>
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              <div class="p-4 sm:p-10 overflow-y-auto">
                <div class="mb-6 text-center">
                  <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200">
                    Create A Post
                  </h3>
                  <p class="text-gray-500 dark:text-neutral-500">
                    Post to one of your Hobby Groups to share goals, progress, or inspiration!
                  </p>
                </div>

                <div class="space-y-4">
                  <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                    <select  onChange={(e) => setHid(e.target.value)} class="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
                        <option selected="">Choose a Hobby Community to Post to</option>
                        {hobbies.map((hobby) => (
                            <option value={hobby._id}>{hobby}</option>
                        ))}
                    </select>
                  </div> 

                  {/* <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">

                  </div> */}

                  <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                  <textarea onChange={(e) => setContent(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                  </div>
                </div>
              </div>

              <div class="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t dark:bg-neutral-950 dark:border-neutral-800">
                {/* <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-notifications">
                  Cancel
                </button> */}
                <button onClick={submitPost} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Create Post
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}
export default CreatePost