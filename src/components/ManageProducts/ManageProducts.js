import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';


const ManageProducts = () => {
    const [products, setServices] = useServices();
    const navigate = useNavigate();
    const navigateAdd = () =>{
      navigate('/addproduct');
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://gentle-anchorage-81249.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your products: </h2>
            <Table responsive  striped bordered size="sm">
                <thead>
                    <tr>
                        
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                    <tr>
                        <td><img className='w-25' src={product.img} alt="" /></td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button className='btn btn-danger' onClick={()=> handleDelete(product._id)}>Delete</button></td>
                    </tr>
                   
                    ))}
                    
                </tbody>
            </Table>
              {/* <Link to="/addservice"> </Link>  */}
              <button className='btn btn-primary mx-auto' onClick={navigateAdd}>Add new item</button>
        </div>
      
    );
};

export default ManageProducts;