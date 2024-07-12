import React from 'react';

const BookingResults = ({ bookings }) => {
  return (
    <div>
      <h2>Booking Results</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>{JSON.stringify(booking)}</li>
          ))}
        </ul>
      ) : (
        <p>No bookings found</p>
      )}
    </div>
  );
};

export default BookingResults;
