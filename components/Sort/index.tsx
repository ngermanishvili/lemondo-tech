"use client"
import React, { useState } from "react";
import styles from "@/styles/components/SortComponent.module.scss";
import Link from "next/link";
import MobileSideBar from "../mobile/index";
import { LuSettings2 } from 'react-icons/lu';
import Image from "next/image";
import ChevronDown from '@/public/images/arrow-down.svg'


interface FilterCriteria {
  [key: string]: string | number | string[];
}

const initialFilterCriteria: FilterCriteria = {
  minPrice: "",
  maxPrice: "",
  symbolMin: "",
  symbolMax: "",
  symbolCountMin: 0,
  symbolCountMax: 26,
  charPrefix: "",
  selectedCategories: [],
  category: "",
  selectedDomzones: [],
};

const SortComponent = () => {
  const [paragraphStates, setParagraphStates] = useState(Array(7).fill(false));
  const [showRedScreen, setShowRedScreen] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>(
    initialFilterCriteria
  );


  const handleParagraphClick = (index: number) => {
    setParagraphStates(paragraphStates.map((_, i) => i === index));
  };

  const handleButtonClick = () => {
    setShowRedScreen(!showRedScreen);
  };




  return (
    <div className={styles.sortContainer}>
      <div className={styles.title}>
        <div style={{ marginRight: "10px" }}>
          <p className={`${styles.titleOne} ${paragraphStates[0] && styles.clickedTitleOne}`}>
            დომენები მარკეტზე: <b style={{ color: "#000" }}>703</b>
          </p>
        </div>
        <div className={styles.titleTwo}>
          <div className={styles.titleTwoChild}>
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i}>
                <p
                  className={`${styles.titleOne} ${paragraphStates[i] && styles.clickedTitleOne}`}
                  onClick={() => handleParagraphClick(i)}
                >
                  <b style={{ color: "#000" }}>
                    {i === 1 ? "სორტირება:" : ""}
                  </b>{" "}
                  {i === 2 ? "დამატების თარიღით" : ""}
                  {i === 3 ? "ვადის ამოწურვით" : ""}
                  {i === 4 || i === 5 ? "ფასით" : ""}
                  {i === 6 ? "ანბანით" : ""}
                </p>
              </div>
            ))}
          </div>

        </div>
        <Link href="https:domenebi.ge/faq">
          <span className={styles.span}>როგორ გავყიდო დომეინი?</span>
        </Link>
      </div>
      <div className={styles.filtering}>
        <button title="sorting" className={styles.button1} onClick={handleButtonClick}>
          სორტირება
          <LuSettings2 className={styles.iconRight}  />
        </button>
        <button className={styles.button1}>სორტირება
          <Image src={ChevronDown} className={styles.iconRight2} alt="chevron-down" width={10} height={6} />

        </button>
      </div>
      {showRedScreen && (
        <div className={styles.overlay}>
          <MobileSideBar toggleSidebarVisibility={handleButtonClick} />
        </div>
      )}
    </div>
  );
};

export default SortComponent;
