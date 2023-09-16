import React from "react";
import { Line } from 'react-chartjs-2';
import {Chart as Chart} from 'chart.js/auto';
import './dashboard.css';

const darkThemeOptions = {
    plugins: {  // 'legend' now within object 'plugins {}'
        legend: {
          labels: {
            color: "white",  // not 'fontColor:' anymore
          }
        }
    },
    scales: {
        y: {  // not 'yAxes: [{' anymore (not an array anymore)
          ticks: {
            color: "white",
          }
        },
        x: {  // not 'xAxes: [{' anymore (not an array anymore)
          ticks: {
            color: "white",
          }
        }
    }
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

function LineChart ({ chartData, theme }) {
    return <Line data={chartData} options={ theme ? darkThemeOptions : lightThemeOptions} />;
}

export default LineChart;