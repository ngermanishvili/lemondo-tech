"use client";
import React, { useState } from "react";
import styles from "@/styles/components/List.module.scss";
import { useBasketStore } from "../../store/masthead.store";
import { Domain } from "../../types/index";
import domainData from "../../utils/constants/index";
import DomainItem from "./DomainItems";
import { useSearchStore } from "../../store/search.store";
import DomainError from "./Alert";
import { useFilterStore } from "../../store/filteredstore";

const List: React.FC = () => {
  const { searchQuery } = useSearchStore();
  const { inc, dec } = useBasketStore();
  const [inBasket, setInBasket] = useState<string[]>([]);
  const { filterCriteria } = useFilterStore();

  const { minPrice, maxPrice, symbolMin, symbolMax, symbolCountMin, symbolCountMax, charPrefix, selectedCategories, selectedDomzones,
  } = filterCriteria;

  //! Filter Logic for the selected categories and Domzones selected by the user using the specified filter criteria.
  const filteredDomainData = domainData
    .filter((domain: Domain) => {
      const symbolCount = domain.name.length;
      const priceLari = domain.priceLari;

      const isPriceValid = (!minPrice || priceLari >= parseFloat(minPrice)) && (!maxPrice || priceLari <= parseFloat(maxPrice));
      const isSymbolValid = (!symbolMin || domain.name.includes(symbolMin)) && (!symbolMax || domain.name.includes(symbolMax));

      const isSymbolCountValid =
        (!symbolCountMin || symbolCount >= symbolCountMin) &&
        (!symbolCountMax || symbolCount <= symbolCountMax);

      const domainEndpoint = domain.name.split(".").slice(-1)[0];
      const isDomainEndpointValid = selectedDomzones.length === 0 || selectedDomzones.includes(`.${domainEndpoint}`);

      const isCharPrefixValid = !charPrefix || domain.name.startsWith(charPrefix);
      const isSearchMatch = domain.name.toLowerCase().includes(searchQuery.toLowerCase());
      //?? Check if the domain's category is one of the selected categories
      const isCategoryValid = selectedCategories.length === 0 || selectedCategories.some((selectedCategory) =>
        domain.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      return (isPriceValid && isSymbolValid && isSymbolCountValid && isCharPrefixValid && isSearchMatch && isCategoryValid && isDomainEndpointValid
      );
    })
    .sort((a: Domain, b: Domain) => a.name.length - b.name.length);


  //? mapping the filtered domain data to a list of DomainItems  that match the filter criteria
  return (
    <div className={styles["domenebi-mtavari-container"]}>
      {filteredDomainData.map((domain: Domain) => (
        <DomainItem key={domain.id} domain={domain} inBasket={inBasket.includes(domain.id)}
          onClick={() => {
            if (inBasket.includes(domain.id)) {
              dec(); //? Decrement the quantity of the domain in the basket - from zustand store 
              setInBasket(inBasket.filter((id) => id !== domain.id));
            } else {
              inc(); //? Increment the quantity of the domain in the basket - from zustand store 
              setInBasket([...inBasket, domain.id]);
            }
          }}
        />
      ))}
      <DomainError />
    </div>
  );
};

export default List;
