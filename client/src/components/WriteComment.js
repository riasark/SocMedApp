import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function WriteComment(props) {
    const [comment, setComment] = useState('');
    const handleCommentChange = (e) => setComment(e.target.value);

    const submitComment = async (e) => {
        e.preventDefault();
        let pid = props.pid;
        let data = JSON.stringify({
            "id": pid,
            "content": comment
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3030/posts/comment',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        setComment('');
    } 

    return (
        <div className="relative rounded-bl-lg border-b border-l mx-4 flex flex-wrap">
        <input value={comment} onChange={handleCommentChange}  id="hs-textarea-ex-1" className="w-5/6 flex p-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Add a comment..."></input>

        <div className="flex absolute right-0 p-2 rounded-b-md bg-white dark:bg-neutral-900">
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-1">
                <button onClick={submitComment} type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>

    )
}

export default WriteComment;