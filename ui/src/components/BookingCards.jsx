import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";

const BookingCards = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

 

  return (
    <>
     

      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10">
          {bookings.map((book) => (
            <BookingCard key={book.bookingId} booking={book} />
          ))}
        </div>
      )}
    </>
  );
};

export default BookingCards;