// import logo from './logo.svg';
// import './App.css';

import { Link, Navigate, Route, Routes } from "react-router-dom";

//named imports
import Products from "./views/allProducts";
import Product from "./views/OneProduct";
import { NewProduct } from "./views/NewProduct";
import { EditProduct } from "./views/EditProduct";
import { NotFound } from "./views/notFound";
// import { Product } from "../../server/models/product.model";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <div className="navbar-nav justify-content-between">
          <h1 className="navbar-brand mb-0">Product Management</h1>
          <Link to="/products/new" className="btn btn-sm btn-outline-info mx-1">
            New Product
          </Link>
          <Link to="/products" className="btn btn-sm btn-outline-primary mx-1">
            All Products
          </Link>
        </div>
      </nav>

      {/*Front-end routes to display view components
      these are separate from our server routes */}
      <Routes>
      {/*Redirect example*/}
        <Route path="/" element={<Navigate to="products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
