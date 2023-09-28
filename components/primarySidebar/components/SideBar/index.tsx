"use client";
import React, { ChangeEvent, useState } from "react";
import { FilterCriteria } from "../../../../types/index";
import { useSearchStore } from "../../../../store/search.store";
import { useFilterStore } from "../../../../store/filteredstore";
import SymbolCountFilter from "./components/SymbolCountFilter/SymbolCountFilter";
import SearchBar from "../Search/SearchBar";
import Domzone from "../DomZone/DomZone";
import Categories from "../Categories/Categories";
import PriceFilter from "./components/PriceFilter/PriceFilter";
import styles from "./SideBar.module.scss";
import ReactSlider from 'react-slider'; // Import ReactSlider if it's an external package

const Sidebar: React.FC = () => {
  const { filterCriteria, updateFilter } = useFilterStore();
  const { searchQuery, setSearchQuery } = useSearchStore();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const { minPrice, maxPrice, symbolCountMin, symbolCountMax } = filterCriteria;
  const toggleSidebarVisibility = () => {
    setSidebarVisible(!sidebarVisible);
  };

  //? Update handlers from zustand
  const handleSymbolCountChange = (values: [number, number]) => {
    updateFilter({ symbolCountMin: values[0], symbolCountMax: values[1] });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateFilter({ ...filterCriteria, [name]: value });
  };

  const handlePriceChange = (values: [number, number]) => {
    updateFilter({
      minPrice: values[0].toString(),
      maxPrice: values[1].toString(),
    });
  };

  const handleDomzoneChange = (domzone: string) => {
    const updatedDomzones = filterCriteria.selectedDomzones.includes(domzone)
      ? filterCriteria.selectedDomzones.filter((dz) => dz !== domzone)
      : [...filterCriteria.selectedDomzones, domzone];
    updateFilter({ selectedDomzones: updatedDomzones });
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = filterCriteria.selectedCategories.includes(
      category
    )
      ? filterCriteria.selectedCategories.filter((c) => c !== category)
      : [...filterCriteria.selectedCategories, category];
    updateFilter({ selectedCategories: updatedCategories });
  };

  return (
    <>
      <div className={styles.sidebar}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <PriceFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={handlePriceChange}
          handleInputChange={handleInputChange}
        />
        <SymbolCountFilter
          symbolCountMin={symbolCountMin}
          symbolCountMax={symbolCountMax}
          onSymbolCountChange={handleSymbolCountChange}
          handleInputChange={handleInputChange}
        />
        <Categories
          selectedCategories={filterCriteria.selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
        <Domzone
          selectedDomzones={filterCriteria.selectedDomzones}
          onDomzoneChange={handleDomzoneChange}
        />
      </div>
    </>
  );
};

export default Sidebar;
