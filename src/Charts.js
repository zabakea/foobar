import React from 'react';
import { Pie } from 'react-chartjs-2';



const Charts = ({ serving }) => {
    const mapOrders = serving.map((singleOrder) => singleOrder.order);

    console.log(mapOrders);

    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    return (
        <div className="Charts">
            <Pie className="Pie"
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Beers serving at the moment',
                        fontSize: 20
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