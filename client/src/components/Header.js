import troy from "../icons/troy.jpg";
import annie from "../icons/annie.jpg"
import britta from "../icons/britta.jpg"
import man from "../icons/man.jpg"
import woman from "../icons/woman.jpg"
import boat from "../icons/boat.jpg"
import camera from "../icons/camera.jpg"
import coolgirl from "../icons/coolgirl.jpg"
import coolguy from "../icons/coolguy.jpg"
import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const Header = ({ onOpenModal }) => {

  const nav = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId');

  // const [hidden, setHidden] = useState([]);
  // setHidden("hidden");
  
  const [searchInput, setSearchInput] = useState("");
  const [allHobbies, setAllHobbies] = useState([]);
  const [userPfp, setPFP] = useState('');
  // const hobbies = []
  useEffect(() => {
    const hobbies = async () => {
      try{
        const hob = await axios.get(`http://localhost:3030/hobbies`);
        setAllHobbies(hob.data);
      }  catch (error) {
        console.error("Error fetching user hobbies:", error);
      }
    }
    const getpfp = async () => {
      const user = await  axios.get(`http://localhost:3030/users/${userId}/specific`);
      setPFP(user.data.pfp);
    }
    hobbies();
    getpfp();
  });
  //console.log(allHobbies)

  const displayModal = () => {
    console.log("button click");
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      const hobId = allHobbies.filter((hobby) => {return hobby.name.match(searchInput)})[0];
      nav(`/hobby?userId=${userId}&hobbyId=${hobId._id}`);
    }
  }

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

  //console.log(allHobbies)

  //console.log(allHobbies)
    return (
        <header class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700">
  <nav class="flex basis-full items-center w-full mx-auto px-4 sm:px-6" aria-label="Global">
    <div class="me-5 lg:me-0 lg:hidden">
      <button class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="" aria-label="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <div class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
      

      <div class="hidden sm:block">
        <label for="icon" class="sr-only">Search</label>
        <div class="relative min-w-72 md:min-w-80">
          <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <svg class="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <input type="text" onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleEnter} id="icon" name="icon" class="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search"></input>
          <div class="absolute z-50 w-full bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700" data-hs-combo-box-output="">
          <div class="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" data-hs-combo-box-output-items-wrapper=""></div>
          </div>
        </div>
      </div>

      <div class="flex flex-row items-center justify-end gap-2">
        {/* <button type="button" class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </button> */}
        <div>
            <button type="submit" onClick={onOpenModal} class="h-[35px] y-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 cursor-pointer" data-hs-overlay="#hs-notifications">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Post
          </button>
        </div>
        

        <button type="button" class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-offcanvas="#hs-offcanvas-right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
        </button>

        
        <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
          <a href={`http://localhost:3000/profile?userId=${userId}`}>
            <button id="hs-dropdown-with-header" type="button" class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
              <img class="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800" src={pfp()} alt="Image Description"></img>
            </button>
          </a>
          

          {/* <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-900 dark:border dark:border-neutral-700" aria-labelledby="hs-dropdown-with-header">
            <div class="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-800">
              <p class="text-sm text-gray-500 dark:text-neutral-400">Signed in as</p>
              <p class="text-sm font-medium text-gray-800 dark:text-neutral-300">{props.username}</p>
            </div>
            <div class="mt-2 py-2 first:pt-0 last:pb-0">
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                Newsletter
              </a>
              
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </nav>
</header>

          
    )
}

export default Header;