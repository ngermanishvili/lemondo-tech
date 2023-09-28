"use client"

import React, { ChangeEvent } from 'react';
import styles from '../Search/SearchBar.module.scss';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="სახელით ძიება"
                className={styles.input}
            />
        </>
    );
};

export default SearchBar;
