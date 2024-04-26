import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";

import Feed from "../components/Feed";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function HomePage() {
  const location = useLocation();
  const [userName, setUserName] = useState('');
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    useEffect(() => {
      const fetchUserName = async () => {
        try {
          const queryParams = new URLSearchParams(location.search);
          const userId = queryParams.get('userId');
          const response = await axios.get(`http://localhost:3030/users`); 
          if(Array.isArray(response.data)){
            const users = response.data;
            for(const user in users){
              if(user._id === userId){
                setUserName(user.username);
                break;
              }
            }
          }  
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchUserName();
    }, [location.search]);


  return (
    <div>
      <div className={showModal ? "blur-lg" : ""}>
        <Header username={userName} onOpenModal={handleOpenModal}></Header>
        <SideBar></SideBar>
        <Feed></Feed>
      </div>
      <div>
        {showModal && <CreatePost onCloseModal={handleCloseModal} />}
      </div>
   </div>
  );
}

export default HomePage;
