import React from 'react';
import Products from './Products';

const ProductList = ({products}) => (
    <div className='product-list'>
      <h1>PRODUCT LIST</h1>
      {products.map((product) =>
      <Products
        key={product._id}
        product={product}
      />
      )}
    </div>
)

export default ProductList