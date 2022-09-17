import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../services/internalApiService";


export const OneProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(()=>{
        getProductById(id)
        .then(data =>{
            setProduct(data)
        })
        .catch(console.log(Error))
    }, [id])

    if(product === null){
        return <h3 className="text-danger">..No idea what you're talking about</h3>
    }

    //we can safely use the data to render and destructure now
    //since we checked if the data is null
    const {name, price, description} = product;

    return (
      <>
        <h2>OneProduct || id: {id}</h2>
        <h3>{name}</h3>
        <h2>{price}</h2>
        <h3>{description}</h3>
      </>
    );
}
export default OneProduct