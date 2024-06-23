'use client';

import React, { useState } from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        alert(`You searched for: ${searchTerm}`);
    };

    return (
        <div className={classes['search-bar-container']}>
            <div className={classes['paragraph']}>Nhập địa chỉ nhận hàng</div>
            <form onSubmit={handleSearchSubmit} className={classes['search-bar-form']}>
                <div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={classes['search-bar-input']}
                        placeholder="Search..."
                    />
                    <button type="submit" className={classes['search-bar-button']}>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
