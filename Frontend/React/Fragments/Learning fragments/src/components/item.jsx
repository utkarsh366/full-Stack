const Item = (props) => {
  return (
    <li key={props.fooditems} clasName="list-group-item">
      {props.fooditems}
    </li>
  );
};

export default Item;
