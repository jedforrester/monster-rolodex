import React from 'react';

import './search-box.styles.css'

export const SearchBox = ({ placeHolder, handleChange }) => (
    <input 
        className = 'search'
        onChange={handleChange}
        type='search' 
        placeholder= {placeHolder} 
    />
);
