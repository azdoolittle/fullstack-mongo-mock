import React from 'react';

const Products = ({product}) => (
    <div className='product-list-entry'>
      <h4>{product.item}</h4>
      <img src={product.image}></img>
      <h6>Min Cost: {product.min_cost}</h6>
      <h6>Current Bid: {product.curr_bid}</h6>
    </div>
)

export default Products