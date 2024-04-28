import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation()
  const [hobbies, setHobbies] = useState([]);
  const [hobbyIds, setHobbyIds] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId');

  const [userPosts, setUserPosts] = useState([]);
  const [compHobbyIds, setCompHobbyIds] = useState([]);

  function getMostRecentSunday() {
    var today = new Date();
    var daysSinceSunday = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    var mostRecentSunday = new Date(today);
    mostRecentSunday.setDate(today.getDate() - daysSinceSunday);
    mostRecentSunday.setHours(0, 0, 0, 0);
    return mostRecentSunday;
  }

  useEffect(() => {
    const fetchUserHobbies = async () => {
      try {
        const hold = []
        const response = await axios.get(`http://localhost:3030/users/${userId}`); 
        if(Array.isArray(response.data)){
          setHobbies(response.data);
          for(const hobbyName of hobbies){
            const id = await axios.post(`http://localhost:3030/hobbies/getId`, { hobbyName });
            hold.push(id.data);
          }
          setHobbyIds(hold);
        }  
        else{
          console.log(response.data)
        }
      } catch (error) {
        console.error("Error fetching user hobbies: ", error);
      }
    };

    const fetchUserPosts = async () => {
      try{
        const response = await axios.get(`http://localhost:3030/users/${userId}/feed`);
        if (Array.isArray(response.data)) {
          setUserPosts(response.data);

          userPosts.forEach((post) => Date.parse(getMostRecentSunday()) > Date.parse(post.timestamp) ? setCompHobbyIds(old => old.includes(post.hobby) ? old : [...old, post.hobby] ) : '');
        }
      } catch (error) {
        console.log("Error retrieving user posts: ", error);
      }
      
    }

    
    fetchUserHobbies();
    fetchUserPosts();
  }, [location.search, userId, hobbyIds, hobbies]);

  //console.log(compHobbyIds);
  //console.log(hobbyIds);

  return (
    <div id="application-sidebar" class="hs-overlay [--auto-close:lg]
      hs-overlay-open:translate-x-0
      -translate-x-full transition-all duration-300 transform
      w-[260px]
      hidden
      fixed inset-y-0 start-0 z-[60]
      bg-white border-e border-gray-200
      lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
      dark:bg-neutral-800 dark:border-neutral-700
    ">
  <div class="px-8 pt-4">
    <h1 class="text-4xl font-extrabold dark:text-white">Your Hobbies</h1>
  </div>

  <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul className="space-y-1.5">
      {hobbies.map((hobby, index) => (
        <li>
          <a
            className={`flex items-center gap-x-3.5 py-2 px-2.5 ${compHobbyIds.includes(hobbyIds[index]) ? 'bg-lime-100 hover:bg-lime-200' : 'bg-pink-100 hover:bg-pink-200' } text-sm text-gray-700 rounded-lg dark:bg-neutral-700 dark:text-white`}
            href={`http://localhost:3000/hobby?userId=${userId}&hobbyId=${hobbyIds[index]}`}
          >
          {hobby}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>
  );
}

export default SideBar;
