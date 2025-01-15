import React from 'react';
import { setFilter, setInStock } from '../../store/features/product/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {

    const dispatch = useDispatch();
    const { filterText, inStock } = useSelector((state) => state.product);
    
    return (
    <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar productos..."
          value={filterText}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
        <label className="stock-filter">
          <input
            type="checkbox"
            checked={inStock}
            onChange={() => dispatch(setInStock())}
          />
          Disponibles
        </label>
      </div>
    );
}

export default SearchBar;
