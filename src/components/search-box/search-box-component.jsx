import React from 'react';
import './search-box.styles.css'

const SearchBox = ({ placeholder, changeHandler }) => {
    return (
        <div className='div'>
            <input
                type="search"
                className="search"
                placeholder={placeholder}
                onChange={changeHandler}
            />
        </div>
    )
}

export default SearchBox
