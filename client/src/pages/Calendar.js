import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import CalendarComponent from "../components/CalendarComponent"; 

import Feed from "../components/Feed";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Calendar() {
  const location = useLocation();
  const [userName, setUserName] = useState('');
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className={showModal ? "blur-lg" : ""}>
        <Header onOpenModal={handleOpenModal}></Header>
        <SideBar></SideBar>
        <CalendarComponent />
      </div>
      <div>
        {showModal && <CreatePost onCloseModal={handleCloseModal} />}
      </div>
   </div>
  );
}

export default Calendar;