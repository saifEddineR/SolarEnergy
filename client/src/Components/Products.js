import '../css/products.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import ModalButton from './Modal';

const Products = () => {
  const products = useSelector((state) => state.auth.products);
  return (
    <div>
      <ModalButton />
      {products
        ? products.map((product) => <ProductCard key={product._id} {...product} />)
        : true}
    </div>
  );
};
// const ProductCard = ({ name, img, price, desc, status }) => {
//   return (
//     <div className='unit-card'>
//       <img src={img} height='80' alt='products' />
//       <span className='title' >
//         <h3>{name}</h3>
//         <p>{desc} </p>
//       </span>
//       <div className='edit-task-click'>
//         <span>
//           <FiEdit />
//         </span>
//       </div>
//       <div className='btn-remove'>
//         <span>
//           <FaTrash />
//         </span>
//       </div>
//     </div>
//   );
// };

const ProductCard = ({ name, img, price, desc, status }) => {
  return (
    <div className='card' id='black'>
      <span>
        <img src={img} alt='user' />
      </span>
      <h4 className='name'>{name}</h4>
      <h6 className='desc'>{desc}</h6>
      <p className='price'>{price} TND</p>
      <span className='buttons'>
        <button className='card-btn edit-btn'>
          <FiEdit className='edit-icon icons' />
        </button>
        <button className='card-btn delete-btn'>
          <FaTrash className='delete-icon icons' />
        </button>
      </span>
    </div>
  );
};

export default Products;
