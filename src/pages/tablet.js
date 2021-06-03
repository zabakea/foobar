import Order from "../Order";
import BeerPreview from "../BeerPreview";
import BeerList from "../BeerList";
import Guests from "../Guests";
// import ThemeToggle from "../ThemeToggle";
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
  const [form, setForm] = useState(null);
  const [baskets, setBaskets] = useState([[], [], [], []]);
  const [payments, setPayments] = useState([]);
  let beerPrice = prices.find((el) => el.name === beers[focus].beer);
  const handleAdding = (e) => {
    if (payments.includes(Number(guest))) {
      return;
    }
    function createNew(name, amount, price) {
      return {
        name,
        amount,
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
      let orgin = e.target.parentElement;
      let targetBasket = prev[guest - 1];
      let isHere = (el) => el.name === beerPrice.name;
      let Where = orgin.classList.contains("controls") ? targetBasket.indexOf(targetBasket[orgin.dataset.index]) : targetBasket.findIndex(isHere);
      let newBasket = [];
      if (Where > -1) {
        if (e.target.dataset.act === "+") {
          newBasket = targetBasket.map((el, index) => {
            if (Where === index) {
              return adding(el);
            } else {
              return el;
            }
          });
        } else if (e.target.dataset.act === "-") {
          newBasket = targetBasket.map((el, index) => {
            if (Where === index) {
              return substr(el);
            } else {
              return el;
            }
          });
        } else {
          newBasket = targetBasket.map((el, index) => {
            if (Where === index) {
              return { ...el, amount: 0 };
            } else {
              return el;
            }
          });
        }
      } else {
        if (e.target.dataset.act === "+") {
          newBasket = targetBasket.concat(createNew(beerPrice.name, 1, beerPrice.price));
        } else {
          newBasket = targetBasket;
        }
      }
      let New = [...prev];
      let cleanedUp = newBasket.filter((el) => (el.amount > 0 ? el : null));
      New[guest - 1] = cleanedUp;
      return New;
    });
  };

  const handlePayment = (index) => {
    setPayments((prev) => {
      if (prev.includes(index)) {
        return prev;
      } else {
        return [...prev, index];
      }
    });
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

  //         });
  //     return function cleaup() {
  //         abortController.abort();
  //     };
  // }, []);

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

  return (
    <div className={`Grid_Container ${theme ? "Dark_Theme" : "Light_Theme"}`}>
      <div className="Position_Grid" />
      <Guests
        focusing={(e) => {
          let index = e.target.dataset.index;
          setGuest(index);
          setForm(() => {
            if (payments.includes(Number(guest))) {
              return guest;
            } else {
              return null;
            }
          });
        }}
        formFocus={(e) => {
          let index = e.target.dataset.index;
          if (Number(form) === Number(index)) {
            setForm(null);
          } else {
            setForm(index);
          }
        }}
        form={form}
        guest={guest}
        baskets={baskets}
        handleAdding={handleAdding}
        handlePayment={handlePayment}
        payments={payments}
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
          }}
        ></button>
        <Order />
      </div>
    </div>
  );
};

export default Tablet;

//chnages for github
