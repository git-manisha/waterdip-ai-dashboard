import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
  const countryCounts = data.reduce((acc, booking) => {
    const country = booking.country;
    acc[country] = (acc[country] || 0) + (parseInt(booking.adults) + parseInt(booking.children) + parseInt(booking.babies));
    return acc;
  }, {});

  const categories = Object.keys(countryCounts);
  const seriesData = Object.values(countryCounts);

  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: categories,
      title: {
        text: 'Countries',
      },
    },
    yaxis: {
      title: {
        text: 'Number of Visitors',
      },
    },
    title: {
      text: 'Number of Visitors per Country',
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: seriesData,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} width={500} />
    </div>
  );
};

export default ColumnChart;
