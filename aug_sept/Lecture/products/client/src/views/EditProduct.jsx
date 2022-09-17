import { useParams } from "react-router-dom";

export const EditProduct = (props) => {
    //url route param matching `:id`.
    const {id} = useParams();
    return <h2>EditProduct || id: {id}</h2>
};
export default EditProduct;