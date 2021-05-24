import BeerListUL from "./BeerListUL";

export default function BeerList({ beers, clickHandler }) {
  return (
    <div className="Beer_List">
      <BeerListUL beers={beers} clickHandler={clickHandler} />
    </div>
  );
}
