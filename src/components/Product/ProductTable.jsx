import React from 'react';
import ProductRow from './ProductRow';
import { useSelector } from 'react-redux';

const ProductTable = () => {

      const { productos, filterText, inStock } = useSelector((state) => state.product);
          
            const filteredProducts = productos.filter((product) => {
              const filter = product.name.toLowerCase().includes(filterText.toLowerCase());
              const stock = inStock ? product.stocked : true;
              return filter && stock;
            });

    return (
        <>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Disponibles</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow filteredProducts={filteredProducts}/>
                </tbody>
            </table>
        </>
    );
}

export default ProductTable;
