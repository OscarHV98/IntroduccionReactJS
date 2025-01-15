import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export const FilterableProductTable = () => {
  
  return (
    <div className="card">
      <h1 className="title">Productos</h1>
      <SearchBar/>
      <ProductTable/>
    </div>
  );
};
