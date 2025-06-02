function TodoItem2(){
let todoName="  BUY go to collage";
let todoDate="3 days a week";
let todoTime="  till 6:00 pm"; 


return (
    <div className="container ">
    <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-3">
            <button type="button" className="btn btn-danger w-100">Delete</button>
        </div>
    </div>

  
</div>
);

}
export default TodoItem2;
