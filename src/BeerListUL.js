const BeerListUL = ({ beers, clickHandler }) => {
  // console.table(beers);
  return (
    <ul>
      {beers.map((beer) => {
        return (
          <li key={beer.id} data-index={beer.id} onClick={clickHandler} className={beer.focus ? "focus" : ""}>
            {beer.beer}
          </li>
        );
      })}
    </ul>
  );
};

export default BeerListUL;
