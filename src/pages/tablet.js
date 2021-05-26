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
            <Guests />
            <div className="Main_Content">
                <BeerList
                    focus={focus}
                    beers={beers}
                    clickHandler={(e) => {
                        setFocus(() => [...e.target.parentElement.querySelectorAll("li")].indexOf(e.target));
                    }}
                />
                <BeerPreview beers={beers} prices={prices} details={detail} focus={focus} />
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
}

export default Tablet;