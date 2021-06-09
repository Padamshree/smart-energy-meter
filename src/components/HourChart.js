import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// import { Line } from 'react-chartjs-2';

const HourChart = (props) => {
  let d = new Date();
  let dayarray = [...Array(24).keys()];
  dayarray = [
      ...dayarray.slice(d.getHours() + 1, 24),
      ...dayarray.slice(0, d.getHours() + 1)
  ];

  const data = {
      labels: dayarray.map(elm => elm.toString() + ':00'),
      datasets: [
        {
          label: 'hourly unit consumption (kWh)',
          data: props.data,
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

  const chartConfig = {
    type: 'line',
    data,
    options,
  };

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  useEffect(() => {
    if (chartInstance) {
      updateDataset(0, props.data);
    } else if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [props]);

  return ( <canvas ref={chartContainer} /> );
}

export default HourChart;