import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const navigateToManage = () =>{
      navigate('/manage');
    }

    useEffect( ()=>{
        fetch('https://fathomless-crag-28983.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)));
        //.then(data=>setData(slice(0,6).data)
    }, [products])

    return (
        <div id="products" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Products</h1>
            <div className="products-container">
            {
                products.map(product => <Product
                    key={product._id}
                    product = {product}
                >
                 </Product> )
            
            }
            </div>
            </div>
            <button className='btn btn-primary mx-auto' onClick={navigateToManage}>Manage Inventory</button>
        </div>
    );
};

export default Products;