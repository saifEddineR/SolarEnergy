import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector((state) => state.auth.products);
  return (
    <div>
      {products
        ? products.map((product) => <ProductCard key={product._id} {...product} />)
        : true}
    </div>
  );
};
const ProductCard = ({ name, img, price, desc, status }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={img} width='100' />
    </div>
  );
};

export default Products;
