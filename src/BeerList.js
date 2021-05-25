import BeerListUL from "./BeerListUL";

export default function BeerList({ beers, clickHandler, focus }) {
  return (
    <div className="Beer_List">
      <BeerListUL beers={beers} clickHandler={clickHandler} focus={focus} />
    </div>
  );
}
