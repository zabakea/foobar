import React from "react";
// import { useState, useEffect } from "react";

const ManagerRevenue = ({ serving }) => {
    //mapping through servings
    const mapOrders = serving.map((singleOrder) => singleOrder.order);
    var mergedOrders = [].concat.apply([], mapOrders);
    console.log(mergedOrders);
    // counting duplicate entries
    var counts = {};
    mergedOrders.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    console.log(counts);



    return (
        <div className="Manager_Revenue">
            <p>Served right now</p>

        </div>
    );
};

export default ManagerRevenue;
