import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {foodItems.map((items) => (
          <li clasName="list-group-item">{items}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
