import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
// Main style file
import 'react-date-range/dist/styles.css';
// Theme CSS file
import 'react-date-range/dist/theme/default.css';

import './Banner.css';

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
}

export default Search;
