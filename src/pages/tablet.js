import Order from "../Order";
import BeerPreview from "../BeerPreview";
import BeerList from "../BeerList";
import Guests from "../Guests";
// import "../sass/main.scss";
import { useEffect, useState } from "react";
import React from "react";

const Tablet = () => {
  const [beers, setBeers] = useState([]);
  const [focus, setFocus] = useState(0);
  const [detail, setDetail] = useState([]);
  const [prices, setPrices] = useState([]);
  const [theme, themeToggle] = useState(true);
  const [guest, setGuest] = useState(1);
  const [baskets, setBaskets] = useState([[], [], [], []]);
  let beerPrice = prices.find((el) => el.name === beers[focus].beer);
  const handleAdding = (e) => {
    function createNew(name, price) {
      return {
        name,
        amount: 1,
        price,
      };
    }
    function adding(obj) {
      return { ...obj, amount: obj.amount + 1 };
    }
    function substr(obj) {
      return { ...obj, amount: obj.amount - 1 };
    }
    setBaskets((prev) => {
      let targetBasket = prev[guest - 1];
      let isHere = (el) => el.name === beerPrice.name;
      let Where = targetBasket.findIndex(isHere);
      if (Where > -1) {
        switch (e.target.dataset.act) {
          case "+":
            targetBasket.splice(Where, 1, adding(targetBasket[Where]));
            break;
          case "-":
            console.log("substracting");
            targetBasket.splice(Where, 1, substr(targetBasket[Where]));
            break;
          default:
            console.log("missed");
        }
      } else {
        targetBasket.push(createNew(beerPrice.name, beerPrice.price));
      }
      let New = [...prev];
      New[guest - 1] = targetBasket;
      // console.log(New);
      return New;
    });

    // setBaskets((prev) => {
    //   console.log(baskets);
    //   let targetBasket = prev[guest - 1];
    //   let isHere = (el) => el.name === beerPrice.name;
    //   let Where = targetBasket.findIndex(isHere);
    //   const update = () => {
    //     console.log(Where);
    //     if (Where > -1) {
    //       console.log("here");
    //       if (e.target.classList.contains("Plus")) {
    //         console.log(targetBasket);
    //         return [
    //           targetBasket.map((el) => {
    //             if (el.name === beerPrice.name) {
    //               return { ...el, amount: el.amount++ };
    //             }
    //             return el;
    //           }),
    //         ];
    //       }
    //       return [targetBasket[Where]];
    //     } else {
    //       console.log("is not");
    //       if (e.target.classList.contains("Plus")) {
    //         return createNew(beerPrice.name, 1, beerPrice.price);
    //       } else {
    //         console.log("minus");
    //       }
    //     }
    //   };
    //   prev.splice(guest - 1, 1, [update()]);
    //   console.log(baskets);
    //   return prev;
    // });
  };
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://pivobar.herokuapp.com/", { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        //UNDERSTAND IT BEFORE AN EXAM ! !
        const noDoubles = data.taps.reduce((acc, current) => {
          const x = acc.find((item) => item.beer === current.beer);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
        setBeers(noDoubles);
      });
    return function cleaup() {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://pivobar.herokuapp.com/beertypes", { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });

    return function cleaup() {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://videogames-20c7.restdb.io/rest/foobar", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "6074094df592f7113340efe3",
        "cache-control": "no-cache",
      },
      signal: signal,
    })
      .then((resPrice) => resPrice.json())
      .then((data) => {
        setPrices(data);
      });
    return function cleaup() {
      abortController.abort();
    };
  }, []);

  // console.log(prices);
  // console.log(types);

  //changing themes

  return (
    <div className={`Grid_Container ${theme ? "Dark_Theme" : "Light_Theme"}`}>
      <Guests
        focusing={(e) => {
          let index = e.target.dataset.index;
          // console.log(index);
          setGuest(index);
        }}
        guest={guest}
        baskets={baskets}
      />
      <div className="Main_Content">
        <BeerList
          focus={focus}
          beers={beers}
          clickHandler={(e) => {
            setFocus(() => [...e.target.parentElement.querySelectorAll("li")].indexOf(e.target));
          }}
        />
        <BeerPreview beers={beers} prices={prices} details={detail} focus={focus} onClick={handleAdding} />
      </div>
      <div className="Footer_Content">
        <button
          className={`Theme_Toggle ${theme ? "Theme_Toggle_Moon" : "Theme_Toggle_Sun"}`}
          onClick={() => {
            themeToggle(!theme);
            console.log(theme);
          }}
        ></button>
        <Order />
      </div>
    </div>
  );
};

export default Tablet;
