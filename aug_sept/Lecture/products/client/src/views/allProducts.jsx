import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getAllProducts,
  deleteProductById,
} from "../services/internalApiService";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDeleteProductById = (idOfProductToDelete) => {
    deleteProductById(idOfProductToDelete)
      .then(data => {
        /*
      since this page displays all the destinations, the deleted one will still be displayed unless we remove it from state
      but we should only remove it when the delete is successful which happens inside `.then` clause
       */
        const filteredListOfProducts = products.filter(
          (product) => {
            return product._id !== idOfProductToDelete;
          });
        setProducts(filteredListOfProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {products.map((product) => {
        const { _id, name, price, description } = product;
        return (
          <div
            key={_id}
            className="container card-body shadow mb-3 rounded border p-5"
          >
            <Link to={`/products/${_id}`}>{name}</Link>
            <h3>
              Name of Product:
              <br />
              {name}
            </h3>
            <p>
              Cost of Product:
              <br />${price}
            </p>
            <p>
              This product contains: <br />
              {description}
            </p>
            <Link 
            to={`/products/${_id}/edit`} className="btn btn-sm btn-outline-danger">Edit Product
            </Link>
            <button
              onClick={(e => 
                handleDeleteProductById(_id))
              }
              className="btn btn-outline-danger btn-sm"
            >
              Buy This Product!
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
