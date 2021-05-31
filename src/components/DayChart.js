import React from 'react';
import getDateArray from '../utils/getDates';
import { Line } from 'react-chartjs-2';

const DayChart = () => {

    const montharray = getDateArray().reverse();

    const tempData = {
        labels: montharray,
        datasets: [
          {
            label: "Last 30 days' unit consumption (kWh)",
            data: [...Array(30).keys()],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
    }

    const options = {
        scales: {
          y: { beginAtZero: true }
        },
        maintainAspectRatio: false,
    }

    return (
        <Line 
            data={tempData}
            options={options}
        />
    );
}

export default DayChart;