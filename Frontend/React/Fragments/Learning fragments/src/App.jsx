import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  // let foodItems = ["Dal", "Green Vegetables", "Roti"];

  let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 ? <h3> I'm still hingry</h3> : null}
      <ul class="list-group">
        {foodItems.map((items) => (
          <li key={items} clasName="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
