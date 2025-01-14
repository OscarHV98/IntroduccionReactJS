import { useSelector, useDispatch } from 'react-redux';
import { setFilterText, setInStock } from '../../store/features/product/ProductSlice';
import '../../styles/styleProducts.css';

export const ProductList = () => {
  const dispatch = useDispatch();
  const { productos, filterText, inStock } = useSelector((state) => state.product);

  const filteredProducts = productos.filter((product) => {
    const filter = product.name.toLowerCase().includes(filterText.toLowerCase());
    const stock = inStock ? product.stocked : true;
    return filter && stock;
  });

  return (
    <div className="card">
      <h1 className="title">Productos</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar productos..."
          value={filterText}
          onChange={(e) => dispatch(setFilterText(e.target.value))}
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
      <table className="product-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td className={product.stocked ? 'stocked' : 'disabled-stock'}>
                {product.name}
              </td>
              <td className={product.stocked ? 'stocked' : 'disabled-stock'}>
                {product.category}
              </td>
              <td className={product.stocked ? 'stocked' : 'disabled-stock'}>
                {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
