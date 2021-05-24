const BeerListUL = ({ beers, clickHandler }) => {
  return (
    <ul>
      {beers.map((beer, index) => (
        <li key={beer.id} data-index={index} onClick={clickHandler}>
          {beer.beer}
        </li>
      ))}
    </ul>
  );
};

export default BeerListUL;
