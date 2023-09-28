import React, { ChangeEvent } from 'react';
import styles from '../PriceFilter/PriceFilter.module.scss';
import SliderComponent from '../PriceSlider/PriceSlider';

interface PriceFilterProps {
    minPrice: string;
    maxPrice: string;
    onPriceChange: (values: [number, number]) => void;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const formatPrice = (value: string) => {
    const sanitizedValue = value.replace(/\s/g, '');
    return sanitizedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onPriceChange, handleInputChange }) => {
    // Format minPrice and maxPrice before rendering
    const formattedMinPrice = formatPrice(minPrice);
    const formattedMaxPrice = formatPrice(maxPrice);
    console.log('minPrice:', minPrice);
    console.log('maxPrice:', maxPrice);

    return (
        <div className={styles.priceFilter}>
            <label className={styles.priceLabel}>ფასი</label>
            <div className={styles.inputContainer}>
                <span className={styles.dollarSign}>₾</span>
                <input
                    type="text" // Use text type to allow spaces
                    name="minPrice"
                    value={formattedMinPrice}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Min Price"
                    style={{ outline: 'none' }}
                />

                <span className={styles.dollarSign2}>₾</span>
                <input
                    type="text" // Use text type to allow spaces
                    name="maxPrice"
                    value={formattedMaxPrice}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Max Price"
                    style={{ marginLeft: '15px', outline: 'none' }}
                />
            </div>
            <SliderComponent
                minPrice={minPrice}
                maxPrice={maxPrice}
                onPriceChange={onPriceChange}
            />
        </div>
    );
};

export default PriceFilter;
