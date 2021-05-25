import Order from "./Order";
import BeerPreview from "./BeerPreview";
import BeerList from "./BeerList";
import Guests from "./Guests";
import "./sass/main.scss";
import { useEffect, useState } from "react";

const initData = [];
const initTypes = [];
const initPrice = [];

export default function App() {
  const [beers, setBeers] = useState(initData);
  const [types, setTypes] = useState(initTypes);
  const [prices, setPrices] = useState(initPrice);

  useEffect(() => {
    fetch("https://pivobar.herokuapp.com/")
      .then((res) => res.json())
      .then((data) =>
        setBeers(
          data.taps.map((btype) => {
            return {
              ...btype,
              focus: false,
            };
          })
        )
      );
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

  // console.log(prices);
  // console.log(types);

  //changing themes
  var theme = true;
  const root = document.documentElement;

  function themeToggle() {
    if (theme) {
      theme = false;
      root.style.setProperty("--header-color", "green");
    } else {
      theme = true;
      root.style.setProperty("--header-color", "white");
    }
  }

  return (
    <>
      <Guests />
      <div className="Main_Content">
        <BeerList
          beers={beers}
          clickHandler={(e) => {
            console.log(e.target.dataset.index);
          }}
        />
        <BeerPreview />
      </div>
      <Order />
      <button onClick={themeToggle}>Theme toggle</button>
    </>
  );
}
