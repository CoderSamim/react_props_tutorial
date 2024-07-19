import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let fooditems = ["dal", "green vegs", "roti", "salad", "milk", "cofee"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={fooditems}></ErrorMessage>
      <FoodItems items={fooditems}></FoodItems>
    </>
  );
}

export default App;
