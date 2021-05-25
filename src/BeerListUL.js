const BeerListUL = ({ beers, clickHandler, focus }) => {
  // console.log(focus);
  return (
    <ul>
      {beers.map((beer, index) => {
        return (
          <li key={beer.id} className={index === focus ? "focus" : ""} onClick={clickHandler}>
            {beer.beer}
          </li>
        );
      })}
    </ul>
  );
};

export default BeerListUL;
