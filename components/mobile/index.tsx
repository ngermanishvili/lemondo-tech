"use client"
import React, { ChangeEvent, FC, useState } from "react";
import { useSearchStore } from "../../store/search.store";
import { useFilterStore } from "../../store/filteredstore";
import SymbolCountFilter from "../primarySidebar/components/SideBar/components/SymbolCountFilter";
import SearchBar from "../primarySidebar/components/Search";
import Domzone from "../primarySidebar/components/DomZone";
import Categories from "../primarySidebar/components/Categories";
import styles from "@/styles/components/MobileBar.module.scss";
import PriceFilter from "../primarySidebar/components/SideBar/components/PriceFilter";
import { SidebarHeader } from "./sidebarHeader";

interface MobileSideBarProps {
  toggleSidebarVisibility: () => void;
}

const MobileSideBar: FC<MobileSideBarProps> = ({ toggleSidebarVisibility }) => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const { filterCriteria, updateFilter } = useFilterStore();

  const {
    minPrice,
    maxPrice,
    symbolCountMin,
    symbolCountMax,
    selectedDomzones,
    selectedCategories,
  } = filterCriteria;

  const [sidebarVisible] = useState(false);


  // Filter handling.
  const handleSymbolCountChange = (values: [number, number]) => {
    updateFilter({ symbolCountMin: values[0], symbolCountMax: values[1] });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateFilter({ ...filterCriteria, [e.target.name]: e.target.value });
  };

  const handlePriceChange = (values: [number, number]) => {
    updateFilter({ minPrice: values[0].toString(), maxPrice: values[1].toString() });
  };

  const handleDomzoneChange = (domzone: string) => {
    const updatedDomzones = selectedDomzones.includes(domzone)
      ? selectedDomzones.filter(dz => dz !== domzone)
      : [...selectedDomzones, domzone];
    updateFilter({ selectedDomzones: updatedDomzones });
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    updateFilter({ selectedCategories: updatedCategories });
  };

  return (
    <div className={sidebarVisible ? styles.sidebarHidden : styles.sidebarVisible}>
      <SidebarHeader onClose={toggleSidebarVisibility} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PriceFilter minPrice={minPrice} maxPrice={maxPrice} onPriceChange={handlePriceChange} handleInputChange={handleInputChange} />
      <SymbolCountFilter symbolCountMin={symbolCountMin} symbolCountMax={symbolCountMax} onSymbolCountChange={handleSymbolCountChange} handleInputChange={handleInputChange} />
      <Categories selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
      <Domzone selectedDomzones={selectedDomzones} onDomzoneChange={handleDomzoneChange} />
      <SidebarHeader onClose={toggleSidebarVisibility} />
    </div>
  );
};

export default MobileSideBar;
