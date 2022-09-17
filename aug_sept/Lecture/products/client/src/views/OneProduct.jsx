import { useParams } from "react-router-dom";

export const OneProduct = (props) => {
    const {id} = useParams();
    return <h2>OneProduct || id: {id}</h2>;
}
export default OneProduct