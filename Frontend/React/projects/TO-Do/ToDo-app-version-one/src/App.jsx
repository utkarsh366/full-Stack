import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoitem from "./Components/ToDoitem";
import ToDoitem1 from "./Components/ToDoitem1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="Item-container">
        <ToDoitem1 />
        <ToDoitem />
      </div>
    </center>
  );
}

export default App;
