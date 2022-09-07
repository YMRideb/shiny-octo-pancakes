import React, {useState} from "react";

const Todos = ()=>{

    //create a state variable to bind the form info
    //one-way first, then two ways to prepopulate the forms
    let [todo, setTodo] = useState("");

    //this is the array to hold the list of todos
    let [todolist, setTodolist] = useState([]);

    const submitHandler = (e)=>{

        e.preventDefault(); // this prevents the form submission from reloading the page

        //put the todo into an object
        let todoObj = {todo};
        console.log("You added a todoObj to the list!");
        console.log(todo);
        setTodolist([...todolist, todoObj]); //this updates the array, adding the new object and making a copy of with the spread operator
    }

    return(
        <>
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Let's see....</label>
                        <input type="text" className="form-control" />
                    </div>
                    <input type="submit" className="btn btn-outline-success" />
                </form>
                <hr />
                {
                    todolist.map((todo, idx)=>{
                        return(
                            <div>
                                {todo}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todos;