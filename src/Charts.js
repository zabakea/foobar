import React from 'react';
import { Pie } from 'react-chartjs-2';
// import { useState, useEffect } from "react";




const Charts = ({ serving }) => {
    //mapping through servings
    const mapOrders = serving.map((singleOrder) => singleOrder.order);
    var mergedOrders = [].concat.apply([], mapOrders);
    console.log(mergedOrders);
    // counting duplicate entries
    var counts = {};
    mergedOrders.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts);


    const state = {
        labels: Object.keys(counts),
        datasets: [
            {
                label: 'Beers',
                backgroundColor: [
                    '#B14A5A',
                    '#CC7E8C',
                    '#54383C',
                    '#00A6B4',
                    '#6800B4',
                    '#35014F',
                    '#003350'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                borderColor: '#bb98ef',
                data: Object.values(counts)
            }
        ]
    };




    return (
        <div className="Charts">
            <p>BEERS BEING SERVED AT THE MOMENT</p>
            <Pie className="Pie"
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Beers serving at the moment',
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: 'right'

                    }
                }}
            />
        </div>
    );
};

export default Charts;