import React from "react";
// import { Pie, Bar } from 'react-chartjs-2';
import { Bar } from "react-chartjs-2";
// import { useState, useEffect } from "react";

const ChartsManager = ({ serving }) => {
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

  const state = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Beers",
        backgroundColor: ["#B14A5A", "#CC7E8C", "#54383C", "#00A6B4", "#6800B4", "#35014F", "#003350"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#175000", "#003350", "#35014F"],
        borderColor: "#bb98ef",
        fontColor: "#ffffff",
        fontSize: 20,
        data: Object.values(counts),
      },
    ],
  };

  return (
    <div className="ChartsManager">
      <p>BEERS BEING SERVED AT THE MOMENT</p>

      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default ChartsManager;
