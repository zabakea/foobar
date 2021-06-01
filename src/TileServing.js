const TileServing = ({ id, order, name }) => {
  order = order.join(", ");

  return (
    <div className="Tile_Serving">
      <h2>{name}</h2>
      <p>
        is pouring <b>order no. {id}</b>
      </p>
      <p>{order}</p>
    </div>
  );
};

export default TileServing;
