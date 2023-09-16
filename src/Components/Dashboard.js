import React, { useState } from 'react';
import {dashboardImages} from '../constants/Images';
import data from '../data/data.json';
import BarChart from './BarChart';
import HorizontalBarChart from './HorizontalBarChart';
import LineChart from './LineChart';
import Doughnut from './Doughnut';
import Card from './Card';
import './dashboard.css';

function Dashboard({ theme }) {

	const revenueDataRaw = data.revenueData;
	const salesDataRaw = data.salesData;
	const storeDataRaw = data.storesData;

	const [revenueData, setReveueData] = useState({
		labels: revenueDataRaw.map((data) => data.month),
		datasets: [{
			axis: 'y',
			label: "Users Gained",
			data: revenueDataRaw.map((data) => data.revenue),
			backgroundColor: "#7CB9E8",
		}]
	});

	const [salesData, setSalesData] = useState({
		labels: salesDataRaw.map((data) => data.category),
		datasets: [{
			axis: 'y',
			label: "Users Gained",
			data: salesDataRaw.map((data) => data.sales),
			backgroundColor: ["#002D62", "#EF0107", "#FFFF00", "#17B169", "#720e9e"],
		}]
	});

	const [storesData, setStoresData] = useState({
		labels: storeDataRaw.map((data) => data.storeName),
		datasets: [{
			axis: 'y',
			label: "Users Gained",
			data: storeDataRaw.map((data) => data.revenue),
			backgroundColor: ["#002D62", "#EF0107", "#FFFF00", "#17B169", "#720e9e", "#00BFFF"],
		}]
	});

  return (
    <main className={`main-container ${theme ? 'dark-theme' : ''}`}>
        <div className='main-title'>
            <h3>Dashboard</h3>
        </div>

        <div className='main-cards'>
            <Card 
                theme={theme}
                image={dashboardImages.revenueImage} 
                label1='Total Revenue'
                label2='$4,101.74'
                label3='Deposite - $3000'
            />
            <Card 
                theme={theme}
                image={dashboardImages.visitedImage} 
                label1='People Visited'
                label2='10,253'
            />
            <Card 
                theme={theme}
                image={dashboardImages.averagePerStore} 
                label1='Average per store day'
                label2='$3,021.74'
            />
            <Card 
                theme={theme}
                image={dashboardImages.unitsPerStore} 
                label1='Units per store day'
                label2='$1080'
            />
        </div>

        <div className='row'>
            <div className={`charts col-md-6 ${theme ? 'dark-cards' : ''}`}>
                <BarChart chartData={revenueData} theme={theme} />
            </div>
            <div className={`charts col-md-5 ${theme ? 'dark-cards' : ''}`}>
                <LineChart chartData={revenueData} theme={theme} />
            </div>
            <div className={`charts col-md-3 ${theme ? 'dark-cards' : ''}`}>
                <Doughnut chartData={salesData} theme={theme} />
            </div>
            <div className={`charts col-md-3 ${theme ? 'dark-cards' : ''}`}>
                <BarChart chartData={revenueData} theme={theme} />
            </div>
            <div className={`charts col-md-5 ${theme ? 'dark-cards' : ''}`}>
                <HorizontalBarChart chartData={storesData} theme={theme} />
            </div>
        </div>
    </main>
  )
}

export default Dashboard;