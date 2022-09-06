import React, {useState} from "react";

const BoxGenerator = () => {
    // creates the state variable to bind submission info ?two-way binding?
    let [boxColor, setBoxColor] = useState("");
    let [boxList, setBoxList] = useState("");

    const renderColor = (e, boxColor)=>{
        console.log("You generated a new box!", boxColor);
        // let boxListNew = boxList.map ??
    }

    return(
        <div className="container d-flex justify-content-around">
            <div className="form-group">
                <label htmlFor="boxColor">Box Color to be added:</label>
                <input type="text" className="form-control" />
                {/* validations would go here */}
                <submit onClick={(e)=>setBoxColor(e.target.value)} className="form-control btn btn-outline-success">Colorize it Yo!</submit>
            </div>
            <hr />
            <div className="boxList">
                <div className="background-color: {boxColor}"></div>
            </div>
        </div>
    )
}

export default BoxGenerator;