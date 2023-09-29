"use client"
import React, { ChangeEvent } from 'react';
import styles from '@/styles/components/SymbolCountFilter.module.scss';
import SymbolSlider from '../SymbolSlider';

interface SymbolCountFilterProps {
    symbolCountMin: number;
    symbolCountMax: number;
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
        <div>
            <label className={styles.priceLabel2}>სიმბოლოების რაოდენობა</label>
            <div >
                <input
                    type="number"
                    name="symbolCountMin"
                    value={symbolCountMin}
                    onChange={handleInputChange}
                    placeholder="Min Symbols"
                    className={styles.input}
                    style={{ outline: 'none' }}
                />
                <input
                    type="number"
                    name="symbolCountMax"
                    value={symbolCountMax}
                    onChange={handleInputChange}
                    placeholder="Max Symbols"
                    className={styles.input}
                    style={{ marginLeft: '15px', outline: 'none' }}

                />
            </div>
            <SymbolSlider
                minSymbolCount={symbolCountMin}
                maxSymbolCount={symbolCountMax}
                onSymbolCountChange={onSymbolCountChange}
            />
        </div>
    );
};

export default SymbolCountFilter;
