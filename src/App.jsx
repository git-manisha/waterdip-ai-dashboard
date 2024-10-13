import React, { useEffect, useState } from "react";
import DateRangeSelector from "./components/DateRangeSelector";
import TimeSeriesChart from "./components/TimeSeriesChart";
import FileUpload from "./components/FileUpload";
import Papa from "papaparse";
import SparklineChart from "./components/SparklineChart";
import ColumnChart from "./components/ColumnChart";
import {motion} from "framer-motion";

import "./App.css";
import { div } from "framer-motion/client";
const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleFileChange = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const results = Papa.parse(text, { header: true });
      setData(results.data);
      setFilteredData(results.data);
    };
    reader.readAsText(file);
  };

  const handleDateRangeChange = ({ startDate, endDate }) => {
    const filtered = data.filter((booking) => {
      const bookingDate = new Date(
        `${booking.arrival_date_year}-${booking.arrival_date_month}-${booking.arrival_date_day_of_month}`
      );
      return bookingDate >= startDate && bookingDate <= endDate;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="over">
    <motion.div
      className="main"
      initial={{ opacity: 0, scale: 1.6,y:50 }}
      animate={{ opacity: 1, scale: 1 ,y:0}}
      transition={{ duration: 0.5 }}
    >
      <h1>Hotel Booking Dashboard</h1>
      <div className="row">
        <FileUpload className="FileUpload" onFileChange={handleFileChange} />
        <DateRangeSelector onDateRangeChange={handleDateRangeChange} />
      </div>

      <div className="col">
        <TimeSeriesChart data={filteredData} />
        <ColumnChart data={filteredData} />
      </div>
      <div className="col">
        <SparklineChart data={filteredData} type="adults" />
        <SparklineChart data={filteredData} type="children" />
      </div>
    </motion.div>
    </div>
  );
};

export default App;
