import React, {useState} from "react";

const BoxGenerator = () => {
    
    let [boxColor, setBoxColor] = useState("");

    //array to hold the list of boxes displayed
    let [boxList, setBoxList] = useState([]);

    //function that runs when you click the button to submit the form
    const submitForm = (e)=>{

        e.preventDefault(); //this will prevent the form submission from reloading the page
        
        //put the boxcolor into an object
        let boxObj = {boxColor};
        console.log("box created!");
        console.log(boxObj);
        setBoxList([...boxList, boxObj]); //update the array, and add the boxObj to the array (spread operator is used to make a copy)

    }

    return(
        <>
            <h2>Fill out this field and then click!</h2>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="">Color:</label>
                    <input className="form-control" type="text" />
                </div>
                <input className="btn btn-outline-success" type="submit" value="(^_^)" />
            </form>
            <hr />
            {
                boxList.map((box, idx)=>{
                    return(
                        <div>
                            <div className="newBoxColor">here is your |{box}| box </div>
                        </div>
                    ) 
                })
            }
        </>
    )
}

export default BoxGenerator;