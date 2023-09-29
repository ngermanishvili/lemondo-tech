import React, { ChangeEvent, FC, useState } from "react";
import { useFilterStore } from "../../../../store/filteredstore";
import { useSearchStore } from "../../../../store/search.store";
import SymbolCountFilter from "./components/SymbolCountFilter";
import SearchBar from "../Search";
import Domzone from "../DomZone";
import Categories from "../Categories";
import PriceFilter from "./components/PriceFilter";
import styles from "./SideBar.module.scss";

interface SidebarProps {
  toggleSidebarVisibility: () => void;
}

const Sidebar: FC<SidebarProps> = ({ toggleSidebarVisibility }) => {
  const { filterCriteria, updateFilter } = useFilterStore();
  const { searchQuery, setSearchQuery } = useSearchStore();

  const {
    minPrice,
    maxPrice,
    symbolCountMin,
    symbolCountMax,
    selectedDomzones,
    selectedCategories,
  } = filterCriteria;

  // Toggle the sidebar visibility
  const handleSidebarToggle = () => {
    toggleSidebarVisibility();
  };

  // Handlers for updating filter criteria
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
    const updatedDomzones = selectedDomzones.includes(domzone)
      ? selectedDomzones.filter((dz) => dz !== domzone)
      : [...selectedDomzones, domzone];
    updateFilter({ selectedDomzones: updatedDomzones });
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    updateFilter({ selectedCategories: updatedCategories });
  };

  return (
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
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      <Domzone
        selectedDomzones={selectedDomzones}
        onDomzoneChange={handleDomzoneChange}
      />
    </div>
  );
};

export default Sidebar;
