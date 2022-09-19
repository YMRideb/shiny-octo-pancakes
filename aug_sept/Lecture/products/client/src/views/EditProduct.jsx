import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  getProductById,
  updateProductById } from "../services/internalApiService";

export const EditProduct = (props) => {
  //url route param matching ":id"
  const {id} = useParams()
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState(null);

  useEffect(()=>{
    getProductById(id)
    .then((data) =>{
      const {name, price, description} = data;

      setName(name);
      setPrice(price);
      setDescription(description);
    })
    .catch((error) =>{
      console.log(error);
    });
  }, [id]);


  const handleEditProductSubmit = (e) => {
    e.preventDefault();

    const editedProduct = {
      name,
      price,
      description,
    };

    updateProductById(id, editedProduct)
      .then((data) => {
        console.log("updated product data: ", data);
        navigate(`/products/${id}`);
      })
      .catch((error) => {
        //most likely will be a validation error
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Please Fill out the info to edit your new product</h1>
      <form
        onSubmit={(event) => {
          handleEditProductSubmit(event);
        }}
      >
        <div className="form-group">
          <label>Name</label>
          {/* {
            //adding error messaging specifically for name
            errors?.name && (
              <span style={{ color: "red" }}> {errors.name?.message}</span>
            )
          } */}
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control"
            value={name}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          {/* {
            //adding error messaging specifically for price
            errors?.price && (
              <span style={{ color: "red" }}> {errors.price?.message}</span>
            )
          } */}
          <input
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            type="text"
            className="form-control"
            value={price}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          {/* {
            //adding error messaging specifically for description
            errors?.description && (
              <span style={{ color: "red" }}>
                {" "}
                {errors.description?.message}
              </span>
            )
          } */}
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            className="form-control"
            value={description}
          ></textarea>
        </div>
        <button className="btn btn-md btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default EditProduct;
