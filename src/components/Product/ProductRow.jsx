import React from 'react';
import { useSelector } from 'react-redux';

const ProductRow = ({filteredProducts}) => {

    return (
        <>
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
                    <td className={product.stocked ? 'stocked' : 'disabled-stock'}>
                        {product.stocked ? 'Disponible' : 'Sin Stock'}
                    </td>
                </tr>
            ))}
        </>
    );
}

export default ProductRow;
