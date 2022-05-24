import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [reload, setIsReload] = useState(true);
  const navigate = useNavigate();
  const navigateAll = () => {
    navigate("/manage");
  };
  useEffect(() => {
    const url = `https://fathomless-crag-28983.herokuapp.com/product/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, reload]);
  
  // quantity decrease
  const handleDelivered = event => {
    const quantity = product.quantity;
    let newQuantity = quantity - 1;
    console.log(newQuantity);
    const updateQuantity = { ...product, quantity: newQuantity };
    setProduct(updateQuantity);
    const url = `https://fathomless-crag-28983.herokuapp.com/product/${id}`;
    console.log("url", url);
    fetch(url, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("quantity descrese successfully!!!!!!");
      });
  };
  
  // quantity add
  const handleStock = event => {
    event.preventDefault();
    const quantity = parseInt(event.target.restock.value) + parseInt(product.quantity);
    const newQuantity = { quantity };
    console.log(newQuantity);
    const url = `https://fathomless-crag-28983.herokuapp.com/product/${id}`;
    console.log("url", url);
    fetch(url, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setIsReload(!reload);
        alert("quantity update successfully!!!!!!");
        event.target.reset();
      });
  };
  return (
    <div className="row  h-100 container mx-auto">
      <div className="col-sm-6 row align-items-center">
        <div className="card">
          <div className="card-body justify-content-center">
            <p className="card-text">Name : {product.name}</p>
            <p className="card-text">Price : {product.price}</p>
            <p className="card-text">Quantity : {product.quantity}</p>
            <p className="card-text">Sold : {product.sold}</p>
            <p className="card-text">Supplier Name : {product.supplyerName}</p>
            <p className="card-text">Description : {product.description}</p>
            <button onClick={() => handleDelivered(product._id)} className="btn btn-primary" > Delivered </button>
            <br />
            <h4 className="card-text">Restock Items: </h4>
            <form onSubmit={handleStock}>
              <input type="number" name="restock" placeholder="price" />
              <button className="btn btn-danger">Add</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-6 row mx-auto align-items-center">
        <div className="card">
          <div className="card-body justify-content-center">
            <img className="card-text" src={product.img} alt="" />
          </div>
        </div>
      </div>

      <Link to="/manage"><button className='btn btn-primary mx-auto' onClick={navigateAll}> Manage Inventory</button> </Link>
    </div>
  );
};

export default ProductDetail;
