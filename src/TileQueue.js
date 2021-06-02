
const TileQueue = ({ id, order }) => {
  // order = order.join(", ");


  const orders = order;
  console.log(orders);

  var counts = {};
  orders.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  // console.log(counts);

  Object.entries(counts).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
  });

  // var counts = {};
  // orders.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  // console.log(counts);

  return (
    <div className="Tile_Queue">
      <p>
        <b>Order no. {id}</b>
      </p>
      <p>{Object.entries(counts).toString()}</p>
    </div>
  );
};

export default TileQueue;