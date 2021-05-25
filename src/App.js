import Order from "./Order";
import BeerPreview from "./BeerPreview";
import BeerList from "./BeerList";
import Guests from "./Guests";
import "./sass/main.scss";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";

export default function App() {
  const [beers, setBeers] = useState([]);
  const [focus, setFocus] = useState(0);
  const [detail, setDetail] = useState([]);
  const [prices, setPrices] = useState([]);
  const [theme, themeToggle] = useState(true);

  useEffect(() => {
    fetch("https://pivobar.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setBeers(
          data.taps.map((btype) => {
            return {
              ...btype,
              focus: false,
            };
          })
        );
      });
  }, []);

  useEffect(() => {
    fetch("https://pivobar.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then(setDetail);
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

  return (
    <div className={`${theme ? "Dark_Theme" : "Light_Theme"}`}>
      <Guests />
      <div className="Main_Content">
        <BeerList
          beers={beers}
          clickHandler={(e) => {
            // setBeers((beers) => {
            //   return beers.map((beer) => {
            //     if (beer.id === Number(e.target.dataset.index)) {
            //       return {
            //         ...beer,
            //         focus: beer.focus ? false : true,
            //       };
            //     } else {
            //       return {
            //         ...beer,
            //         focus: false,
            //       };
            //     }
            //   });
            // });
            setFocus([...e.target.parentElement.querySelectorAll("li")].indexOf(e.target));
          }}
        />
        <BeerPreview beers={beers} prices={prices} details={detail} focus={focus} />
      </div>
      <Order />
      <button
        className={`Theme_Toggle ${theme ? "Theme_Toggle_Moon" : "Theme_Toggle_Sun"}`}
        onClick={() => {
          themeToggle(!theme);
          console.log(theme);
        }}
      ></button>
    </div>
  );
}
