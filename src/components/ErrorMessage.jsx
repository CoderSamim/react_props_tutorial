function ErrorMessage({ items }) {
  //   let fooditems = ["dal", "green vegs", "roti", "salad", "milk"];

  let emptymessage = items.length == 0 ? <h3>I am hungry</h3> : null;

  return <>{emptymessage}</>;
}

export default ErrorMessage;
