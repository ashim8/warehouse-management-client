// import React, { useEffect, useState } from 'react';
// import './Home.css'
// const Home = () => {
//     const[products, setProduct] = useState([]);
//     useEffect( ()=>{
//         fetch('http://localhost:5000/product')
//         .then(res => res.json())
//         .then(data => setProduct(data));
//     }, [])

//     return (
//         <div className='data-container'>
          
//           {
//               products.map(product => <li>Name:{product.name}:: image: <img src={product.img} alt="" />::Price:{product.price}::Quantity: {product.quantity}:: Description:{product.description}</li>
//                )
//           }
//         </div>
//     );
// };

// export default Home;
import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Products></Products>
        </>
    );
};

export default Home;