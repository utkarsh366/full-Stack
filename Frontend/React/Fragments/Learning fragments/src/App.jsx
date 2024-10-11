import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti"];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 ? <h3> I'm still hingry</h3> : null}
      <ErrorMessage items={foodItems}></ErrorMessage>

      <FoodItems items={foodItems}> </FoodItems>
    </>
  );
}

export default App;
