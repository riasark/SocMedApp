import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

import HobbyFeed from "../components/HobbyFeed";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function HobbyPage() {
//   const location = useLocation();
//   const [userName, setUserName] = useState('');
  
//     useEffect(() => {
//       const fetchUserName = async () => {
//         try {
//           const queryParams = new URLSearchParams(location.search);
//           const userId = queryParams.get('userId');
//           const response = await axios.get(`http://localhost:3030/users`); 
//           if(Array.isArray(response.data)){
//             const users = response.data;
//             for(const user in users){
//               if(user._id === userId){
//                 setUserName(user.username);
//                 break;
//               }
//             }
//           }  
//         } catch (error) {
//           console.error(error);
//         }
//       };
  
//       fetchUserName();
//     }, [location.search]);


  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
      <HobbyFeed></HobbyFeed>
    </div>
   
  );
}

export default HobbyPage;
