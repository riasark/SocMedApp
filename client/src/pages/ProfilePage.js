import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Profile from "../components/Profile";

import Feed from "../components/Feed";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function ProfilePage() {
  
  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
      <Profile />
    </div>
   
  );
}

export default ProfilePage;
