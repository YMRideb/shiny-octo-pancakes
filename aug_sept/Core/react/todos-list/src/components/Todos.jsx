import React, {useState} from "react";

const Todos = ()=>{

    //create a state variable to bind the form info
    //one-way first, then two ways to prepopulate the forms
    let [todo, setTodo] = useState("");

    //this is the array to hold the list of todos
    let [todolist, setTodolist] = useState([]);

    const submitHandler = (e)=>{
    e.preventDefault(); // this prevents the form submission from reloading the page
    console.log(todo);

        //put the todo into an object
        setTodo = {todo};
        console.log("You added a todo to the list!");
        console.log(todo);
        // setTodolist([...todolist, todo]); //this updates the array, adding the new object and making a copy of with the spread operator
        
    }

    return(
        <>
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Let's see....</label>
                        <input onChange={(e)=>{
                            submitHandler(e.target.value);
                        }} type="text" className="form-control" />
                    </div>
                    <input type="submit" className="btn btn-outline-success" />
                </form>
                <hr />
                {
                    todolist.map((todo, idx)=>{
                        return(
                            <div className="card">
                            <h1>This is supposed to be the area of todos</h1>
                            <p>im getting all of these to print</p>
                                {todo}
                                <button>This is a button!</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todos;