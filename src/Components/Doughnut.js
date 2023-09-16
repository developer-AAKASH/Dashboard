import React from "react";
import { Doughnut } from 'react-chartjs-2';
import {Chart as Chart} from 'chart.js/auto';
import './dashboard.css';

const scalesObject = {
    y: {  
        ticks: {
            display: false,
        },
        grid: {
          display: false
        },
        border:{
          display:false
        }
      },
    x: {  
        ticks: {
            display: false,
        },
        grid: {
            display: false
        },
        border:{
            display:false
        }
    }
};

const darkThemeOptions = {
    plugins: {  
        legend: {
          labels: {
            color: "white",  
          }
        }
    },
    scales: scalesObject
};

const lightThemeOptions = {
    maintainAspectRatio: false,
    plugins: {  
        legend: {
          labels: {
            color: "black",  
          }
        }
    },
    scales: scalesObject
};

function LineChart ({ chartData, theme }) {
    return <Doughnut data={chartData} options={theme ? darkThemeOptions : lightThemeOptions} />;
}

export default LineChart;