import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../api/axiosPrivate';

const MyItem = () => {
    const[user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const getItems = async() =>{
            const email = user?.email;
            const url = `http://localhost:5000/item?email=${email}`;  
          try{
            const {data} = await axiosPrivate.get(url);
            setItems(data);
          }
          catch(error){
              console.log(error.message);
              if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);  
                navigate('/login')
              }
          }
        }
        getItems();
    },[user,navigate])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your items: {items.length}</h2>
            {
              items.map(item => <div key={item._id}>
                <p>{item.email} : {item.product}</p>
              </div>)
            }
        </div>
    );
};

export default MyItem;