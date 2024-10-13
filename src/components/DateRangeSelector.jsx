import React, { useState } from 'react';

const DateRangeSelector = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChange = () => {
    onDateRangeChange({ startDate: new Date(startDate), endDate: new Date(endDate) });
  };

  return (
    <div>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleChange}>Filter</button>
    </div>
  );
};

export default DateRangeSelector;
