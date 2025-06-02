function AddTodo() {
  return (
    <div className="todo-container text-center p-4">
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" className="form-control" placeholder="Enter todo here" />
          </div>
          <div className="col-3">
            <input type="date" className="form-control" />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-success w-100">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
