import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

import Feed from "../components/Feed";


function HomePage() {
  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
      <Feed></Feed>
    </div>
   
  );
}

export default HomePage;
