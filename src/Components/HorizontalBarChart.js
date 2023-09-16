import React from "react";
import { Bar } from 'react-chartjs-2';
import {Chart as Chart} from 'chart.js/auto';
import './dashboard.css';

const darkThemeOptions = {
    responsive: true, 
    indexAxis: 'y',
    plugins: {  
        legend: {
          labels: {
            color: "white",  
          }
        }
    },
    scales: {
        y: {  
          ticks: {
            color: "white",
          },
          grid: {
            color: "white"
          },
        },
        x: {  
          ticks: {
            color: "white",
          },
          grid: {
            color: "white"
          },
        }
    }
};

const lightThemeOptions = {
    responsive: true, 
    indexAxis: 'y',
    maintainAspectRatio: false,
    plugins: { 
        legend: {
          labels: {
            color: "black",  
          }
        }
    },
    scales: {
        y: { 
          ticks: {
            color: "black",
          }
        },
        x: {  
          ticks: {
            color: "black",
          }
        }
    }
};

function BarChart ({ chartData, theme}) {
    return <Bar data={chartData} options={theme ? darkThemeOptions : lightThemeOptions} />;
}

export default BarChart;