import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  updateProductById,
} from "../services/internalApiService";

export const EditProduct = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

//   const [errors, setErrors] = useState(null);

  useEffect(() =>{
    getProductById
    .then((data) =>{
        const {
            name,
            price,
            description
        } = data;

        setName(name);
        setPrice(price);
        setDescription(description);
    })
    .catch((error) =>{
        console.log(error)
    })
  }, [id])

  const handleEditProductSubmit = (event) => {
    //prevents the page from refreshing, aka default form submission behavior
    event.preventDefaut();

    const updatedProduct = {
        name, price, description
    };

    updateProductById(id, updatedProduct)
    .then((data) =>{
        console.log(`Edited product data:`, data);
        navigate(`/products/${id}`);
    })
    .catch((error) =>{
        console.log(error);
    });
  };

  return (
    <div className="container">
      <h1>Please Fill out the info to create your new product</h1>
      <form
        onSubmit={(event) => {
          handleEditProductSubmit(event);
        }}
      >
        <div className="form-group">
          <label>Name</label>
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

export default EditProduct;
