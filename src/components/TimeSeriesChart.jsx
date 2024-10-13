import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({ data }) => {
  const chartData = data.map((booking) => ({
    date: `${booking.arrival_date_year}-${booking.arrival_date_month}-${booking.arrival_date_day_of_month}`,
    visitors: parseInt(booking.adults) + parseInt(booking.children) + parseInt(booking.babies),
  }));

  const options = {
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'Number of Visitors per Day',
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: chartData.map(({ date, visitors }) => [new Date(date).getTime(), visitors]),
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} width={500}  />
    </div>
  );
};

export default TimeSeriesChart;
