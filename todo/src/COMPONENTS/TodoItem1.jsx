function TodoItem1(){
let todoName="  BUY MILK";
let todoDate="everyday";
let todoTime=" 6:00 pm";

return (
    <div className="container">
    <div className="row  kgp-row">
        <div className="col-6">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-3">
            <button type="button" className="btn btn-danger w-100">Delete</button>
        </div>
    </div>

    
</div>
);

}
export default TodoItem1;
