/* Separation of concerns

Component only need to be concerned with receiving amd rendering data,
they do not need to be concerned with how to make API calls.

This service file is concerned with only how to make API calls to our API
and only returns the data

Combining a service file with the react-query package's useQuery hook
is ideal for LARGER projects

So this is a good habit to start now*/
import axios from 'axios';

//normally the url would be saved in a .env or config file that is gitignored
//so its easy to have a different url for production.
const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

/*we could also avoid repetition on '/destinations' by adding it to the axios 
baseURL, but then if we have other models we would need another axios
instance to change THAT part of the url */

export const getAllProducts = async () => {
    const res = await http.get('/products');
    return res.data
};
export const createProduct = async (data) => {
    const res = await http.post(`products`, data);
    return res.data;
};

export const getProductById = async (id) => {
    const res = await http.get(`/products/${id}`);
    return res.data;
};


export const updateProductById = async (id, data) => {
    const res = await http.put(`/products/${id}`, data);
    return res.data;
};

export const deleteProductById = async (id) => {
    const res = await http.delete(`/products/${id}`);
    return res.data
};