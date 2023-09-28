"use client";
import React, {useState} from "react";
import styles from "./SortComponent.module.scss";
import Link from "next/link";
import MobileSideBar from "../mobile/index";
export interface FilterCriteria {
  minPrice: string;
  maxPrice: string;
  symbolMin: string;
  symbolMax: string;
  symbolCountMin: number;
  symbolCountMax: number;
  charPrefix: string;
  selectedCategories: string[];
  category: string; // if you still need this
  selectedDomzones: string[]; // Add selectedDomzones here
}

// Export the initial filter criteria
export const initialFilterCriteria: FilterCriteria = {
  minPrice: "",
  maxPrice: "",
  symbolMin: "",
  symbolMax: "",
  symbolCountMin: 0,
  symbolCountMax: 26,
  charPrefix: "",
  selectedCategories: [],
  category: "", // if you still need this
  selectedDomzones: [], // Initialize as an empty array
};

const SortComponent = () => {
  const initialParagraphStates = Array(7).fill(false);
  const [paragraphStates, setParagraphStates] = useState(
    initialParagraphStates
  );
  const [showRedScreen, setShowRedScreen] = useState(false);

  const handleParagraphClick = (index: number) => {
    const newParagraphStates = initialParagraphStates.map(
      (_, i) => i === index
    );
    setParagraphStates(newParagraphStates);
  };

  const handleButtonClick = () => {
    setShowRedScreen(true);
  };

  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>(
    initialFilterCriteria
  );

  const handleFilterChange = (newFilters: Partial<FilterCriteria>) => {
    setFilterCriteria((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <>
      <div className={styles.title}>
        <div style={{marginRight: "10px"}}>
          <p
            className={
              paragraphStates[0] ? styles.clickedTitleOne : styles.titleOne
            }
          >
            დომენები მარკეტზე: <b style={{color: "#000"}}>703</b>
          </p>
        </div>
        <div className={styles.titleTwo}>
          <div className={styles.titleTwoChild}>
            <div>
              <p
                className={
                  paragraphStates[1] ? styles.clickedTitleOne : styles.titleOne
                }
                onClick={() => handleParagraphClick(1)}
              >
                <b style={{color: "#000"}}>სორტირება: </b>
              </p>
            </div>
            <div>
              <p
                className={
                  paragraphStates[2] ? styles.clickedTitleOne : styles.titleOne
                }
                onClick={() => handleParagraphClick(2)}
              >
                დამატების თარიღით
              </p>
            </div>
            <div>
              <p
                className={
                  paragraphStates[3] ? styles.clickedTitleOne : styles.titleOne
                }
                onClick={() => handleParagraphClick(3)}
              >
                ვადის ამოწურვით
              </p>
            </div>
            <div className={styles.iconicTitle}>
              <p
                className={
                  paragraphStates[4] ? styles.clickedTitleOne : styles.titleOne
                }
                onClick={() => handleParagraphClick(4)}
              >
                ფასით
              </p>
            </div>
            <div className={styles.iconicTitle}>
              <p
                className={
                  paragraphStates[5] ? styles.clickedTitleOne : styles.titleOne
                }
                onClick={() => handleParagraphClick(5)}
              >
                ფასით
              </p>
            </div>
            <div>
              <p
                className={
                  paragraphStates[6] ? styles.clickedTitleOne : styles.titleOne
                }
                onClick={() => handleParagraphClick(6)}
              >
                ანბანით
              </p>
            </div>
          </div>
        </div>
        <Link href="https://domenebi.ge/faq">
          <span className={styles.span}>როგორ გავყიდო დომეინი?</span>
        </Link>
      </div>
      <div className={styles.filtering}>
        <button onClick={handleButtonClick}>mobilesidebar</button>
        <button>kaiho</button>
      </div>
      {showRedScreen ? (
        <div className={styles.overlay}>
          <MobileSideBar />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SortComponent;
