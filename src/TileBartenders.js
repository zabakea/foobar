const TileBartenders = ({ name, status, detail, tap }) => {
  return (
    <div className="Tile_Bartenders">
      <h2>{name}</h2>
      <p>
        is currently {status}. He is {detail} from tap {tap}.
      </p>
    </div>
  );
};

export default TileBartenders;
