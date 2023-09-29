"use client";
import React from "react";
import SideBar from "./components/SideBar/index";
import List from "@/components/list/index";



const SideBarHero = () => {
  const handleToggleSidebar = () => {
    console.log('Lemondo - Domenebi');
  };
  return (
    <>
      <SideBar toggleSidebarVisibility={handleToggleSidebar} />
      <List />
    </>
  );
};

export default SideBarHero;
