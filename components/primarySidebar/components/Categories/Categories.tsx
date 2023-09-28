import React from 'react';
import styles from './Categories.module.scss';
import { categoryMapping } from '../../../../utils/constants/index';

interface CategoriesProps {
    selectedCategories: string[];
    onCategoryChange: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ selectedCategories, onCategoryChange }) => {
    const englishCategories = Object.keys(categoryMapping) as (keyof typeof categoryMapping)[];

    const handleCategoryCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.name;
        onCategoryChange(category);
    };

    return (
        <div className={styles['filter-categories-section']}>
            <h4>კატეგორიები</h4>
            <div className={styles['categories-list']}>
                {englishCategories.map((englishCategory, index) => (
                    <div key={index} className={styles['category']}>
                        <label className={styles['container']}>
                            <input
                                type="checkbox"
                                name={englishCategory}
                                id={`category-${index}`}
                                checked={selectedCategories.includes(englishCategory)}
                                onChange={handleCategoryCheck}
                                className={styles['white']}
                            />
                            <span className={styles['checkmark']}></span>
                            <span className={styles['category-name']}>{categoryMapping[englishCategory]}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
