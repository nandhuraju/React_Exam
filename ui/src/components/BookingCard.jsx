import React from 'react';

import { Link } from 'react-router-dom';

const BookingCard = ({ booking }) => {
  const { checkInDate, checkOutDate, bookingId,personName,roomNo } = booking;

  return (
    <div className='bg-purple-100 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <h2 className='font-bold text-lg text-purple-900'>Name : {personName}</h2>
     
      <p className='text-black mb-4'>Check In Date :{checkInDate}</p>
      <p className='text-black mb-4'>Check Out date :{checkOutDate}</p>
      <p className='text-black mb-4'>Room No : {roomNo}</p>

     
    </div>
  );
};

export default BookingCard;