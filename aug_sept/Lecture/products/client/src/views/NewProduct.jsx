import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/internalApiService";

export const NewProduct = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  
  const [errors, setErrors] = useState(null);
  
  const navigate = useNavigate();

  const handleNewProductSubmit = (e) => {
    e.preventDefault();

    const NewProduct = {
      name,
      price,
      description,
    };

    createProduct(NewProduct)
      .then((data) => {
        console.log("new product data: ", data);
        navigate(`/products`);
      })
      .catch((error) => {
        //most likely will be a validation error
        setErrors(error.response?.data?.errors); //optional chaining [in google]
        console.log(error.response);
      });
  };

  return (
    <div className="container">
    <h1>Please Fill out the info to create your new product</h1>
      <form
      onSubmit={(event)=>{
        handleNewProductSubmit(event)
      }}>
        <div className="form-group">
          <label>Name</label>
          {
            //adding error messaging specifically for name
            errors?.name && (
              <span style={{ color: 'red'}}> {errors.name?.message}</span>
            )
          }
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          {
            //adding error messaging specifically for price
            errors?.price && (
              <span style={{ color: 'red'}}> {errors.price?.message}</span>
            )
          }
          <input
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          {
            //adding error messaging specifically for description
            errors?.description && (
              <span style={{ color: 'red'}}> {errors.description?.message}</span>
            )
          }
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            className="form-control"
          ></textarea>
        </div>
        <button className="btn btn-md btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
