"use client"
import React, { useState } from "react";
import styles from "./SortComponent.module.scss";
import Link from "next/link";
import MobileSideBar from "../mobile/index";
import Image from 'next/image';
import { LuSettings2 } from 'react-icons/lu';




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
    setShowRedScreen(prevShowRedScreen => !prevShowRedScreen);
  };

  const handleSidebarClose = () => {
    setShowRedScreen(false); // Close the sidebar
  };

  return (
    <div>
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
          <LuSettings2 className={styles.iconRight} />
        </button>
        <button className={styles.button1}>სორტირება
          <LuSettings2 className={styles.iconRight2} />
        </button>
      </div>
      {showRedScreen && (
        <div className={styles.overlay}>
          <MobileSideBar />
        </div>
      )}
    </div>
  );
};

export default SortComponent;
