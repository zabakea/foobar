import Order from "./Order";
import BeerPreview from "./BeerPreview";
import BeerList from "./BeerList";
import Guests from "./Guests";
import "./sass/main.scss";
import { useEffect, useState } from "react";
const initData = [];
const initTypes = [];
const initPrice = [];

function App() {
  const [beers, setBeers] = useState(initData);
  const [focus, setFocus] = useState(0);
  const [types, setTypes] = useState(initTypes);
  const [prices, setPrices] = useState(initPrice);

  useEffect(() => {
    fetch("https://pivobar.herokuapp.com/")
      .then((res) => res.json())
      .then((data) =>
        setBeers(data.taps)
      )
  }, []);

  useEffect(() => {
    fetch("https://pivobar.herokuapp.com/beertypes")
      .then((resType) => resType.json())
      .then(setTypes);
  }, []);

  useEffect(() => {
    fetch("https://videogames-20c7.restdb.io/rest/foobar", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "6074094df592f7113340efe3",
        "cache-control": "no-cache",
      },
    })
      .then((resPrice) => resPrice.json())
      .then(setPrices);
  }, []);

  console.log(prices);
  console.log(types);

  return (
    <>
      <Guests />
      <div className="Main_Content">
        <BeerList
          beers={beers}
          clickHandler={(e) => {
            setFocus(e.target.dataset.index)
          }}
          focus={focus}
        />
        <BeerPreview />
      </div>
      <Order />
    </>
  );
}

export default App;
