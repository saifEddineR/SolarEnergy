import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {
  const products = useSelector((state) => state.auth.products);
  return (
    <div>
      {products ? (
        products.map((product) => <ProductCard key={product._id} {...product} />)
      ) : (
        <></>
      )}
    </div>
  );
};

const ProductCard = ({ name, img, desc }) => {
  return (
    <div className='product-card'>
      <h4>{name} </h4>
      <img src={img} alt='product' />
      <p>{desc} </p>
    </div>
  );
};

export default Products;
