import AppName from "./Components/appName";
import AddToDo from "./Components/AddToDo";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <AddToDo />

      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy Milk </div>
          <div class="col-4">11/04/2024 </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">GoTo college </div>
          <div class="col-4">11/04/2024 </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
