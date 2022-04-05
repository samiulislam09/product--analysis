import React, { useEffect, useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './Dashboard.css'

function Dashboard() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  return (
    <div className='chart-container'>
      <div className="line-chart chart">
        <p className='chart-title'>Investment VS Revenue</p>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
            <Line type="monotone" dataKey='sell' stroke="#8884d8" strokeWidth={2} />
          </LineChart>

      </div>
      <div className="area-chart chart">
        <p className='chart-title'>Investment VS Revenue</p>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </div>
      <div className="bar-chart chart">
        <p className='chart-title'>Investment VS Revenue</p>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
          <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="pie-chart chart">
        <p className='chart-title'>Investment VS Revenue</p>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </div>
      
    </div>
  )
}
export default Dashboard