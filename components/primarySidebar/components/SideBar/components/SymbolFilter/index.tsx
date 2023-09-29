/* SymbolCountFilter.module.scss */
import React, { ChangeEvent } from 'react';
import styles from '@/styles/components/SymbolCountFilter.module.scss';
import SymbolSlider from '../SymbolSlider';

interface SymbolCountFilterProps {
    symbolCountMin: string;
    symbolCountMax: string;
    onSymbolCountChange: (values: [number, number]) => void;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SymbolCountFilter: React.FC<SymbolCountFilterProps> = ({
    symbolCountMin,
    symbolCountMax,
    onSymbolCountChange,
    handleInputChange,
}) => {
    return (
        <div className={styles.priceFilter}>
            <label className={styles.priceLabel}>Symbol Count</label>
            <div className={styles.inputContainer}>
                <input
                    type="number"
                    name="symbolCountMin"
                    value={symbolCountMin}
                    onChange={handleInputChange}
                    placeholder="Min Symbols"
                    className={styles.input} // Apply the input style here
                />
                <input
                    type="number"
                    name="symbolCountMax"
                    value={symbolCountMax}
                    onChange={handleInputChange}
                    placeholder="Max Symbols"
                    className={styles.input} // Apply the same input style here
                />
            </div>
            <SymbolSlider
                minSymbolCount={parseFloat(symbolCountMin)}
                maxSymbolCount={parseFloat(symbolCountMax)}
                onSymbolCountChange={onSymbolCountChange}
            />
        </div>
    );
};

export default SymbolCountFilter;
