const Todo = (props) => {
  const todoClasses = [];
  if (props.todo.complete) {
    todoClasses.push("line-through");
  }

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            props.handleCheckbox(props.idx);
          }}
          checked={props.todo.complete}
          type="checkbox"
          name=""
          id=""
        />
        <span className={todoClasses.join(" ")}>{props.todo.title}</span>
        <button
          onClick={(e) => {
            props.handleDelete(props.idx);
          }}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Todo;
