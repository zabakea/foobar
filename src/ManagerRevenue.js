import React from "react";
// import { useState, useEffect } from "react";



const ManagerRevenue = ({ taps, prices }) => {



    const mapLevels = taps.map((level) => {

        const mapPrices = prices.map((price) => {
            if (level.beer === price.name) {
                const beersSold = (2500 - level.level) / 50;
                console.log(beersSold);
                // var mergedOrders = [].concat.apply([], mapOrders);
                return beersSold;
            }
        });
        return mapPrices;
    });
    console.log(mapLevels);



    return (
        <div className="Manager_Revenue">
            <p>Served right now</p>

        </div>
    );
};

export default ManagerRevenue;
