"use client";
import React from "react";
import SideBar from "./components/SideBar/index";
import List from "../List/index";
import MobileSideBar from "../mobile";
import {useFilterStore} from "../../store/filteredstore"; // Adjust the path

const SideBarHero = () => {
  const {filterCriteria, updateFilter} = useFilterStore();
  const [isOverlayDisabled, setOverlayDisabled] = React.useState(false);

  return (
    <>
      <SideBar />
      <List />
    </>
  );
};

export default SideBarHero;
