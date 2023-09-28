"use client";
import React, {ChangeEvent, useState} from "react";
import {useSearchStore} from "../../store/search.store";
import SymbolCountFilter from "../primarySidebar/components/SideBar/components/SymbolCountFilter/SymbolCountFilter";
import SearchBar from "../primarySidebar/components/Search/SearchBar";
import Domzone from "../primarySidebar/components/DomZone/DomZone";
import Categories from "../primarySidebar/components/Categories/Categories";
import styles from "./MobileBar.module.scss";
import PriceFilter from "../primarySidebar/components/SideBar/components/PriceFilter/PriceFilter";
import {SidebarHeader} from "../mobile/sidebarHeader/sidebarHeader";
import {useFilterStore} from "../../store/filteredstore"; // Ensure this

const MobileSideBar: React.FC = () => {
  const {searchQuery, setSearchQuery} = useSearchStore();
  const {filterCriteria, updateFilter} = useFilterStore();
  const {minPrice, maxPrice, symbolCountMin, symbolCountMax} = filterCriteria;
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebarVisibility = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const handleSymbolCountChange = (values: [number, number]) => {
    updateFilter({symbolCountMin: values[0], symbolCountMax: values[1]});
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    updateFilter({...filterCriteria, [name]: value});
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
    updateFilter({selectedDomzones: updatedDomzones});
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = filterCriteria.selectedCategories.includes(
      category
    )
      ? filterCriteria.selectedCategories.filter((c) => c !== category)
      : [...filterCriteria.selectedCategories, category];
    updateFilter({selectedCategories: updatedCategories});
  };

  return (
    <>
      <div
        className={styles.sidebar1}
        style={
          sidebarVisible
            ? {
                display: "none",
              }
            : {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
                width: "100%",
                maxHeight: "150vh",
                overflowY: "auto",
              }
        }
      >
        <SidebarHeader onClose={toggleSidebarVisibility} />
        <button>search</button>
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

export default MobileSideBar;
