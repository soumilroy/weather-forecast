import React from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

const TodayForecast = ({ hourlyData }) => {
  const timeLabels = hourlyData.map(each =>
    moment.unix(each.dt).format('h:mm a'),
  )
  const dataSet = hourlyData.map(each => each.temp)
  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Temperature in Celcius',
        data: dataSet,
        fill: false,
        backgroundColor: 'rgb(100,45,195, .4)',
        borderColor: 'rgb(100,45,195)',
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  return (
    <>
      <h3 className='font-bold text-gray-700'>Today's Forecast</h3>
      <Line data={data} options={options} />
    </>
  )
}

export default TodayForecast
