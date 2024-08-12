import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoitem from "./Components/ToDoitem";
import ToDoitem1 from "./Components/ToDoitem1";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />

      <ToDoitem1 />
      <ToDoitem />
    </center>
  );
}

export default App;
