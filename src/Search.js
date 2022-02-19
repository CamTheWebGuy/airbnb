import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useNavigate } from 'react-router-dom';

// Main style file
import 'react-date-range/dist/styles.css';
// Theme CSS file
import 'react-date-range/dist/theme/default.css';

import './Search.css';

function Search() {
  const navigate = useNavigate();
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
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type='number' />
      <Button onClick={() => navigate('/search')}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
