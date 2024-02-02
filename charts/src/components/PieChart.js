import React from 'react'
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'; 

export const PieChart = ({chartData}) => {
  return (
    <div>
        <h1 style={{color:'red'}}>Pie Chart</h1>
        <Pie data={chartData}  />
    </div>
  )
}
