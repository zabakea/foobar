const TileQueue = ({ id, order }) => {
  order = order.join(", ");

  return (
    <div className="Tile_Queue">
      <p>
        <b>Order no. {id}</b>
      </p>
      <p>{order}</p>
    </div>
  );
};

export default TileQueue;
