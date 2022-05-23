import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
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
        </div>
    );
};

export default Products;