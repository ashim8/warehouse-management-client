import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const { name, img, description, quantity, supplyerName, price} = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`);
    }
    return (
        <div className='product'>
        <img className='w-100' src={img} alt="" />
        <h2>Name: {name}</h2>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>SupplierName: {supplyerName}</p>
        <p><small>{description}</small></p>
        <button onClick={() => navigateToProductDetail()} className='btn btn-primary'>Manage: {name}</button>
    </div>
);

};

export default Product;