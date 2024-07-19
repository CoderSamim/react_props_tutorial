import Item from "./Item";

function FoodItems({ items }) {
  //   let fooditems = ["dal", "green vegs", "roti", "salad", "milk"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} fooditems={item}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
