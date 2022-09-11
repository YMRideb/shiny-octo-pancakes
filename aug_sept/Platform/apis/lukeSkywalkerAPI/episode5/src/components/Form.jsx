import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Form = ()=>{
    let [category, setCategory] = useState("people");
    let [id, setId] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        // navigate("/"+category+"/"+id); // without string interpolation
        navigate(`/${category}/${id}`);
        // console.log("there is no spoon") to test my button click
    }

    //when the route is ("/{something}/{someId}")

    //redirect the page when the form is submitted
    return(
        <>
        <form onSubmit={submitHandler} className="d-flex justify-content-around align-items-center">
            <div className="form-group">
                <label htmlFor="search-for">Search For</label>
                <select onChange={(e)=>setCategory(e.target.value)} name="" id="">
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="films">films</option>
                    <option value="species">species</option>
                    <option value="vehicles">vehicles</option>
                    <option value="starships">starships</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">ID: </label>
                <input onChange={(e)=>setId(e.target.value)} type="number" />
            </div>
            <input type="submit" value="Search" className="btn btn-outline-primary" />
        </form>

        </>
    );
};

export default Form;