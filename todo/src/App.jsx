import AppName from "./COMPONENTS/AppName.jsx";
import AddTodo from "./COMPONENTS/AddTodo.jsx";
import TodoItem1 from "./COMPONENTS/TodoItem1.jsx";
import TodoItem2 from "./COMPONENTS/Todoitem2.jsx";
import "./App.css";

function App() {
  return (
    <center className="todo-container text-center p-4">
       <AppName />
       <AddTodo/>
       <div className="items-container">
           <TodoItem1 />
           <TodoItem2 />
       </div>
    </center>
  );
}

export default App;
