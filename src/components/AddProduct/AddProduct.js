import React from "react";
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            alert('Item added successfully!!!!!!')
        })
    };
  return (
    <div className="w-50 mx-auto">
      <h3>Please add a Product :</h3>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input  className="mb-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
        <input  className="mb-2" placeholder="Email" {...register("email", { required: true, maxLength: 20 })} />
        <textarea  className="mb-2" placeholder="Description" {...register("description")} />
        <input  className="mb-2" placeholder="Price" type="number" {...register("price")} />
        <input  className="mb-2" placeholder="Quantity" type="number" {...register("quantity")} />
        <input  className="mb-2" placeholder="Photo URL" type="text" {...register("img")} />
        <input value="Add Product" type="submit"/>
      </form>
    </div>
  );
};

export default AddProduct;