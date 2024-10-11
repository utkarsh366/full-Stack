import Item from "./item";

const FoodItems = ({ items }) => {
  return (
    <ul class="list-group">
      {items.map((items) => (
        <Item> foodItem = {items} </Item>
      ))}
    </ul>
  );
};

export default FoodItems;
