

import React, { useState } from 'react';


const SearchBookings = ({ onResults }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [result, setResult] = useState('');

  const searchBookings = async () => {
    try {
      const response = await fetch(`/api/bookings/${checkInDate}`);
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        setResult(data);
        console.log(data)
      } else {
        console.error('Failed to fetch bookings');
        setResult([]);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult([]);
    }
  };

  const handleSearch = () => {
    if (checkInDate) {
      searchBookings();
    }
  };

  return (
    <div>
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        placeholder="Enter check in date"
      />
      <button onClick={handleSearch}>Search</button>
     
       
    
    </div>
  );
};

export default SearchBookings;